import { NextResponse } from 'next/server';
import { getRecentTrack, LastFmResponse } from '@/lib/lastfm';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await getRecentTrack();

    if (!response.ok) {
      return NextResponse.json({ isPlaying: false });
    }

    const data: LastFmResponse = await response.json();

    if (!data.recenttracks?.track?.[0]) {
      return NextResponse.json({ isPlaying: false });
    }

    const track = data.recenttracks.track[0];
    const isPlaying = track['@attr']?.nowplaying === 'true';

    // Get the largest image available
    const albumImageUrl = track.image?.find(img => img.size === 'extralarge')?.['#text']
      || track.image?.find(img => img.size === 'large')?.['#text']
      || track.image?.[track.image.length - 1]?.['#text'];

    return NextResponse.json({
      isPlaying,
      title: track.name,
      artist: track.artist['#text'],
      album: track.album['#text'],
      albumImageUrl: albumImageUrl || null,
      songUrl: track.url,
    });
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}
