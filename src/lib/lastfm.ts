const API_KEY = process.env.LASTFM_API_KEY;
const USERNAME = process.env.LASTFM_USERNAME;

const LASTFM_ENDPOINT = 'https://ws.audioscrobbler.com/2.0/';

export interface LastFmTrack {
  name: string;
  artist: { '#text': string };
  album: { '#text': string };
  image: { '#text': string; size: string }[];
  url: string;
  '@attr'?: { nowplaying: string };
}

export interface LastFmResponse {
  recenttracks: {
    track: LastFmTrack[];
  };
}

export const getRecentTrack = async (): Promise<Response> => {
  const params = new URLSearchParams({
    method: 'user.getrecenttracks',
    user: USERNAME!,
    api_key: API_KEY!,
    format: 'json',
    limit: '1',
  });

  return fetch(`${LASTFM_ENDPOINT}?${params}`);
};
