/* =========================================================================
    PROFIL LOKAL — data & logika render
    File ini berdiri sendiri, terpisah dari js/ WebGIS utama (map.js, ui.js,
    dst.) sehingga tidak menyentuh fungsi peta sama sekali.

    DATA DUMMY: ganti isi array umkmProfiles / budayaProfiles di bawah ini
    dengan hasil wawancara sebenarnya. Struktur field (id, nama, kategori/
    jenis, foto, ringkasan, lengkap) sengaja dibuat generik agar tinggal
    diisi ulang tanpa perlu mengubah kode render maupun modal.
========================================================================= */

const umkmProfiles = [
    {
        id: 'umkm-1',
        nama: 'Warung Bu Sri',
        kategori: 'Kuliner',
        foto: 'https://placehold.co/400x260/35003e/ffecd1?text=Warung+Bu+Sri',
        ringkasan: 'Warung makan rumahan yang sudah berjualan lebih dari 15 tahun di sekitar Bumijo, dikenal dengan menu sayur lodeh dan sambal khasnya.',
        lengkap: 'Warung Bu Sri dirintis sejak tahun 2009 dan menjadi salah satu tempat makan favorit warga sekitar Bumijo. Dalam wawancara, Bu Sri bercerita bagaimana usahanya bertahan melewati berbagai masa sulit berkat pelanggan setia dan cita rasa masakan rumahan yang konsisten. Ke depan, ia berharap generasi muda di lingkungannya juga tertarik meneruskan usaha kuliner keluarga.'
    },
    {
        id: 'umkm-2',
        nama: 'Batik Jetis Asri',
        kategori: 'Barang & Jasa',
        foto: 'https://placehold.co/400x260/560065/ffecd1?text=Batik+Jetis+Asri',
        ringkasan: 'Usaha batik tulis dan cap yang mengangkat motif khas Kemantren Jetis, dikelola oleh pengrajin generasi kedua.',
        lengkap: 'Batik Jetis Asri meneruskan usaha keluarga yang sudah berjalan sejak generasi sebelumnya. Dalam wawancara bersama tim Sastra Inggris, pengelola menjelaskan proses pembuatan batik tulis maupun cap, tantangan regenerasi pengrajin, serta harapan agar motif khas Bumijo semakin dikenal luas melalui promosi digital.'
    },
    {
        id: 'umkm-3',
        nama: 'Kopi Kampung Bumijo',
        kategori: 'Kuliner',
        foto: 'https://placehold.co/400x260/78290f/ffecd1?text=Kopi+Kampung',
        ringkasan: 'Kedai kopi kecil yang menjadi ruang kumpul warga, mengangkat konsep sederhana dengan harga terjangkau.',
        lengkap: 'Kopi Kampung Bumijo awalnya hanya gerobak kecil di halaman rumah, kini berkembang menjadi tempat nongkrong yang cukup dikenal warga sekitar. Pemiliknya menceritakan bagaimana kedai ini juga sering menjadi lokasi diskusi warga terkait kegiatan kampung, termasuk program KKN.'
    }
];

const budayaProfiles = [
    {
        id: 'budaya-1',
        nama: 'Situs Sejarah Bumijo',
        jenis: 'Cagar Budaya',
        foto: 'https://placehold.co/400x260/35003e/ffb366?text=Situs+Sejarah',
        ringkasan: 'Bangunan bersejarah yang masih dijaga warga sebagai bagian dari identitas kampung dan sering dikunjungi untuk kegiatan edukasi.',
        lengkap: 'Situs ini dipercaya warga sebagai peninggalan penting dalam sejarah kawasan Bumijo. Melalui wawancara dengan sesepuh kampung, tim mencatat cerita lisan mengenai asal-usul bangunan, fungsi sosialnya di masa lalu, serta upaya pelestarian yang dilakukan warga hingga saat ini.'
    },
    {
        id: 'budaya-2',
        nama: 'Sanggar Seni Mekar Budaya',
        jenis: 'Sanggar Seni',
        foto: 'https://placehold.co/400x260/008195/001524?text=Sanggar+Seni',
        ringkasan: 'Kelompok seni tari dan karawitan yang aktif melatih anak-anak dan remaja di lingkungan Bumijo setiap akhir pekan.',
        lengkap: 'Sanggar Seni Mekar Budaya rutin mengadakan latihan tari tradisional dan karawitan bagi generasi muda Bumijo. Dalam wawancara, pengurus sanggar menekankan pentingnya regenerasi seni budaya lokal di tengah gempuran hiburan digital, serta rencana kolaborasi dengan sekolah-sekolah sekitar.'
    },
    {
        id: 'budaya-3',
        nama: 'Ruang Publik Kenanga',
        jenis: 'Ruang Publik',
        foto: 'https://placehold.co/400x260/e0b97e/35003e?text=Ruang+Publik',
        ringkasan: 'Ruang terbuka yang menjadi lokasi kegiatan komunitas, mulai dari kerja bakti hingga pentas seni sederhana warga.',
        lengkap: 'Ruang Publik Kenanga awalnya adalah lahan kosong yang ditata gotong royong oleh warga menjadi ruang komunitas. Wawancara dengan pengurus RT setempat mengungkap bagaimana ruang ini menjadi simpul kegiatan sosial, termasuk perayaan hari besar dan pertemuan warga.'
    }
];

/* =========================================================================
   RENDER CARD
========================================================================= */

function plCardTemplate(item, type, index) {
    const label = type === 'umkm' ? item.kategori : item.jenis;
    return `
        <article class="pl-card" style="--i:${index || 0}">
            <div class="pl-card-photo-wrap">
                <img class="pl-card-photo" src="${item.foto}" alt="${item.nama}" loading="lazy">
            </div>
            <div class="pl-card-body">
                <span class="pl-card-category">${label}</span>
                <h3 class="pl-card-title">${item.nama}</h3>
                <p class="pl-card-summary">${item.ringkasan}</p>
                <button class="pl-card-more" data-type="${type}" data-id="${item.id}">
                    Baca Selengkapnya <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </article>
    `;
}

/* =========================================================================
   FILTER — Semua / Kategori
   Menyaring array asli (umkmProfiles / budayaProfiles) tanpa mengubah
   datanya sama sekali. State filter disimpan terpisah per section supaya
   filter UMKM dan Budaya independen satu sama lain.
========================================================================= */

let umkmActiveFilter = 'Semua';
let budayaActiveFilter = 'Semua';

function plEmptyStateTemplate(label) {
    return `
        <div class="pl-empty-state">
            <i class="bi bi-emoji-neutral"></i>
            <p>Belum ada profil untuk kategori "${label}".</p>
        </div>
    `;
}

function renderProfiles() {
    const umkmGrid = document.getElementById('umkmCardGrid');
    const budayaGrid = document.getElementById('budayaCardGrid');

    if (umkmGrid) {
        const filtered = umkmActiveFilter === 'Semua'
            ? umkmProfiles
            : umkmProfiles.filter(item => item.kategori === umkmActiveFilter);

        umkmGrid.innerHTML = filtered.length
            ? filtered.map((item, i) => plCardTemplate(item, 'umkm', i)).join('')
            : plEmptyStateTemplate(umkmActiveFilter);
    }

    if (budayaGrid) {
        const filtered = budayaActiveFilter === 'Semua'
            ? budayaProfiles
            : budayaProfiles.filter(item => item.jenis === budayaActiveFilter);

        budayaGrid.innerHTML = filtered.length
            ? filtered.map((item, i) => plCardTemplate(item, 'budaya', i)).join('')
            : plEmptyStateTemplate(budayaActiveFilter);
    }
}

function setupFilterBar(barId, onSelect) {
    const bar = document.getElementById(barId);
    if (!bar) return;

    bar.addEventListener('click', (e) => {
        const btn = e.target.closest('.pl-filter-btn');
        if (!btn) return;

        bar.querySelectorAll('.pl-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        onSelect(btn.dataset.filter);
        renderProfiles();
    });
}

setupFilterBar('umkmFilterBar', (filter) => { umkmActiveFilter = filter; });
setupFilterBar('budayaFilterBar', (filter) => { budayaActiveFilter = filter; });

/* =========================================================================
   MODAL "BACA SELENGKAPNYA"
========================================================================= */

const plModal = document.getElementById('plModal');
const plModalPhoto = document.getElementById('plModalPhoto');
const plModalCategory = document.getElementById('plModalCategory');
const plModalTitle = document.getElementById('plModalTitle');
const plModalBody = document.getElementById('plModalBody');

function openPlModal(item, type) {
    if (!plModal) return;
    plModalPhoto.src = item.foto;
    plModalPhoto.alt = item.nama;
    plModalCategory.textContent = type === 'umkm' ? item.kategori : item.jenis;
    plModalTitle.textContent = item.nama;
    plModalBody.textContent = item.lengkap;

    plModal.classList.add('open');
    plModal.setAttribute('aria-hidden', 'false');
}

function closePlModal() {
    if (!plModal) return;
    plModal.classList.remove('open');
    plModal.setAttribute('aria-hidden', 'true');
}

function findProfile(type, id) {
    const list = type === 'umkm' ? umkmProfiles : budayaProfiles;
    return list.find(item => item.id === id);
}

document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.pl-card-more');
    if (trigger) {
        const item = findProfile(trigger.dataset.type, trigger.dataset.id);
        if (item) openPlModal(item, trigger.dataset.type);
    }
});

document.getElementById('plModalClose')?.addEventListener('click', closePlModal);
document.getElementById('plModalBackdrop')?.addEventListener('click', closePlModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlModal();
});

renderProfiles();
