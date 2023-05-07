# NTS Radio

_Music is your only friend, until the end_

Search and access [NTS Radio](https://www.nts.live) shows, episodes, and live streams directly from Raycast! This is an unofficial (fan) implementation based on the (undocumented) public NTS Radio API.

This extension allows you to:

- Stream live stations (1 and 2) as well as "Infinite Mixtapes" directly from Raycast.
- Search for shows and episodes (just like you would on nts.live).
- View details of episodes (e.g., broadcast date, location of broadcast).
- Play episodes on NTS.live, Mixcloud, or Soundcloud (depending on where the episode is published).
- View song tracklist (if available).
- Quickly search for tracklist songs on Discogs, Spotify, or Youtube, or copy to clipboard.
- Add episodes to your “My Favourites” section for quick access (independent of favourites saved in your NTS account).
- Access "Latest" twelve published episodes

## FAQ

- Why can’t I play episodes directly in the extension?

NTS episodes are stored on Mixcloud (and often Soundcloud as well). Right now, unfortunately, neither Mixcloud nor Soundcloud allow you to stream tracks via their APIs. Should this change, I’ll be happy to add the functionality.

- Then why can I play/stream the live stations and infinite mixtapes?

Live stations and mixtapes are audio streams hosted by NTS and can be accessed by any client software using the respective stream URL. This extension uses macOS' QuickTime Player to play streams (please make sure to have it installed if you want to use this feature).

- Why can’t I just use my favourites list from my NTS account?

This extension is an unofficial implementation and thus cannot access any NTS user account information. If your favourites list is not too long, it should be relatively quick to add it manually using Raycast.
