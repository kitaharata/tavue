importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
workbox.routing.registerRoute(
  /\.(woff2|css|js)$/,
  new workbox.strategies.NetworkFirst()
);
