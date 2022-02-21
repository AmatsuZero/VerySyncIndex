'use strict';

importScripts('https://u.gitcafe.net/assets/js/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
});

if (workbox) {
  console.log(`Yay! Workbox is loaded `);
} else {
  console.log(`Boo! Workbox didn't load `);
}

workbox.routing.registerRoute(
  // Cache json files
  /.*\.json/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'JSON-Cache',
  })
);

workbox.routing.registerRoute(
  /\*/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'HOME-Cache',
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 200
    })]
  })
)
/*
workbox.routing.registerRoute(
  // Cache gravatar files
  new RegExp('/\//'),
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'Gitcafe-Cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache for a maximum of 30 Days
        maxAgeSeconds: 1 * 24 * 60 * 60,
      })
    ],
  })
);
*/

/*
workbox.routing.registerRoute(
  // Custom `matchCallback` function
  ({ event }) => event.request.destination === 'html',
  new workbox.strategies.CacheFirst({
    cacheName: 'HTML',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 1 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);
*/
