# Last.fm Now Playing Setup Guide

This guide will help you set up the Last.fm "Now Playing" widget on your website.

## Step 1: Create a Last.fm API Account

1. Go to [Last.fm API Account Creation](https://www.last.fm/api/account/create)
2. Log in with your Last.fm account (or create one if you don't have one)
3. Fill in the application details:
   - **Application name**: Your website name (e.g., "My Portfolio")
   - **Application description**: Brief description
   - **Application homepage**: Your website URL
   - **Callback URL**: Can be left empty for this use case
4. Click **Submit**
5. You'll receive an **API Key** - save this!

## Step 2: Connect Your Music Service to Last.fm (Scrobbling)

Last.fm works by "scrobbling" (tracking) your music from various services. To show what you're currently playing, you need to connect your music service:

### Spotify
1. Go to [Last.fm Settings](https://www.last.fm/settings/applications)
2. Click **Connect** next to Spotify
3. Authorize the connection

### Apple Music
1. Download a scrobbling app like [Marvis Pro](https://apps.apple.com/app/marvis-pro/id1447768809) or [Finale](https://apps.apple.com/app/finale-for-last-fm/id1518365620)
2. Connect your Last.fm account in the app settings

### Other Services
Visit [Last.fm Scrobbling](https://www.last.fm/about/trackmymusic) for a full list of supported services and apps.

## Step 3: Add Environment Variables

1. Create a `.env.local` file in your project root (copy from `.env.local.example`)
2. Add your credentials:

```env
LASTFM_API_KEY=your_api_key_here
LASTFM_USERNAME=your_lastfm_username_here
```

## Step 4: Test It Out!

1. Start your development server: `bun dev`
2. Play a song on your connected music service
3. Check your website's footer - you should see your currently playing track!

## Features

- **Album artwork**: Displays the album cover from Last.fm
- **Click to open**: Clicking the widget opens the song on Last.fm
- **Auto-updates**: Refreshes every 10 seconds

## Troubleshooting

- **Not showing anything**: Make sure you're playing music on a connected/scrobbling service
- **Shows "Not playing"**: Last.fm can take a few seconds to register a new track. Also ensure your scrobbler is working correctly.
- **API errors**: Check that your environment variables are set correctly
- **No album art**: Some tracks may not have album artwork in Last.fm's database
