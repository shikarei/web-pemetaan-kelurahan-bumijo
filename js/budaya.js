/* =========================================================================
    3. RUANG & POTENSI BUDAYA
    Sumber: TitikRuangBudayaBumijo_4326.geojson
    Popup tiap titik menampilkan isi field "Nama" dan "Keterangan" saja
    (tanpa label nama field), mengikuti pola popup layer lain (lihat
    buffer.js / umkm.js).
========================================================================= */
(async function () {

    const gj = await loadGeoJSON('TitikRuangBudayaBumijo_4326.geojson');
    if (!gj || !gj.features) return;

    const markers = gj.features
        .filter(f => f.geometry && f.geometry.type === 'Point')
        .map(f => {

            const [lng, lat] = f.geometry.coordinates;

            const nama = getProp(f.properties, ['Nama'], '-');
            const keterangan = getProp(f.properties, ['Keterangan'], '-');

            return L.marker(
                [lat, lng],
                {
                    pane: 'pointPane',
                    icon: createBumijoIcon('rounded-square', '#8B5CF6', 'bi-bank')
                }
            ).bindPopup(`
                <div class="budaya-popup">

                    <div class="popup-head">
                        <span class="popup-badge" style="--marker-color: #8B5CF6;"><i class="bi bi-bank"></i></span>
                        <div class="popup-title">${nama}</div>
                    </div>

                    <hr>

                    <div class="popup-item">
                        <span>${keterangan}</span>
                    </div>

                </div>
            `);

        });

    const layerBudaya = L.layerGroup(markers).addTo(map);

    bindToggle('toggleRuangBudaya', layerBudaya);

    // Statistik dashboard: total objek budaya, dihitung dari GeoJSON asli
    // yang baru saja dimuat (menggantikan data ilustrasi sebelumnya).
    window.bumijoStats.budaya.total = markers.length;
    notifyStatsUpdated();

    updateCount();

})();
