importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1a399155e3633fa34c7d.js",
    "revision": "bf087e9b7b1390b36778af33e5781e2a"
  },
  {
    "url": "/_nuxt/9b0fb8e54645e0619094.js",
    "revision": "3ceb8c9b130968928f1180c5de7faba3"
  },
  {
    "url": "/_nuxt/a563780deaac3850eda1.js",
    "revision": "8875c11a17fe140c0e06b7e426f61387"
  },
  {
    "url": "/_nuxt/a644887ea84bbed5a1c2.js",
    "revision": "0ddbd34dfa4f946717ec944f255452ec"
  },
  {
    "url": "/_nuxt/cc5fbd7a544b7503ec8e.js",
    "revision": "294190ea43d1911817adefcb546474c3"
  }
], {
  "cacheId": "sprate",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
