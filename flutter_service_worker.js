'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "574acf07fc1712da36e4d0b44dac8a75",
"version.json": "62ace5277e5f08eabed82befc0d506ca",
"index.html": "3fb641913615e9b9b1e1d88163af0696",
"/": "3fb641913615e9b9b1e1d88163af0696",
"main.dart.js": "01ad5d711e3f84c1fafa3cd83546d3aa",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"assets/AssetManifest.json": "baf1aeaa6a13cff568e41b67016dbc1c",
"assets/NOTICES": "eb7529463192677f85a386a0f6a39f22",
"assets/FontManifest.json": "870e2161dbff962d8ec308388fea6b60",
"assets/AssetManifest.bin.json": "04f9725f8f1195e30b629cf2f94e3dbf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "eea16bc3815edf402e53ac114459b7ba",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/_%2520(8).jpeg": "1f55702890d25703c5c4f3fab0cd204e",
"assets/assets/images/373204500452687873.mp4": "4128efdb08a733fb221a3bebfa1f5d98",
"assets/assets/images/_%2520(11).jpeg": "869cfa2a62fa696a68d6236f553ec0c8",
"assets/assets/images/_%2520(22).jpeg": "7c05c2dd95e5e6e9f8dfd685e9c6d27c",
"assets/assets/images/_%2520(19).jpeg": "9dd04e1604a0acb16e5e21f1c7c49db4",
"assets/assets/images/_%2520(21).jpeg": "77a0ee8636fc9bbf9438025d055af43c",
"assets/assets/images/flower_top_falling.jpeg": "298981f96b847cf4190d69e94a629a55",
"assets/assets/fonts/Aileron-Light.otf": "5fa4803a5ebdb280c25df4827b2b1ab3",
"assets/assets/fonts/QuickSand-Bold.ttf": "8003228962d5cafb549cf4034f9ece07",
"assets/assets/fonts/Cormorant-Medium.ttf": "cbad485c8d3223fa388c79b43ec6dba7",
"assets/assets/fonts/Cormorant-Regular.ttf": "4518fe5d058902c6040d7fe963e946c6",
"assets/assets/fonts/JosefinSans-Thin.ttf": "fc28a44f4480a836ffcf35097be6bc6f",
"assets/assets/fonts/JosefinSans-Bold.ttf": "b22a8f2494bafa9cd040aa9db29bc43d",
"assets/assets/fonts/JosefinSans-Light.ttf": "1e660e971a00bdedd9aea889b8b3308d",
"assets/assets/fonts/LavishlyYours-Regular.ttf": "08bcbfe170177ad2c7853fece365eb78",
"assets/assets/fonts/Aileron-UltraLight.otf": "d856f11cd822169e9dc41501c22c4777",
"assets/assets/fonts/CormorantGaramond-Light.ttf": "4becde52855ed6122091964d68aab6e0",
"assets/assets/fonts/Aileron-Heavy.otf": "74db179ce1ecdfdf41de1f36dfe47901",
"assets/assets/fonts/QuickSand-Medium.ttf": "95906e2457ee777801b3ca4b02b4947c",
"assets/assets/fonts/CormorantGaramond-SemiBold.ttf": "d72dabc063970a8fdfc21ad985f540b6",
"assets/assets/fonts/QuickSand-Regular.ttf": "5845af22f839a90a9cca3b8ec0e3cff4",
"assets/assets/fonts/Aileron-Thin.otf": "df8803f64e71d21d82b1d2a22554c117",
"assets/assets/fonts/JosefinSans-SemiBold.ttf": "4d6fba7324c7c30b35e1190e93f38aac",
"assets/assets/fonts/Brittany.ttf": "a76c1385eff0b78c2839682da83b7d55",
"assets/assets/fonts/CormorantGaramond-Regular.ttf": "b55aa5ac563d5fe78b8a8d90ad8c9000",
"assets/assets/fonts/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/CormorantGaramond-Bold.ttf": "b41b4af3e5da44ca2f1ea50f43fc5fa6",
"assets/assets/fonts/Cormorant-SemiBold.ttf": "9140782b00420f538a3f70045c161591",
"assets/assets/fonts/Cormorant-Light.ttf": "a5b2f283071f59270ab527d957512461",
"assets/assets/fonts/QuickSand-SemiBold.ttf": "dc8fa3ed1fa18875d0aac23ecbf64e02",
"assets/assets/fonts/Cormorant-Bold.ttf": "34af1a57ae6381c389bf15d27d4a822e",
"assets/assets/fonts/QuickSand-Light.ttf": "271e0c24a39dadbe933bc774f64f68f5",
"assets/assets/fonts/Aileron-SemiBold.otf": "26ea0d5915903711e1e3e6354153526c",
"assets/assets/fonts/Aileron-Bold.otf": "0d1787667a5c3675ea4ebec35fa4ce36",
"assets/assets/fonts/JosefinSans-Medium.ttf": "4c0529618e047e91b356eb04633136dc",
"assets/assets/fonts/Aileron-Black.otf": "6d4e05823697958d8f798ee6f7cf3881",
"assets/assets/fonts/Aileron-Regular.otf": "ecf66f2e4c182ee2dfcca90357a9aef9",
"assets/assets/fonts/GreatVibes-Regular.ttf": "f8ab2af266e7331cc085e495d82fecf8",
"assets/assets/fonts/CormorantGaramond-Medium.ttf": "f458c59c53419dfea595a9ad45eacd04",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
