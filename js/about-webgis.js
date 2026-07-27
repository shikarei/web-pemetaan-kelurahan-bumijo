/* =========================================================================
   ABOUT WEBGIS — script pendukung
   File ini berdiri sendiri, terpisah dari js/ WebGIS utama sehingga tidak
   menyentuh fungsi peta, sidebar, dashboard, maupun Profil Lokal sama sekali.
========================================================================= */

const abYearEl = document.getElementById('abYear');
if (abYearEl) {
    abYearEl.textContent = new Date().getFullYear();
}

/* =========================================================================
   REVEAL ON SCROLL
   Memberi class "is-visible" pada elemen ".ab-reveal" (panel Latar Belakang
   & kartu Tujuan/Manfaat) begitu elemen tersebut masuk viewport. Animasinya
   sendiri sepenuhnya diatur lewat CSS (lihat css/about-webgis.css).
========================================================================= */

function initRevealElements() {
    const revealEls = document.querySelectorAll('.ab-reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    // Ditunda dua frame supaya browser sempat menggambar kondisi awal
    // (opacity:0) lebih dulu sebelum diobservasi — kalau langsung
    // di-observe di frame yang sama, transisi tidak sempat terlihat
    // dan elemen terkesan "muncul begitu saja" alih-alih fade-in.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            revealEls.forEach(el => observer.observe(el));
        });
    });
}

/* =========================================================================
   RUANG LINGKUP PEMETAAN — TIMELINE
   Terinspirasi dari mekanisme js/timeline.js (item kiri/kanan berselang-
   seling, progress line yang mengisi mengikuti scroll, reveal lewat
   IntersectionObserver), dibangun ulang dengan palet halaman ini sendiri.
   Kontennya sama persis dengan 4 tema pemetaan yang sebelumnya ditampilkan
   sebagai kartu — hanya tata letaknya yang berubah menjadi timeline.
========================================================================= */

function initRuangLingkupTimeline() {
    const container = document.getElementById('ruangLingkupTimeline');
    if (!container) return;

    const rlData = [
        {
            accent: 'amber',
            icon: 'bi-fire',
            title: 'Prioritas Penanganan Sampah',
            description: 'Pemetaan lokasi penumpukan sampah menggunakan analisis Kernel Density untuk mengidentifikasi tingkat konsentrasi permasalahan sampah sehingga dapat menentukan wilayah prioritas penanganan berdasarkan kategori rendah, sedang, dan tinggi.'
        },
        {
            accent: 'peach',
            icon: 'bi-diagram-3-fill',
            title: 'Jangkauan Layanan Sampah',
            description: 'Analisis Buffer terhadap lokasi TPS dan fasilitas layanan pengelolaan sampah untuk mengetahui wilayah yang telah terlayani maupun wilayah yang masih memiliki keterbatasan akses pelayanan.'
        },
        {
            accent: 'teal',
            icon: 'bi-building',
            title: 'Ruang Aktivitas Budaya',
            description: 'Inventarisasi serta pemetaan lokasi kegiatan budaya, ruang budaya, aset budaya, dan fasilitas pendukung sebagai media dokumentasi dan informasi potensi budaya Kelurahan Bumijo.'
        },
        {
            accent: 'pale',
            icon: 'bi-shop',
            title: 'UMKM & Ekonomi Kreatif',
            description: 'Pemetaan persebaran UMKM berdasarkan kategori usaha sebagai media informasi potensi ekonomi lokal yang dapat mendukung promosi, pengembangan kampung tematik, dan pemberdayaan masyarakat.'
        }
    ];

    let contentHTML = '';
    rlData.forEach((item, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        contentHTML += `
            <div class="rl-item ${side}" data-accent="${item.accent}" style="--i:${index}">
                <span class="rl-marker"><i class="bi ${item.icon}"></i></span>
                <div class="rl-card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = contentHTML;

    const progressLine = document.createElement('div');
    progressLine.id = 'rlProgress';
    container.prepend(progressLine);

    const rlItems = container.querySelectorAll('.rl-item');
    let isTicking = false;

    const updateRlProgress = () => {
        let lastVisibleItem = null;
        rlItems.forEach(item => {
            if (item.classList.contains('is-visible')) {
                lastVisibleItem = item;
            }
        });
        if (lastVisibleItem) {
            const dotPosition = lastVisibleItem.offsetTop + 24;
            progressLine.style.height = `${dotPosition}px`;
        }
        isTicking = false;
    };

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(updateRlProgress);
            isTicking = true;
        }
    });

    const rlObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                updateRlProgress();
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    // Sama seperti initRevealElements(): tunda dua frame supaya kondisi
    // awal (opacity:0, tergeser, marker mengecil) sempat digambar dulu
    // sebelum observer mulai bekerja, sehingga reveal benar-benar terlihat
    // animatif — bukan langsung muncul penuh tanpa transisi.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            rlItems.forEach(item => rlObserver.observe(item));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRevealElements();
    initRuangLingkupTimeline();
});
