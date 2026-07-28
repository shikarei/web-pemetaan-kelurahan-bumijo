/* =====================================================
    SIDEBAR TABS — Legenda / Statistik
    Tab yang sama dipakai untuk membuka sidebar & berpindah
    panel. Klik tab yang sedang aktif -> sidebar menutup.
===================================================== */

const sidebarTabs = document.querySelectorAll('.sidebar-tab');
const sidebarTabsPill = document.getElementById('sidebarTabsPill');
const sidebarPanelTitle = document.getElementById('sidebarPanelTitle');
const sidebarEl = document.querySelector('.sidebar');

const panelTitles = {
    legenda: 'Legenda Peta',
    statistik: 'Dashboard Statistik'
};

const tabOrder = ['legenda', 'statistik'];

function moveTabPill(panel) {
    const idx = tabOrder.indexOf(panel);
    if (sidebarTabsPill) {
        sidebarTabsPill.style.transform = `translateX(${idx * 100}%)`;
    }
}

function setActivePanel(panel) {
    document.querySelectorAll('.sidebar-panel').forEach(p => {
        p.classList.toggle('active', p.dataset.panel === panel);
    });
    sidebarTabs.forEach(t => {
        t.classList.toggle('active', t.dataset.panel === panel);
    });
    if (sidebarPanelTitle) sidebarPanelTitle.textContent = panelTitles[panel] || '';
    if (sidebarEl) sidebarEl.dataset.activePanel = panel;
    moveTabPill(panel);

    if (panel === 'statistik' && typeof renderStatistikDashboard === 'function') {
        renderStatistikDashboard();
    }
}

sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const panel = tab.dataset.panel;
        const isOpen = document.body.classList.contains('sidebar-open');
        const isActiveTab = tab.classList.contains('active');

        if (isOpen && isActiveTab) {
            // tab yang sama diklik lagi -> tutup sidebar
            document.body.classList.remove('sidebar-open');
        } else {
            if (!isOpen) document.body.classList.add('sidebar-open');
            setActivePanel(panel);
        }

        refreshMapSize();
    });
});

document.getElementById('sidebarClose').addEventListener('click', () => {
    document.body.classList.remove('sidebar-open');
    refreshMapSize();
});

document.querySelectorAll('.acc-header').forEach(header => {
    header.addEventListener('click', () => {
        const accGroup = header.closest('.acc-group');
        if (accGroup) accGroup.classList.toggle('open');
    });
});

function updateCount() {
    const all = document.querySelectorAll('.layer-toggle');
    const checked = document.querySelectorAll('.layer-toggle:checked');
    document.getElementById('activeCount').textContent = checked.length;
    document.getElementById('totalCount').textContent = all.length;
}
document.getElementById('resetLayers').addEventListener('click', () => {
    document.querySelectorAll('.layer-toggle').forEach(t => {
        if (!t.checked) { t.checked = true; t.dispatchEvent(new Event('change')); }
    });
});

function pulseSwatch(checkboxEl) {
    const swatch = checkboxEl.parentElement.querySelector('.legend-swatch');
    if (!swatch) return;
    swatch.classList.remove('pulse');
    void swatch.offsetWidth;
    swatch.classList.add('pulse');
}

function bindToggle(id, layer) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', function () {
        if (this.checked) map.addLayer(layer); else map.removeLayer(layer);
        pulseSwatch(this); updateCount();
    });
}

/* =====================================================
    DASHBOARD STATISTIK
    Membaca window.bumijoStats (diisi oleh kernel-density.js,
    buffer.js, budaya.js, umkm.js setelah GeoJSON masing-masing
    selesai dimuat). Tidak melakukan fetch/re-load GeoJSON apa pun.
===================================================== */

function statCardHTML(icon, value, label) {
    return `
        <div class="stat-card">
            <div class="stat-icon"><i class="bi ${icon}"></i></div>
            <div class="stat-value">${value !== undefined && value !== null ? value : '–'}</div>
            <div class="stat-label">${label}</div>
        </div>
    `;
}

function renderStatistikDashboard() {
    const s = window.bumijoStats || {};

    const kernel = s.kernel || {};
    const elKernel = document.getElementById('statCardsKernel');
    if (elKernel) {
        elKernel.innerHTML =
            statCardHTML('bi-geo-alt-fill', kernel.titikSampah, 'Titik Penumpukan Sampah') +
            statCardHTML('bi-diagram-3-fill', kernel.kelasPrioritas, 'Kelas Prioritas');
    }

    const buffer = s.buffer || {};
    const elBuffer = document.getElementById('statCardsBuffer');
    if (elBuffer) {
        elBuffer.innerHTML =
            statCardHTML('bi-trash3-fill', buffer.titikLayanan, 'Titik Layanan Sampah') +
            statCardHTML('bi-bullseye', buffer.jumlahBufferLayer, 'Kelas Radius Buffer');
    }

    const budaya = s.budaya || {};
    const elBudaya = document.getElementById('statCardsBudaya');
    if (elBudaya) {
        elBudaya.innerHTML =
            statCardHTML('bi-building', budaya.total, 'Total Objek Ruang Aktivitas Budaya');
    }

    const umkm = s.umkm || {};
    const elUmkm = document.getElementById('statCardsUmkm');
    if (elUmkm) {
        elUmkm.innerHTML =
            statCardHTML('bi-shop', umkm.total, 'Total UMKM') +
            statCardHTML('bi-egg-fried', umkm.kuliner, 'UMKM Kuliner') +
            statCardHTML('bi-bag-check-fill', umkm.barangJasa, 'UMKM Barang & Jasa');
    }
}

// Dipanggil oleh masing-masing file layer setiap kali statistiknya berubah,
// supaya dashboard tetap sinkron walau panel Statistik sedang tidak dibuka.
window.refreshStatistikDashboard = renderStatistikDashboard;

/* =====================================================
    MASTER TOGGLE — "Semua Layer" & per-kategori accordion
    Fitur baru, tidak mengubah logika bindToggle/resetLayers
    yang sudah ada. Checkbox di sini hanya men-simulasikan klik
    pada masing-masing .layer-toggle (via dispatchEvent 'change'),
    sehingga tetap memakai jalur show/hide layer yang sama persis
    seperti saat pengguna mencentang satu per satu.
===================================================== */

const legendMasterCheckbox = document.getElementById('toggleAllLayers');

// Menyamakan status checkbox (checked / dicentang sebagian) sejumlah
// .layer-toggle target dengan status "shouldShow" yang diinginkan.
function setLayerToggles(toggles, shouldShow) {
    toggles.forEach(t => {
        if (t.checked !== shouldShow) {
            t.checked = shouldShow;
            t.dispatchEvent(new Event('change'));
        }
    });
}

// Checkbox master paling atas panel Legenda: tampilkan / sembunyikan
// SELURUH layer (lintas kategori) sekaligus.
if (legendMasterCheckbox) {
    legendMasterCheckbox.addEventListener('change', function () {
        setLayerToggles(document.querySelectorAll('.layer-toggle'), this.checked);
    });
}

// Checkbox di header tiap accordion: tampilkan / sembunyikan seluruh
// layer di DALAM kategori tersebut saja. Berlaku generik untuk berapa
// pun jumlah accordion yang punya ".acc-master-checkbox" di headernya.
document.querySelectorAll('.acc-master-checkbox').forEach(groupCheckbox => {
    groupCheckbox.addEventListener('change', function () {
        const accGroup = this.closest('.acc-group');
        if (!accGroup) return;
        setLayerToggles(accGroup.querySelectorAll('.acc-body .layer-toggle'), this.checked);
    });
});

// Menyamakan tampilan checkbox master & per-kategori dengan kondisi
// nyata .layer-toggle di dalamnya: tercentang penuh kalau semua aktif,
// kosong kalau semua nonaktif, dan "indeterminate" (strip) kalau campur.
function syncMasterCheckboxes() {
    document.querySelectorAll('.acc-group').forEach(group => {
        const groupCheckbox = group.querySelector(':scope > .acc-header-row > .acc-master-checkbox');
        if (!groupCheckbox) return;

        const toggles = group.querySelectorAll('.acc-body .layer-toggle');
        if (!toggles.length) return;

        const checkedCount = Array.from(toggles).filter(t => t.checked).length;
        groupCheckbox.checked = checkedCount === toggles.length;
        groupCheckbox.indeterminate = checkedCount > 0 && checkedCount < toggles.length;
    });

    if (legendMasterCheckbox) {
        const allToggles = document.querySelectorAll('.layer-toggle');
        const checkedCount = Array.from(allToggles).filter(t => t.checked).length;
        legendMasterCheckbox.checked = allToggles.length > 0 && checkedCount === allToggles.length;
        legendMasterCheckbox.indeterminate = checkedCount > 0 && checkedCount < allToggles.length;
    }
}

// Delegasi event di level kontainer panel — supaya setiap perubahan pada
// .layer-toggle manapun (baik lewat klik manual, tombol "Tampilkan semua"
// yang sudah ada, maupun checkbox master/kategori baru ini) selalu
// menyinkronkan ulang tampilan checkbox master & kategori. Dipasang lewat
// delegasi (bukan mengubah bindToggle) supaya fungsi lama tetap utuh.
const sidebarPanelsEl = document.getElementById('sidebarPanels');
if (sidebarPanelsEl) {
    sidebarPanelsEl.addEventListener('change', (e) => {
        if (e.target.classList && e.target.classList.contains('layer-toggle')) {
            syncMasterCheckboxes();
        }
    });
}

// Sinkronisasi kondisi awal saat halaman pertama kali dimuat.
syncMasterCheckboxes();
