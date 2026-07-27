/* ============================================================
    CUSTOM SCALE BAR CONTROL — WebGIS Bumijo
    File: js/scale-bar.js
    Tanpa plugin tambahan. Menggunakan algoritma resmi Leaflet
    (map.distance + containerPointToLatLng) untuk menghitung
    skala secara akurat di semua latitude, bukan rumus manual.
   ============================================================ */

L.Control.CustomScaleBar = L.Control.extend({

    options: {
        position: 'bottomleft',
        maxWidth: 120 // lebar maksimum batang skala (px) di desktop
    },

    onAdd: function (map) {
        this._map = map;

        const container = L.DomUtil.create('div', 'custom-scale-control');

        // Cegah interaksi mouse/scroll pada control merambat ke peta
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);

        const wrap = L.DomUtil.create('div', 'custom-scale', container);

        this._label = L.DomUtil.create('div', 'custom-scale-label', wrap);
        this._label.textContent = '—';

        this._barEl = L.DomUtil.create('div', 'custom-scale-bar', wrap);
        this._segments = [];
        for (let i = 0; i < 4; i++) {
            const seg = L.DomUtil.create('div', 'custom-scale-segment', this._barEl);
            seg.classList.add(i % 2 === 0 ? 'seg-amber' : 'seg-peach');
            this._segments.push(seg);
        }

        this._ticks = L.DomUtil.create('div', 'custom-scale-ticks', wrap);
        this._tickStart = L.DomUtil.create('span', 'tick-start', this._ticks);
        this._tickStart.textContent = '0';
        this._tickLine = L.DomUtil.create('span', 'tick-line', this._ticks);
        this._tickLine.textContent = '----------------';
        this._tickEnd = L.DomUtil.create('span', 'tick-end', this._ticks);

        this._container = container;

        // Update saat zoom, geser peta, dan resize window
        map.on('zoomend', this._update, this);
        map.on('move', this._update, this);
        map.on('resize', this._update, this);

        map.whenReady(() => this._update());
        this._update();

        return container;
    },

    onRemove: function (map) {
        map.off('zoomend', this._update, this);
        map.off('move', this._update, this);
        map.off('resize', this._update, this);
        this._map = null;
    },

    // Algoritma pembulatan skala resmi Leaflet (identik dengan
    // yang dipakai internal L.Control.Scale._getRoundNum)
    _getRoundNum: function (num) {
        const pow10 = Math.pow(10, (Math.floor(num) + '').length - 1);
        let d = num / pow10;
        d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
        return pow10 * d;
    },

    // Lebar maksimum batang menyesuaikan lebar peta (responsive)
    _responsiveMaxWidth: function () {
        const mapWidth = this._map.getSize().x;
        const base = this.options.maxWidth;
        return Math.max(70, Math.min(base, mapWidth * 0.28));
    },

    _update: function () {
        if (!this._map) return;

        const maxWidth = this._responsiveMaxWidth();
        const y = this._map.getSize().y / 2;

        // Metode resmi Leaflet: ambil jarak riil (meter) antara dua
        // titik container pada latitude tengah viewport via map.distance()
        const p1 = this._map.containerPointToLatLng([0, y]);
        const p2 = this._map.containerPointToLatLng([maxWidth, y]);
        const maxMeters = this._map.distance(p1, p2);

        if (!isFinite(maxMeters) || maxMeters <= 0) return;

        const meters = this._getRoundNum(maxMeters);
        const ratio = meters / maxMeters;
        const barWidth = Math.round(maxWidth * ratio);

        const isKm = meters >= 1000;
        const value = isKm ? meters / 1000 : meters;
        const unit = isKm ? 'km' : 'm';
        const text = `${value} ${unit}`;

        this._label.textContent = text;
        this._tickEnd.textContent = text;

        this._barEl.style.width = barWidth + 'px';
        this._segments.forEach(seg => {
            seg.style.width = (barWidth / 4) + 'px';
        });

        // TAMBAHKAN baris ini — samakan lebar baris ticks dengan lebar bar
        this._ticks.style.width = barWidth + 'px';
    }
});

// BENAR — factory di-attach ke L.control (huruf kecil)
L.control.customScaleBar = function (options) {
    return new L.Control.CustomScaleBar(options);
};

