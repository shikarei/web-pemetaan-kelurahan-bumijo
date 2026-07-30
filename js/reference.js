/* =========================================================================
    5. BATAS WILAYAH & JALAN (DATA REFERENSI)
    Sumber:
    - AdministrasiKelurahanBumijo4326.geojson
    - JalanAreaBumijo4326.geojson
    - JalanGarisBumijo4326.geojson
========================================================================= */

/* -------------------------------------------------------------------------
    BATAS KELURAHAN
------------------------------------------------------------------------- */
(async function () {

    const gj = await loadGeoJSON('AdministrasiKelurahanBumijo4326_V2.geojson');
    if (!gj) return;

    // Simpan sebagai variabel global agar bisa dipakai Home Button
    window.batasKelurahan = L.geoJSON(gj, {
        pane: 'polygonPane',
        style: {
            color: 'var(--amber)',
            weight: 2,
            dashArray: '6 4',
            fillOpacity: 0
        }
    }).addTo(map);

    bindToggle('toggleBatasKelurahan', window.batasKelurahan);

//    try {
//        map.fitBounds(window.batasKelurahan.getBounds(), {
//            maxZoom: 16
//        });
//    } catch (e) {
//        // biarkan menggunakan tampilan default bila gagal
//    }

    updateCount();

})();


/* -------------------------------------------------------------------------
    JALAN AREA
------------------------------------------------------------------------- */
(async function () {

    const gj = await loadGeoJSON('JalanAreaBumijo4326.geojson');
    if (!gj) return;

    const layer = L.geoJSON(gj, {
        pane: 'polygonPane',
        style: {
            color: '#5c0029',
            weight: 1,
            fillColor: '#ab004d',
            fillOpacity: 0.4
        }
    }).addTo(map);

    bindToggle('toggleJalanArea', layer);

    updateCount();

})();


/* -------------------------------------------------------------------------
    JALAN GARIS
------------------------------------------------------------------------- */
(async function () {

    const gj = await loadGeoJSON('JalanGarisBumijo4326.geojson');
    if (!gj) return;

    const layer = L.geoJSON(gj, {
        pane: 'linePane',
        style: {
            color: 'var(--orange)',
            weight: 1.5
        }
    }).addTo(map);

    bindToggle('toggleJalanGaris', layer);

    updateCount();

})();


updateCount();
refreshMapSize();