'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6442f9efbf517784648daaf27ca81343",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "155e19fae77cc3600e0f45afc4f0e0fb",
"index.html": "44b98f865d4ed6f99db6e8204904ef48",
"/": "44b98f865d4ed6f99db6e8204904ef48",
"main.dart.js": "6e9b8cf1d41b8644084a36684f7f8f2b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "68e3c128c81058c3be503cf53eacf008",
".git/objects/0d/b929e04d99ceab316c5a636b4696aded951aed": "a88973c00ced0453a4fa95c6a225aa0f",
".git/objects/59/274e5e5417a885a513dab7b530c041213bbd6c": "1d4d8159d2af575c53e411f877485dbf",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/c95bab987562f8d3affd3243f19c3971af3744": "8c88123d937dd58bb96e2f314a88c33c",
".git/objects/68/e856473a798608bd87965d5bf25458f084a9d9": "35d0e7e945944cac53a0a71ad16534c8",
".git/objects/60/d9053547a91665baf613930c4756f582e2c57c": "1fcafcd344b59fb4019a764c607d88e9",
".git/objects/05/9586894d38db868d2e51039f2269816aa584a8": "03a742661b0a3bde18d3e6a9f318545a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/367b4942e8100d322448e71927f3da3a45cef2": "fa23fa7d9a685568b1545472fe92b63e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/2dcd167ce75c9d5b83e56ffb84c52bb3eaa00e": "fef0e03e7bbc204cfb3612d6c6ef3cec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/65fc8de85f657492c3af9496733ca3cbbbb121": "14582b06226d64429eb226592393317d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/81e05580b4931c3e65148ac4bf590e4de64e79": "7d8c7fb95a1636c8470297878bee5c42",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/d9d27fee35dfa653e1d846951e5bb50ecdb182": "a9712a06c317b6ea4d5d25dde29438a5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/826ead411a19e8532d3806d756a1074db64f43": "e0242721017b106b0dc00f0edc5ed3db",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/d951d479826dc1492f128346509a74392943a0": "deb49992972da1821a4e41d759e5b8fb",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/0058df69aa97c6cec40a7a630415e29725e0e8": "88d06d229b9b1b0b74f1cbbbd82cd78f",
".git/objects/74/1cb70e71c0842b5639ae6a6f1d6ca56bd01205": "984b24a79c21a6735dffcc5d92837c2b",
".git/objects/7b/08c801264042d5fd08d3a154efb6f690e26f6f": "466b35f5ee1c3bc85afa8bf8c7130ad4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a48a6e97274360c63b9e97bc1506ad496d2418": "48e862be6f082ba28f569471ee5265a9",
".git/objects/2f/2e201cc3a394d375e6fd5ea1c5063739b0b543": "e209aa8352e2dd4c1bdb0abbc9b43dd2",
".git/objects/43/ac51f0a73ded6f28bf05c9d182d56f55f8e05c": "bc58424e04886ef854a9c77724975e76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/02c43eef819469ee6b5331addb8e0cf397a8d4": "d08e07948c7d8d28a8cc0ab7bf55789d",
".git/objects/6b/4b49ee00915c47a5276a21d34df41d7b4fcaea": "a94f6581a689322b888c1c67921c7902",
".git/objects/00/fa1cb07e72f3429dc3fc8faf87ef230298a5d7": "9c7353b51b7760018c673570f0c50c01",
".git/objects/3f/ec6488eaa161a63d990f8b69424a2493217f48": "4fa375305c192ff2218845a28c7df458",
".git/objects/30/bca3830e0945ac5a94099c98256e9351bd78ae": "ee8a3f4dc14f38b6acee88aff0b0c00c",
".git/objects/5b/8e5e458193a5edc3b0d030b5274231686a3b54": "ea602c3b1de3560ec3dedbf6a55c972c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/52/38f4ecb8d03b68e1ac900f2e8ca244a87f797d": "162b628b2917666d5de9f601d3f8716b",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/1ff0e3d2d1c23427b0bd6c7a6339e2eba6f98f": "24bdd3f8202b5d9035b35834bb1cfb50",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ce664984095a41e073161a93bc4ffa6075ddc9": "f2f4f8390283a025f6847303a2c7e828",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/81783fa0b545c4cf40239797ef329e1926b1d1": "217d58038e71784e36c0bb8f47aa76c9",
".git/objects/b8/9a27847e9cf6b575526eec5a15e141bbf99c5a": "dcf8923355262d46b8a825646c536768",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/aa/57c39c4e96237a7460e6756551fac898b2f57e": "a7ea02780f69f2e4a7cfadda3de5a96a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2ab7fc9f24fc6bd28da7193ef57a9407986ee2": "173e30a9d263dc6aca33e558427aa345",
".git/objects/db/45597da9776238cccc6c1c1e62a4d01409ee77": "aa98859833f1689b1bfa4ea4993f7ee9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f1/6028f768658391a60b1d3dd5d6401e115ec2d8": "17118c0e5582e5c9697937c0bdbb4fe7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/01f04f3dffb2ae38abc8ea2d3263006be9bbc1": "77a8ae29d39edbc66bb7f6462cf124a6",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/77/96c926148d718a5e211d466ab79a00ae6e9602": "04f4016fa1cc071c15073b9521bdbe0e",
".git/objects/70/2e4d6893f15c34b7f2b9908fd7bb072b0f9064": "fa971cdd6f23c0b37e2ef66b7720442b",
".git/objects/4f/bad1fc019db1fddae26b7b6c82137f7bedf71d": "eab92f90aeafae4dd7b8c039830f51a5",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/634da29813da9e5e065d4e77d392f8c484d792": "1d2d7d010e49214478c1b6951577d8f7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/78/41512367b053b47aecedc47a4c04b7cedf02d6": "f033e2820dcd85117ea0424c4eb366f9",
".git/objects/8b/e9db2fbda3fd061946b64e709a1698b9e20714": "c7394674482d28857cfcf7deed20185d",
".git/objects/13/ce583edee5cc64cd83cedbad5cd5d0846fdd66": "96701876f225dc23734625c86a77a4ce",
".git/objects/22/ffdedd80b4b9ddf25ed4eb9d2509fa13dcf19e": "28d7d5d7f660347a166db994223433f3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89d0beed8503676b3b2ca0868f45ad49",
".git/logs/refs/heads/main": "946a6f921461067ff3dee397f4746f5d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "53ea65770c8de1283e7778dc96c26c9c",
".git/index": "6f106e7cbb911cefd3ed640f5a0c8f86",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "0b2f5d413a8be13e5b1942e00d2d678e",
"assets/NOTICES": "457b2c5a6917d50ecabe84b2289a20f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "50d77f4ea3c147fbd607f3a1a2b5b9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e531373bd9a62c75fdb09fd97b6f258b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/github.svg": "268ac32733a3213d76559b137527bb82",
"assets/assets/images/bg_splash_skill.png": "7af438b53c0c52bc2a0e492ba47e36ea",
"assets/assets/images/mail.svg": "c286896446c9177ba0329c48182b42b2",
"assets/assets/images/bg_splash_contact.png": "6ee843752334adc1593ef9f44412c1a5",
"assets/assets/images/profile.png": "a4667dda28adf58bce3f3d768880d239",
"assets/assets/images/call.svg": "53d145118277eaf8371ded197bbaeda5",
"assets/assets/images/bg_splash_hero.png": "d93eec0db097e36b9170c35333d018d6",
"assets/assets/images/linkedin.svg": "7b5946722f004a9667e15bcba295ff3c",
"assets/assets/projects/auro_naga.png": "e318e3c2c3afd9a5fa98f3d9564f806b",
"assets/assets/projects/kerawen.png": "ad6531bdaffc6d9224c488e0165c1939",
"assets/assets/projects/freecoffee.png": "d13efa79e2d60abc83a7b29905aac2c9",
"assets/assets/projects/fresh_honest.png": "6c8247cd387f449b040bf2188aa7e805",
"assets/assets/projects/cms_documentation.png": "7a8c990f1ae7fed0d2169ed484c31556",
"assets/assets/projects/lavazza.png": "d279af9c94b29961ca9c4451e1fb1fc9",
"assets/assets/projects/beema.png": "436cd8afc0ffa8a48ff32b41a8985aa8",
"assets/assets/projects/glmonitor.png": "0bc68e724aa295b91548d0a58b8133fc",
"assets/assets/skills/firebase.svg": "93d4b8f8f52f33e93c074f8ef5e24722",
"assets/assets/skills/flutter.svg": "c9bf62b91478c27be001bde2787dc8dd",
"assets/assets/skills/python.svg": "e9065b5915bb2ffed70f6463ed10e69e",
"assets/assets/skills/flask.svg": "ca395264881740d7349d4cb780b17bcf",
"assets/assets/skills/fastapi.svg": "c5e9caf24e95a458bf2c920a8cc15be9",
"assets/assets/skills/laravel.svg": "7866dc16a7d81a1eaa0bafa1b1e3e5e3",
"assets/assets/skills/mongodb.svg": "1892612e97b7c2b86ca9ea5ed8cd7380",
"assets/assets/skills/dart.svg": "19a9539710aa8af85e8b0c0e337ba6b6",
"assets/assets/skills/php.svg": "e762c376f041b0495c95f48e6a2ed67d",
"assets/assets/skills/scikitlearn.svg": "a86854b9589e4383fcdbc60da3a306ad",
"assets/assets/skills/selenium.svg": "32b0a110cd84f4244c3248c427db90ed",
"assets/assets/skills/django.svg": "44cf15d33da5350d1e07fae950800c80",
"assets/assets/skills/graphql.svg": "fdb6df5033f8aced7409190f3de4b77b",
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
