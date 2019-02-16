# Africa vs. Africa (API)

A simple Express app that leverages the Spotify Web API to compare plays of "Africa" by Toto, and Weezer's "Africa"

## Description

This app uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to compare Toto's original and Weezer's cover of the song "Africa". Data for each tracks is queried when the page is loaded, then the "popularity" metric provided by Spotify will be compared. The comparison and all the necessary components for it are built using React.

To see the React app used to render the web client, [click here]()

### Spotify's Popularity Metric

From Spotify:

> The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time.

## Why

In 2018, the song "Africa" by Toto underwent a [bit of a resurgence](https://www.rollingstone.com/music/music-features/toto-africa-the-new-anthem-747262/), which led to an online fan petition for the band Weezer to cover it. Weezer's resulting cover landed them in the Hot 100 list, and continued to increase the popularity of Toto's original.

As a fan of both versions of the song, I thought it would be an interesting comparison to see how the resurging original compares to it's modern counterpart. Also, I just really wanted to try out React.