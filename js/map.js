/* =====================================================
    LOADING SCREEN — orchestrator
    Loading screen baru ditutup setelah: peta selesai dibuat,
    basemap selesai dimuat, seluruh pemanggilan GeoJSON utama
    sudah selesai, DAN seluruh kontrol utama (Home Button,
    Locate Me, MiniMap, Zoom, Scale Bar, Basemap Switcher)
    sudah diinisialisasi. Tidak mengubah logika file layer mana pun.
===================================================== */

const loadingScreenEl = document.getElementById('loadingScreen');

// =====================================================
// Minimum durasi Loading Screen
// Ubah angka ini jika ingin loading lebih lama
// 3000 = 3 detik
// 5000 = 5 detik
// =====================================================
const MIN_LOADING_TIME = 2000;
const loadingStartedAt = Date.now();


const loadingState = {
    mapReady: false,
    basemapReady: false,
    scriptsInitiated: false,
    controlsReady: false
};

let pendingGeoJSON = 0;

// Bungkus loadGeoJSON (didefinisikan di utils.js) agar loading screen tahu
// kapan seluruh data GeoJSON utama selesai dipanggil, tanpa menyentuh file
// layer (kernel-density.js, buffer.js, budaya.js, umkm.js, reference.js).
if (typeof window.loadGeoJSON === 'function') {
    const _originalLoadGeoJSON = window.loadGeoJSON;
    window.loadGeoJSON = function (filename) {
        pendingGeoJSON++;
        return _originalLoadGeoJSON(filename).finally(() => {
            pendingGeoJSON--;
            checkLoadingReady();
        });
    };
}

function checkLoadingReady() {
    if (
        loadingState.mapReady &&
        loadingState.basemapReady &&
        loadingState.scriptsInitiated &&
        loadingState.controlsReady &&
        pendingGeoJSON === 0
    ) {
        hideLoadingScreen();
    }
}

function hideLoadingScreen() {

    if (!loadingScreenEl || loadingScreenEl.dataset.hidden) return;

    // Hitung sudah berapa lama loading tampil
    const elapsed = Date.now() - loadingStartedAt;

    // Jika belum mencapai durasi minimum,
    // tunggu sisa waktunya
    const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

    setTimeout(() => {

        loadingScreenEl.dataset.hidden = 'true';
        loadingScreenEl.classList.add('fade-out');
        loadingScreenEl.setAttribute('aria-hidden', 'true');

        loadingScreenEl.addEventListener('transitionend', () => {
            loadingScreenEl.remove();
        }, { once: true });

        // Jaring pengaman jika transitionend tidak terpicu
        setTimeout(() => {
            if (loadingScreenEl.parentNode) {
                loadingScreenEl.remove();
            }
        }, 700);

    }, remaining);

}

// Semua <script> dimuat tanpa defer/async dan berurutan, sehingga saat
// DOMContentLoaded terpicu, seluruh file layer sudah selesai MEMANGGIL
// loadGeoJSON (fetch-nya sendiri dilacak terpisah lewat pendingGeoJSON).
document.addEventListener('DOMContentLoaded', () => {
    loadingState.scriptsInitiated = true;
    checkLoadingReady();
});

// Jaring pengaman terakhir: loading screen tidak boleh tertahan selamanya
// (mis. tile server lambat/gagal, koneksi terputus).
setTimeout(() => {
    loadingState.mapReady = true;
    loadingState.basemapReady = true;
    loadingState.scriptsInitiated = true;
    loadingState.controlsReady = true;
    checkLoadingReady();
}, 12000);

const BUMIJO_CENTER = [-7.784231790147858, 110.3593149839563];

const baseLayers = {
    light: L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap &copy; CARTO'
        }
    ),

    dark: L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        {
            maxZoom: 20,
            attribution: '&copy; OpenStreetMap &copy; CARTO'
        }
    ),

    satellite: L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri'
        }
    ),

    osm: L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    )
};

const map = L.map('map', {
    zoomControl: false,
    minZoom: 10
}).setView(BUMIJO_CENTER, 16.5);

map.whenReady(() => {
    loadingState.mapReady = true;
    checkLoadingReady();
});


/* =====================================================
    CUSTOM PANES
===================================================== */

map.createPane('polygonPane');
map.getPane('polygonPane').style.zIndex = 300;

map.createPane('linePane');
map.getPane('linePane').style.zIndex = 400;

map.createPane('pointPane');
map.getPane('pointPane').style.zIndex = 500;


/* =====================================================
    CUSTOM SCALE BAR
===================================================== */

// Custom scale bar (menggantikan L.control.scale())
L.control.customScaleBar({
    position: 'bottomleft',
    maxWidth: 150
}).addTo(map);


L.control.zoom({
    position: 'bottomleft'
}).addTo(map);

baseLayers.light.once('load', () => {
    loadingState.basemapReady = true;
    checkLoadingReady();
});
baseLayers.light.addTo(map);

let currentBase = 'light';



/* =====================================================
    MINI MAP
===================================================== */

const miniLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 20
    }
);

new L.Control.MiniMap(miniLayer, {
    toggleDisplay: true,
    minimized: false,
    position: 'bottomright',
    width: 250,
    height: 200,
    zoomLevelOffset: -5
}).addTo(map);



/* =====================================================
    HOME BUTTON
===================================================== */

const homeButton = L.control({
    position: 'topleft'
});

homeButton.onAdd = function () {

    const div = L.DomUtil.create('div', 'home-button');

    div.innerHTML = '<i class="bi bi-house-door-fill"></i>';

    div.title = "Kembali ke tampilan awal";

    L.DomEvent.disableClickPropagation(div);

    L.DomEvent.on(div, 'click', function (e) {

        L.DomEvent.stop(e);

        if (window.batasKelurahan) {

            map.fitBounds(window.batasKelurahan.getBounds(), {
                maxZoom: 16.5,
                padding: [20, 20]
            });

        } else {

            map.setView(BUMIJO_CENTER, 16.5);

        }

    });

    return div;

};

homeButton.addTo(map);


/* =====================================================
    LOCATE ME
===================================================== */

let userMarker = null;
let userAccuracy = null;

const locateButton = L.control({
    position: 'topleft'
});

locateButton.onAdd = function () {

    const div = L.DomUtil.create('div', 'home-button');

    div.innerHTML = '<i class="bi bi-person-fill"></i>';

    div.title = "Lokasi Saya";

    L.DomEvent.disableClickPropagation(div);

    L.DomEvent.on(div, 'click', function (e) {

        L.DomEvent.stop(e);

        if (!navigator.geolocation) {
            alert('Browser tidak mendukung Geolocation.');
            return;
        }

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                // hapus marker lama
                if (userMarker) {
                    map.removeLayer(userMarker);
                }

                if (userAccuracy) {
                    map.removeLayer(userAccuracy);
                }

                // lingkaran akurasi
                userAccuracy = L.circle([lat, lng], {
                    radius: accuracy,
                    color: '#2196f3',
                    weight: 1,
                    fillColor: '#2196f3',
                    fillOpacity: 0.15
                }).addTo(map);

                // marker lokasi
                userMarker = L.circleMarker([lat, lng], {
                    radius: 7,
                    color: '#ffffff',
                    weight: 2,
                    fillColor: '#2196f3',
                    fillOpacity: 1,
                    pane: 'pointPane'
                }).addTo(map);

                userMarker.bindPopup('<b>Lokasi Anda</b>');

                map.setView([lat, lng], 18);

            },

            function (error) {

                switch (error.code) {

                    case error.PERMISSION_DENIED:
                        alert('Izin lokasi ditolak.');
                        break;

                    case error.POSITION_UNAVAILABLE:
                        alert('Lokasi tidak tersedia.');
                        break;

                    case error.TIMEOUT:
                        alert('Permintaan lokasi melebihi batas waktu.');
                        break;

                    default:
                        alert('Gagal memperoleh lokasi.');
                        break;

                }

            },

            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }

        );

    });

    return div;

};

locateButton.addTo(map);


/* =====================================================
    BASEMAP SWITCHER
===================================================== */

const baseOrder = [
    'light',
    'dark',
    'satellite',
    'osm'
];

const switchButtons = document.querySelectorAll('.basemap-switch button');

const switchPill = document.getElementById('switchPill');

function movePill(base) {

    const idx = baseOrder.indexOf(base);

    switchPill.style.transform = `translateX(${idx * 100}%)`;

}

movePill('light');

switchButtons.forEach(btn => {

    btn.addEventListener('click', () => {

        const base = btn.dataset.base;

        if (base === currentBase) return;

        map.removeLayer(baseLayers[currentBase]);

        baseLayers[base].addTo(map);

        currentBase = base;

        switchButtons.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        movePill(base);

    });

});



/* =====================================================
    REFRESH MAP SIZE
===================================================== */

function refreshMapSize() {

    setTimeout(() => {

        map.invalidateSize();

    }, 420);

}

/* =====================================================
    LOADING SCREEN — kontrol utama selesai diinisialisasi
    Ditempatkan di akhir file karena Home Button, Locate Me,
    MiniMap, Zoom Control, Scale Bar, dan Basemap Switcher
    semuanya sudah dibuat secara sinkron di atas.
===================================================== */

loadingState.controlsReady = true;
checkLoadingReady();