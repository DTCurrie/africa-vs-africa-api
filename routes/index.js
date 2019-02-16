var express = require('express');
var SpotifyWebApi = require('spotify-web-api-node');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var router = express.Router();

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

var expiration = 0;

function checkCredentials() {
  return new Promise((resolve, reject) => {
    if (Date.now() < expiration) {
      resolve();
      return;
    }

    getCredentials()
      .then(() => resolve(), (err) => reject(err))
      .catch((err) => reject(err));
  });
}

function getCredentials() {
  return new Promise((resolve, reject) => {
    spotifyApi.clientCredentialsGrant()
      .then(
        (data) => {
          expiration = Date.now() + data.body.expires_in;
          spotifyApi.setAccessToken(data.body.access_token);
          resolve();
        },
        (err) => reject(`Something went wrong when retrieving an access token: ${err}`))
      .catch((err) => reject(`Something went wrong when retrieving an access token: ${err}`));
  });
}

router.get('/track/:id', function(req, res) {
  checkCredentials()
    .then(
      () => {
        spotifyApi.getTrack(req.params.id).then(
          (data) => res.status(200).send(data),
          (err) => res.status(500).send({
            error: `Something went wrong when retrieving the track data: ${err}`
          })
        );
      },
      (err) => res.status(500).send({
        error: `Something went wrong when checking the credentials: ${err}`
      }))
    .catch((err) => res.status(500).send({
      error: `Something went wrong when checking the credentials: ${err}`
    }));
});

module.exports = router;