/* =========================================================================
    4. UMKM & EKONOMI KREATIF
    Sumber:
    - UMKMKuliner_4326.geojson
    - UMKMBarangJasa_4326.geojson
========================================================================= */

async function loadUMKMLayer(filename, color, checkboxId, defaultLabel, statsKey, shape, icon) {

    const gj = await loadGeoJSON(filename);
    if (!gj || !gj.features) return;

    const markers = gj.features
        .filter(f => f.geometry && f.geometry.type === 'Point')
        .map(f => {

            const [lng, lat] = f.geometry.coordinates;

            // Ambil atribut dari GeoJSON
            const nama = getProp(f.properties, ['UMKM'], defaultLabel);
            const jenis = getProp(f.properties, ['Jenis'], '-');
            const kontak = getProp(f.properties, ['Kontak'], '-');
            const jam = getProp(f.properties, ['Jam'], '-');
            const alamat = getProp(f.properties, ['Alamat'], '-');

            return L.marker(
                [lat, lng],
                {
                    pane: 'pointPane',
                    icon: createBumijoIcon(shape, color, icon)
                }
            ).bindPopup(`
                <div class="umkm-popup">

                    <div class="popup-title">${nama}</div>

                    <hr>

                    <div class="popup-item">
                        <i class="bi bi-tag-fill"></i>
                        <span>${jenis}</span>
                    </div>

                    <div class="popup-item">
                        <i class="bi bi-telephone-fill"></i>
                        <span>${kontak}</span>
                    </div>

                    <div class="popup-item">
                        <i class="bi bi-clock-fill"></i>
                        <span>${jam}</span>
                    </div>

                    <div class="popup-item popup-address">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span>${alamat}</span>
                    </div>

                </div>
            `);

        });

    const layer = L.layerGroup(markers).addTo(map);

    bindToggle(checkboxId, layer);

    // Statistik dashboard: jumlah UMKM per kategori dari GeoJSON yang dimuat
    if (statsKey) {
        window.bumijoStats.umkm[statsKey] = markers.length;
        window.bumijoStats.umkm.total =
            (window.bumijoStats.umkm.kuliner || 0) + (window.bumijoStats.umkm.barangJasa || 0);
        notifyStatsUpdated();
    }

    updateCount();

}

loadUMKMLayer(
    'UMKMKuliner_4326.geojson',
    '#EF4444',
    'toggleKuliner',
    'Usaha Kuliner',
    'kuliner',
    'circle',
    'bi-cup-hot-fill'
);

loadUMKMLayer(
    'UMKMBarangJasa_4326.geojson',
    '#3B82F6',
    'toggleBarangJasa',
    'Usaha Barang & Jasa',
    'barangJasa',
    'rounded-square',
    'bi-bag-fill'
);