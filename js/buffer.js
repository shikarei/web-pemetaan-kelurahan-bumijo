/* =========================================================================
2. BUFFER — JANGKAUAN LAYANAN SAMPAH
Dua sumber buffer dimuat sebagai layer TUNGGAL, masing-masing dengan SATU
tombol tampil/sembunyi (persis seperti gaya toggle titik TPS) — bukan
dipecah per kelas radius. Warna tiap kelas radius tetap dipertahankan di
dalam layer sebagai referensi visual saja:
- ClipBufferLayananSampah204080160_4326.geojson  (sudah dipotong ke batas kelurahan)
- BufferLayananSampah204080160_4326.geojson      (data asli, belum di-clip)
Kelas radius dibaca otomatis dari atribut data (mis. kolom "jarak"/"radius"/"buffer"/"kelas").
========================================================================= */

async function loadBufferLayer(filename, checkboxId, refContainerId, loadingNoteId, styleOptions, defaultChecked, statsRole) {

    const gj = await loadGeoJSON(filename);
    const loadingNote = document.getElementById(loadingNoteId);
    const refContainer = document.getElementById(refContainerId);

    if (!gj || !gj.features) {
        if (loadingNote) loadingNote.textContent = 'Gagal memuat ' + filename + ' — cek nama/lokasi file GeoJSON.';
        return;
    }

    const classKeys = ['jarak', 'radius', 'buffer', 'distance', 'kelas', 'zona', 'jarak_m', 'radius_m'];

    const sortedKeys = Array.from(new Set(
        gj.features.map(f => String(getProp(f.properties, classKeys, 'Tidak diketahui')))
    )).sort((a, b) => (parseFloat(a) || 0) - (parseFloat(b) || 0));

    // Statistik dashboard: jumlah kelas radius dibaca dari sortedKeys yang
    // sudah dihitung di atas (dinamis dari properti data, bukan angka manual).
    // Dicatat hanya dari layer "clip" agar tidak double-count dengan layer raw.
    if (statsRole === 'clip') {
        window.bumijoStats.buffer.jumlahBufferLayer = sortedKeys.length;
        notifyStatsUpdated();
    }

    const tealShades = ['#15616d', '#2f96a3', '#7fc4cc', '#a8d7dc', '#c9e6e9'];

    const colorForKey = key =>
        tealShades[Math.min(sortedKeys.indexOf(key), tealShades.length - 1)];

    const layer = L.geoJSON(gj, {
        pane: 'polygonPane',
        style: function (feature) {

            const key = String(getProp(feature.properties, classKeys, 'Tidak diketahui'));
            const color = colorForKey(key);

            return Object.assign({
                color: color,
                fillColor: color
            }, styleOptions);

        }
    });

    if (defaultChecked) layer.addTo(map);

    if (loadingNote) loadingNote.remove();

    sortedKeys.forEach(key => {

        const color = colorForKey(key);

        const swatchStyle = styleOptions.fillOpacity === 0
            ? `background:transparent;border:2px dashed ${color};`
            : `background:${color};`;

        const chip = document.createElement('div');

        chip.className = 'legend-ref';

        chip.innerHTML = `
            <span class="legend-swatch circle" style="${swatchStyle}"></span>
            <span>Radius ${key} m</span>
        `;

        refContainer.appendChild(chip);

    });

    bindToggle(checkboxId, layer);

    updateCount();

}


// Layer 1
loadBufferLayer(
    'ClipBufferLayananSampah204080160_4326.geojson',
    'toggleBufferClip',
    'bufferClipLegendRef',
    'bufferLoadingNote',
    {
        weight: 1,
        fillOpacity: 0.4
    },
    true,
    'clip'
);


// Layer 2
loadBufferLayer(
    'BufferLayananSampah204080160_4326.geojson',
    'toggleBufferRaw',
    'bufferRawLegendRef',
    'bufferRawLoadingNote',
    {
        weight: 1.5,
        dashArray: '4 3',
        fillOpacity: 0
    },
    false,
    'raw'
);



/* =========================================================================
    TITIK LAYANAN SAMPAH
========================================================================= */

(async function () {

    const gj = await loadGeoJSON('TitikLayananSampah_4326.geojson');

    if (!gj || !gj.features) return;

    const markers = gj.features
        .filter(f => f.geometry && f.geometry.type === 'Point')
        .map(f => {

            const [lng, lat] = f.geometry.coordinates;

            const layanan = getProp(
                f.properties,
                ['Layanan'],
                'Titik Layanan Sampah'
            );

            return L.marker(
                [lat, lng],
                {
                    pane: 'pointPane',
                    icon: createBumijoIcon('rounded-square', '#10B981', 'bi-recycle')
                }
            ).bindPopup(`
                <div class="service-popup">

                    <div class="popup-title">
                        ${layanan}
                    </div>

                    <hr>

                    <div class="popup-item">
                        <i class="bi bi-trash3-fill"></i>
                        <span>Titik Layanan Sampah</span>
                    </div>

                </div>
            `);

        });

    const tpsLayer = L.layerGroup(markers).addTo(map);

    bindToggle('toggleTPS', tpsLayer);

    // Statistik dashboard: jumlah Titik Layanan Sampah dari GeoJSON yang dimuat
    window.bumijoStats.buffer.titikLayanan = markers.length;
    notifyStatsUpdated();

    updateCount();

})();