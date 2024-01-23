// Ideally you should take these vars from process.env.REACT_APP_*
// and define them in e.g. .env.local (if you're using Create React App)

// Authorization screen base URL
// Get instruction from https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity
export const authorizationUrl = 'https://github.com/login/oauth/authorize';

// To get a client ID, create an app, e.g.
// GitHub (authorization code grant only): https://github.com/settings/developers
// Get Client ID from https://github.com/settings/applications/new
// Spotify (implicit grant & auth code): https://developer.spotify.com/dashboard/applications
export const clientId = 'a71e6d546854d5473ec2';

// You get to configure this in your OAuth settings
// If you use React Router, the relative path (empty here) can match
// that of a route which displays nothing
export const redirectUri = 'http://localhost:1234/';

// Authorization code flow only: base URL for your server
// The one provided below is that of the sample Express server provided
export const serverUrl = 'http://localhost:5000';
