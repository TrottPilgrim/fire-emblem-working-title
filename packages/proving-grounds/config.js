// @flow

export const staticUrl = process.env.NODE_ENV === 'production'
  ? 'https://s3-us-west-1.amazonaws.com/static.fire-emblem-combat-simulator/'
  : 'http://localhost:3000/static/cdn/';
