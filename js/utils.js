/* =========================================================================
PEMUATAN DATA GEOJSON ASLI
Semua file dimuat dari folder "data/" yang sejajar dengan map.html.
Ubah DATA_DIR bila kamu menyimpan file di lokasi lain.
========================================================================= */
const DATA_DIR = 'geojson/';

async function loadGeoJSON(filename) {
    try {
        const res = await fetch(DATA_DIR + filename);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return await res.json();
    } catch (err) {
        console.warn('Gagal memuat', filename, '—', err.message);
        return null;
    }
}

// Ambil nilai properti dengan mencoba beberapa kemungkinan nama kolom (tidak case-sensitive)
function getProp(props, candidates, fallback) {
    if (!props) return fallback;
    const keys = Object.keys(props);
    for (const c of candidates) {
        const found = keys.find(k => k.toLowerCase() === c.toLowerCase());
        if (found && props[found] !== null && props[found] !== undefined && props[found] !== '') return props[found];
    }
    return fallback;
}

const NAME_KEYS = ['nama', 'nama_usaha', 'name', 'namausaha', 'namobj', 'keterangan', 'ket', 'lokasi', 'alamat', 'label'];
const DESC_KEYS = ['keterangan', 'ket', 'deskripsi', 'kategori', 'jenis', 'sektor', 'alamat'];

/* =========================================================================
    STATISTIK GLOBAL — dibaca oleh Dashboard Statistik (lihat ui.js)
    Diisi oleh kernel-density.js, buffer.js, budaya.js, dan umkm.js setelah
    masing-masing GeoJSON selesai dimuat. Tidak ada nilai yang ditulis manual;
    dashboard membaca objek ini secara langsung, tanpa fetch ulang GeoJSON.
========================================================================= */
window.bumijoStats = {
    kernel: { titikSampah: 0, kelasPrioritas: 0 },
    buffer: { titikLayanan: 0, jumlahBufferLayer: 0 },
    budaya: { total: 0 },
    umkm: { total: 0, kuliner: 0, barangJasa: 0 }
};

// Panggil setelah bumijoStats diperbarui agar dashboard (jika sedang
// terbuka) langsung menampilkan angka terbaru.
function notifyStatsUpdated() {
    if (typeof window.refreshStatistikDashboard === 'function') {
        window.refreshStatistikDashboard();
    }
}

/* =========================================================================
    MARKER IKON — L.divIcon + Bootstrap Icons
    Pengganti L.circleMarker bawaan Leaflet untuk titik-titik kategori
    (Prioritas Sampah, TPS, Ruang Budaya, UMKM). Warna, bentuk, dan ikon
    ditentukan lewat parameter; seluruh tampilan (border, shadow, hover)
    diatur lewat CSS class ".bumijo-marker" (lihat css/map-style.css).
    shape: 'circle' | 'rounded-square' | 'hexagon'
========================================================================= */
function createBumijoIcon(shape, color, icon) {
    return L.divIcon({
        className: '',
        html: `
            <div class="bumijo-marker bumijo-marker--${shape}" style="--marker-color: ${color};">
                <i class="bi ${icon}"></i>
            </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -13]
    });
}
