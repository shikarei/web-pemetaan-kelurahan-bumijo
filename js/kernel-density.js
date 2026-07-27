/* =========================================================================
1. KERNEL DENSITY — PRIORITAS SAMPAH
======================================================================== */
(async function () {

    const gj = await loadGeoJSON('TitikPenumpukanSampah30Juni2026_4326.geojson');
    if (!gj || !gj.features) return;

    const heatPoints = [];
    const markers = [];

    gj.features.forEach(f => {
        if (!f.geometry || f.geometry.type !== 'Point') return;
        const [lng, lat] = f.geometry.coordinates;

        const bobot =
            Number(
                getProp(
                    f.properties,
                    ['bobot', 'skor', 'volume', 'jumlah', 'berat', 'value'],
                    1
                )
            ) || 1;
        heatPoints.push([lat, lng, bobot]);

        const nama =
            getProp(
                f.properties,
                NAME_KEYS,
                'Titik Penumpukan Sampah'
            );

        markers.push(
            L.marker([lat, lng], {
                pane: 'pointPane',
                icon: createBumijoIcon('circle', '#F97316', 'bi-trash3-fill')
            })
        );
    });

    // Statistik dashboard: jumlah titik dari data GeoJSON,
    // dan jumlah kelas prioritas dibaca dari legend gradien yang sudah ada di sidebar.
    window.bumijoStats.kernel.titikSampah = gj.features.length;
    window.bumijoStats.kernel.kelasPrioritas = document.querySelectorAll('.gradient-labels span').length;
    notifyStatsUpdated();

    const heatLayer = L.heatLayer(heatPoints, {
        radius: 38,
        blur: 30,
        maxZoom: 17,
        gradient: {
            0.00: '#fff8b0',   // kuning sangat muda
            0.20: '#ffe34d',   // kuning
            0.45: '#ffb347',   // kuning-oranye
            0.65: '#ff4fc3',   // pink
            0.82: '#d51cff',   // ungu muda
            1.00: '#6200ea'    // ungu pekat (pusat)
        }

    }).addTo(map);
    const titikLayer = L.layerGroup(markers).addTo(map);
    bindToggle('toggleHeatSampah', heatLayer);
    bindToggle('toggleTitikSampah', titikLayer);

    document
        .getElementById('heatRadius')
        .addEventListener('input', function () {
            heatLayer.setOptions({
                radius: parseInt(this.value, 10)
            });
        });
    updateCount();
})();