// ==========================================
// 1. CẤU HÌNH HỆ THỐNG VÀ BẢN ĐỒ
// ==========================================
const CONFIG = {
    PROVINCES: [
        { id: "CaMau", name: "1. Tỉnh Cà Mau", file: "./geojson/Ca-Mau.json" },
        { id: "AnGiang", name: "2. Tỉnh An Giang", file: "./geojson/An-Giang.json" },
        { id: "TPCanTho", name: "3. Thành Phố Cần Thơ", file: "./geojson/TP-Can-Tho.json" },
        { id: "VinhLong", name: "4.Tỉnh Vĩnh Long", file: "./geojson/Vinh-Long.json" },
        { id: "DongThap", name: "5. Tỉnh Đồng Tháp", file: "./geojson/Dong-Thap.json" },
        { id: "TPHoChiMinh", name: "6. Thành Phố Hồ Chí Minh", file: "./geojson/TP-Ho-Chi-Minh.json" },
        { id: "TayNinh", name: "7. Tỉnh Tây Ninh", file: "./geojson/Tay-Ninh.json" },
        { id: "TPDongNai", name: "8. Thành Phố Đồng Nai", file: "./geojson/TP-Dong-Nai.json" },
        { id: "LamDong", name: "9. Tỉnh Lâm Đồng", file: "./geojson/Lam-Dong.json" },
        { id: "KhanhHoa", name: "10. Tỉnh Khánh Hòa", file: "./geojson/Khanh-Hoa.json" },
        { id: "DakLak", name: "11. Tỉnh Dak Lak", file: "./geojson/Dak-Lak.json" },
        { id: "GiaLai", name: "12. Tỉnh Gia Lai", file: "./geojson/Gia-Lai.json" },
        { id: "QuangNgai", name: "13. Tỉnh Quảng Ngãi", file: "./geojson/Quang-Ngai.json" },
        { id: "TPDaNang", name: "14. Thành Phố Đà Nẵng", file: "./geojson/TP-Da-Nang.json" },
        { id: "TPHue", name: "15. Thành Phố Huế", file: "./geojson/TP-Hue.json" },
        { id: "QuangTri", name: "16. Tỉnh Quảng Trị", file: "./geojson/TP-Quang-Tri.json" },
        { id: "HaTinh", name: "17. Tỉnh Hà Tĩnh", file: "./geojson/Ha-Tinh.json" },
        { id: "NgheAn", name: "18. Tỉnh Nghệ An", file: "./geojson/Nghe-An.json" },
        { id: "ThanhHoa", name: "19. Tỉnh Thanh Hóa", file: "./geojson/Thanh-Hoa.json" },
        { id: "NinhBinh", name: "20. Tỉnh Ninh Bình", file: "./geojson/Ninh_Binh.json" },
        { id: "HungYen", name: "21. Tỉnh Hưng Yên", file: "./geojson/Hung-Yen.json" },
        { id: "SonLa", name: "22. Tỉnh Sơn La", file: "./geojson/Son-La.json" },
        { id: "PhuTho", name: "23. Tỉnh Phú Thọ", file: "./geojson/Phu-Tho.json" },
        { id: "TPHaNoi", name: "24. Thành Phố Hà Nội", file: "./geojson/TP-Ha-Noi.json" },
        { id: "TPHaiPhong", name: "25. Thành Phố Hải Phòng", file: "./geojson/TP-Hai-Phong.json" },
        { id: "BacNinh", name: "26. TP. Bắc Ninh", file: "./geojson/Bac-Ninh.json" },
        { id: "QuangNinh", name: "27. TP. Quảng Ninh", file: "./geojson/Quang-Ninh.json" },
        { id: "DienBien", name: "28. Tỉnh Điện Biên", file: "./geojson/Dien-Bien.json" },
        { id: "LaiChau", name: "29. Tỉnh Lai Châu", file: "./geojson/Lai-Chau.json" },
        { id: "LaoCai", name: "30. Tỉnh Lào Cai", file: "./geojson/Lao-Cai.json" },
        { id: "TuyenQuang", name: "31. Tỉnh Tuyên Quang", file: "./geojson/Tuyên-Quang.json" },
        { id: "ThaiNguyen", name: "32. Tỉnh Thái Nguyên", file: "./geojson/Thai-Nguyên.json" },
        { id: "CaoBang", name: "33. Tỉnh Cao Bằng", file: "./geojson/Cao-Bang.json" },
        { id: "LangSon", name: "34. Tỉnh Lạng Sơn", file: "./geojson/Lang-Son.json" },  
    ],

    SHEET_DATA_URL: 'https://script.google.com/macros/s/AKfycbz87dcUkndM5w5BeFqUFYJt8JDEcPu98IH5mbzNdov_6eXTNUEhIiknFQ9P7H2c0ZQE/exec',

    MAP_STYLE: {
        'version': 8,
        'sources': {
            'google-satellite': {
                'type': 'raster',
                'tiles': ['https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'],
                'tileSize': 256
            },
            'osm-map': { 
                'type': 'raster',
                'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                'tileSize': 256,
                'attribution': '&copy; OpenStreetMap contributors'
            },
            'ha-tang-dien-source': {
                'type': 'geojson',
                'data': './geojson/Ca-Mau-ha-tang-dien.json'
            }
        },
        'layers': [
            {
                'id': 'google-satellite-layer',
                'type': 'raster',
                'source': 'google-satellite',
                'minzoom': 0, 'maxzoom': 22
            },
            {
                'id': 'osm-layer', 
                'type': 'raster',
                'source': 'osm-map',
                'layout': { 'visibility': 'none' },
                'minzoom': 0, 'maxzoom': 22
            },
            {
                'id': 'ha-tang-dien-line',
                'type': 'line',
                'source': 'ha-tang-dien-source',
                'filter': ['==', '$type', 'LineString'],
                'minzoom': 0, 'maxzoom': 22,
                'paint': {
                    'line-color': '#ffcc00',
                    'line-width': 1,
                    'line-opacity': 0.5
                }
            },
            {
                'id': 'ha-tang-dien-points',
                'type': 'circle',
                'source': 'ha-tang-dien-source',
                'filter': ['==', '$type', 'Point'],
                'minzoom': 14,
                'maxzoom': 22,
                'paint': {
                    'circle-radius': 4,
                    'circle-color': '#ff0000',
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#ffffff'
                }
            }
        ]
    },

    MAP_CENTER: [105.15, 9.18],
    MAP_ZOOM: 12,
    FILL_COLOR: '#00ffcc',
    FILL_OPACITY: 0.3,
    OUTLINE_COLOR: '#ffffff'
};

const COLOR_MATCH_EXPRESSION = [
    'match',
    ['get', 'Loại Đất'],
    'Đất ở tại đô thị', '#e063ce',
    'Đất ở tại nông thôn', '#cf99c7',
    'Đất nuôi trồng thuỷ sản', '#00b4d8',
    'Đất nuôi trồng thủy sản', '#00b4d8',
    'Đất trồng cây lâu năm', '#519e05',
    'Đất trồng cây hàng năm khác', '#519e05',
    'Đất trồng lúa', '#f5e753',
    'Đất chuyên trồng lúa nước', '#ffea00',
    '#c2b9ab'
];


// ==========================================
// 1A. HÀM PHỤ TRỢ TẢI FILE GEOJSON AN TOÀN
// ==========================================
async function fetchGeoDataByUrl(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Không thể tải file: ${url}`);
        return await response.json();
    } catch (error) {
        console.error("Lỗi tải GeoJSON:", error);
        return null;
    }
}

// ==========================================
// 2. XỬ LÝ LOGIC BẢN ĐỒ VÀ HÀNH CHÍNH
// ==========================================
let currentGeoData = null;

async function selectPhuongFromPoint(lng, lat, map) {
    const tinhSelect = document.getElementById('tinhFilter');
    const phuongSelect = document.getElementById('phuongFilter');
    const point = turf.point([lng, lat]); 

    let matchedProvince = null;
    let matchedPhuong = null;
    let targetGeoData = null;

    for (const provinceInfo of CONFIG.PROVINCES) {
        const geoData = await fetchGeoDataByUrl(provinceInfo.file);
        if (geoData && geoData.features) {
            for (const feature of geoData.features) {
                if (turf.booleanPointInPolygon(point, feature)) {
                    matchedProvince = provinceInfo;
                    targetGeoData = geoData;
                    const p = feature.properties || {};
                    matchedPhuong = p.name || p.dia_chi || p.Phuong || p.Xa || p.NAME_2 || p.NAME_3;
                    break;
                }
            }
        }
        if (matchedProvince) break;
    }

    if (matchedProvince && targetGeoData) {
        if (tinhSelect.value !== matchedProvince.id) {
            tinhSelect.value = matchedProvince.id;
            currentGeoData = targetGeoData;

            if (map.getSource('thua-dat-src')) {
                map.getSource('thua-dat-src').setData(targetGeoData);
            } else {
                map.addSource('thua-dat-src', { type: 'geojson', data: targetGeoData });
                map.addLayer({
                    'id': 'thua-dat-layer',
                    'type': 'fill',
                    'source': 'thua-dat-src',
                    'paint': { 'fill-color': '#000000', 'fill-opacity': 0 }
                });
                map.addLayer({
                    'id': 'thua-dat-line-layer',
                    'type': 'line',
                    'source': 'thua-dat-src',
                    'paint': { 'line-color': '#ff0000', 'line-width': 2 }
                });
            }

            phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>';
            phuongSelect.disabled = false;
            
            const phuongSet = new Set();
            targetGeoData.features.forEach(f => {
                const p = f.properties || {};
                const val = p.name || p.dia_chi || p.Phuong || p.Quan || p.Xa || p.NAME_2 || p.NAME_3;
                if (val) phuongSet.add(String(val).trim());
            });
            
            Array.from(phuongSet).sort().forEach(pName => {
                const opt = document.createElement('option');
                opt.value = pName;
                opt.textContent = pName;
                phuongSelect.appendChild(opt);
            });

            if (typeof loadThuaDatFromSheet === 'function') {
                await loadThuaDatFromSheet(map);
            }
        }

        if (matchedPhuong && phuongSelect) {
            phuongSelect.value = matchedPhuong;
            const filterExpr = [
                'any',
                ['==', ['get', 'name'], matchedPhuong],
                ['==', ['get', 'dia_chi'], matchedPhuong],
                ['==', ['get', 'Phuong'], matchedPhuong],
                ['==', ['get', 'Xa'], matchedPhuong]
            ];
            const sheetFilterExpr = ['==', ['get', 'Địa Chỉ Thửa Đất'], matchedPhuong];

            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', filterExpr);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', filterExpr);
            if (map.getLayer('sheet-thua-dat-fill')) map.setFilter('sheet-thua-dat-fill', sheetFilterExpr);
            if (map.getLayer('sheet-thua-dat-line')) map.setFilter('sheet-thua-dat-line', sheetFilterExpr);
        }
    }
}

async function loadProvinceData(provinceId, map) {
    const phuongSelect = document.getElementById('phuongFilter');
    phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>';
    if (typeof hideThuaDat === 'function') hideThuaDat(map);

    if (!provinceId) {
        phuongSelect.disabled = true;
        currentGeoData = null;
        return;
    }

    const provinceInfo = CONFIG.PROVINCES.find(p => p.id === provinceId);
    if (!provinceInfo) return;

    const geoData = await fetchGeoDataByUrl(provinceInfo.file); 
    if (!geoData || !geoData.features) {
        alert("Chưa tải được file GeoJSON!");
        return;
    }

    currentGeoData = geoData;
    const phuongSet = new Set();
    geoData.features.forEach(f => {
        const p = f.properties || {};
        const val = p.name || p.dia_chi || p.Phuong || p.Quan || p.Xa || p.NAME_2 || p.NAME_3;
        if (val) phuongSet.add(String(val).trim());
    });

    if (map.getSource('thua-dat-src')) {
        map.getSource('thua-dat-src').setData(geoData);
    } else {
        map.addSource('thua-dat-src', { type: 'geojson', data: geoData });
        map.addLayer({
            'id': 'thua-dat-layer',
            'type': 'fill',
            'source': 'thua-dat-src',
            'paint': { 'fill-color': '#000000', 'fill-opacity': 0 }
        });
        map.addLayer({
            'id': 'thua-dat-line-layer',
            'type': 'line',
            'source': 'thua-dat-src',
            'paint': { 'line-color': '#ff0000', 'line-width': 2 }
        });
    }

    const showAllProvinceFilter = ['!=', '$type', 'Point']; 
    if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', showAllProvinceFilter);
    if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', showAllProvinceFilter);

    try {
        const bbox = turf.bbox(geoData);
        map.fitBounds(bbox, { padding: 50, maxZoom: 15, duration: 300 }); 
    } catch (err) {
        console.error("Lỗi tự động zoom khung tỉnh:", err);
    }

    phuongSelect.disabled = false;
    Array.from(phuongSet).sort().forEach(pName => {
        const opt = document.createElement('option');
        opt.value = pName;
        opt.textContent = pName;
        phuongSelect.appendChild(opt);
    });
}

function initFilter(map) {
    const tinhSelect = document.getElementById('tinhFilter');
    const phuongSelect = document.getElementById('phuongFilter');

    tinhSelect.innerHTML = '<option value="">-- Tỉnh / TP --</option>';
    CONFIG.PROVINCES.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        tinhSelect.appendChild(opt);
    });

    tinhSelect.addEventListener('change', (e) => {
        loadProvinceData(e.target.value, map);
    });

    phuongSelect.addEventListener('change', async (e) => {
        const selectedPhuong = e.target.value;

        if (!selectedPhuong) {
            if (typeof hideThuaDat === 'function') hideThuaDat(map);
            const showAllProvinceFilter = ['!=', '$type', 'Point'];
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', showAllProvinceFilter);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', showAllProvinceFilter);
        } else {
            const filterExpr = [
                'any',
                ['==', ['get', 'name'], selectedPhuong],
                ['==', ['get', 'dia_chi'], selectedPhuong],
                ['==', ['get', 'Phuong'], selectedPhuong],
                ['==', ['get', 'Xa'], selectedPhuong]
            ];

            const sheetFilterExpr = ['==', ['get', 'Địa Chỉ Thửa Đất'], selectedPhuong];

            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', filterExpr);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', filterExpr);
            
            if (typeof loadThuaDatFromSheet === 'function') {
                await loadThuaDatFromSheet(map);
            }

            if (map.getLayer('sheet-thua-dat-fill')) map.setLayer('sheet-thua-dat-fill', sheetFilterExpr);
            if (map.getLayer('sheet-thua-dat-line')) map.setLayer('sheet-thua-dat-line', sheetFilterExpr);

            if (currentGeoData) {
                const filtered = currentGeoData.features.filter(f => {
                    const p = f.properties || {};
                    return p.name === selectedPhuong || p.dia_chi === selectedPhuong || p.Phuong === selectedPhuong || p.Xa === selectedPhuong;
                });

                if (filtered.length > 0) {
                    const fc = turf.featureCollection(filtered);
                    const bbox = turf.bbox(fc);
                    map.fitBounds(bbox, { padding: 50, duration: 300 });
                }
            }
        }
    });
}


// ==========================================
// 3. QUẢN LÝ BẢN ĐỒ MAPLIBRE VÀ TƯƠNG TÁC
// ==========================================
let activeMarkers = []; 
window.selectedThuaDatId = null; 

function clearLengthMarkers() {
    activeMarkers.forEach(marker => marker.remove());
    activeMarkers = []; 
}

function formatNumberVN(val) {
    if (val === null || val === undefined || val === '' || val === '-') return '-';
    const stringVal = String(val).replace(',', '.');
    const num = parseFloat(stringVal);
    if (isNaN(num)) return val;
    return num.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function closeParcelPanel() {
    const panel = document.getElementById('parcel-info-panel');
    if (panel) panel.style.display = 'none';
    window.selectedThuaDatId = null;
    clearLengthMarkers();

    const mapInstance = window.currentMapInstance;
    if (mapInstance) {
        if (mapInstance.getLayer('sheet-thua-dat-highlight-fill')) {
            mapInstance.setFilter('sheet-thua-dat-highlight-fill', ['==', ['get', 'ID Thửa Đất'], '']);
        }
        if (mapInstance.getLayer('sheet-thua-dat-highlight-line')) {
            mapInstance.setFilter('sheet-thua-dat-highlight-line', ['==', ['get', 'ID Thửa Đất'], '']);
        }
        if (mapInstance.getSource('parcel-dimensions-source')) {
            mapInstance.getSource('parcel-dimensions-source').setData({ type: 'FeatureCollection', features: [] });
        }
    }
}

function initMap() {
    const map = new maplibregl.Map({
        container: 'map', 
        style: CONFIG.MAP_STYLE, 
        center: CONFIG.MAP_CENTER, 
        zoom: CONFIG.MAP_ZOOM,
        maxTileCacheSize: 50,
        
        // Khóa hoàn toàn tính năng xoay và 3D
        dragRotate: false, 
        pitchWithRotate: false, 
        touchZoomRotate: true // Cho phép thu phóng
    });

    // Vô hiệu hóa tính năng xoay
    map.touchZoomRotate.disableRotation();

    window.currentMapInstance = map;

    const geolocate = new maplibregl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 },
        trackUserLocation: true, 
        showUserHeading: true 
    });
    
    map.addControl(geolocate, 'top-right');

    geolocate.on('geolocate', async (position) => {
        const lng = position.coords.longitude; 
        const lat = position.coords.latitude; 
        if (typeof selectPhuongFromPoint === 'function') {
            await selectPhuongFromPoint(lng, lat, map);
        }
    });

    map.on('load', () => {
        const satLayer = 'google-satellite-layer'; 
        const osmLayer = 'osm-layer'; 

        map.setLayoutProperty(satLayer, 'visibility', 'visible');
        map.setLayoutProperty(osmLayer, 'visibility', 'none');

        const toggleBtn = document.getElementById('toggleLayerBtn');
        if (toggleBtn) {
            toggleBtn.innerText = 'Chuyển sang Bản đồ OSM';
            toggleBtn.onclick = function() {
                const isSatVisible = map.getLayoutProperty(satLayer, 'visibility') === 'visible';
                if (isSatVisible) {
                    map.setLayoutProperty(satLayer, 'visibility', 'none');
                    map.setLayoutProperty(osmLayer, 'visibility', 'visible');
                    this.innerText = 'Chuyển sang Bản đồ Vệ tinh';
                } else {
                    map.setLayoutProperty(satLayer, 'visibility', 'visible');
                    map.setLayoutProperty(osmLayer, 'visibility', 'none');
                    this.innerText = 'Chuyển sang Bản đồ OSM';
                }
            };
        }

        const opacitySlider = document.getElementById('opacitySlider');
        const opacityValueLabel = document.getElementById('opacityValue');

        if (opacitySlider) {
            opacitySlider.oninput = function() {
                const val = parseFloat(this.value);
                if (opacityValueLabel) opacityValueLabel.innerText = val;
                if (map.getLayer('sheet-thua-dat-fill')) {
                    map.setPaintProperty('sheet-thua-dat-fill', 'fill-opacity', val);
                }
                if (map.getLayer('sheet-thua-dat-highlight-fill')) {
                    map.setPaintProperty('sheet-thua-dat-highlight-fill', 'fill-opacity', Math.min(val + 0.2, 1.0));
                }
            };
        }

        if (!map.getSource('parcel-dimensions-source')) {
            map.addSource('parcel-dimensions-source', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: [] }
            });

            map.addLayer({
                id: 'parcel-dimensions-layer',
                type: 'circle',
                source: 'parcel-dimensions-source',
                paint: {
                    'circle-radius': 4, 
                    'circle-color': '#ffffff', 
                    'circle-stroke-width': 1.5, 
                    'circle-stroke-color': '#000000'
                }
            });
        }

        if (typeof initMeasureFeature === 'function') initMeasureFeature(map);
        if (typeof initMarkFeature === 'function') initMarkFeature(map);

        initFilter(map);
        if (typeof initThuaDatSearch === 'function') initThuaDatSearch(map);
    });

    const sheetLayers = ['sheet-thua-dat-fill', 'sheet-thua-dat-line'];
    let isFeatureClicked = false; 

    sheetLayers.forEach(layerId => {
        map.on('click', layerId, (e) => {
            if (typeof isMeasuring !== 'undefined' && isMeasuring || (typeof isMarkingMode !== 'undefined' && isMarkingMode)) return; 
            if (!e.features || !e.features.length) return;
            isFeatureClicked = true; 

            const selectedFeature = e.features[0];
            window._currentParcelFeature = selectedFeature; 
            const rawProps = selectedFeature.properties || {}; 
            window._currentParcelRawProps = rawProps;

            const parcelId = rawProps['ID Thửa Đất'] || rawProps['id'] || '';
            window.selectedThuaDatId = parcelId;

            clearLengthMarkers();

            // Biến trạng thái nhãn (mặc định là false - ẩn)
            window._isParcelLabelsVisible = false;

            // Hàm toggle bật/tắt nhãn
            window.toggleParcelLabels = function() {
                window._isParcelLabelsVisible = !window._isParcelLabelsVisible;
                const btn = document.getElementById('toggle-labels-btn');
                if (btn) {
                    btn.innerText = window._isParcelLabelsVisible ? 'Ẩn nhãn' : 'Hiện nhãn';
                }
                
                // Ẩn/hiện các marker độ dài cạnh và tọa độ góc
                activeMarkers.forEach(marker => {
                    const el = marker.getElement();
                    if (el) {
                        el.style.display = window._isParcelLabelsVisible ? 'block' : 'none';
                    }
                });

                // Ẩn/hiện layer hiển thị nét độ dài cạnh trên bản đồ (nếu có)
                if (map.getLayer('parcel-dimensions-line')) {
                    map.setLayoutProperty('parcel-dimensions-line', 'visibility', window._isParcelLabelsVisible ? 'visible' : 'none');
                }
            };

            // ==========================================
            // ĐOẠN CODE TÍNH TOÁN VÀ GHI ĐỘ DÀI CẠNH & TỌA ĐỘ GÓC
            // ==========================================
            if (typeof turf !== 'undefined' && selectedFeature.geometry) {
                try {
                    const lineSegments = turf.lineSegment(selectedFeature); 
                    const dimensionFeatures = [];

                    lineSegments.features.forEach(segment => {
                        const lengthMeters = turf.length(segment, { units: 'meters' }); 
                        const formattedLength = lengthMeters >= 10 ? `${lengthMeters.toFixed(1)}m` : `${lengthMeters.toFixed(2)}m`;

                        segment.properties.length = formattedLength;
                        dimensionFeatures.push(segment);

                        const coords = segment.geometry.coordinates;
                        const midCoord = [(coords[0][0] + coords[1][0]) / 2, (coords[0][1] + coords[1][1]) / 2];

                        const el = document.createElement('div');
                        el.style.color = '#ffffff'; 
                        el.style.fontSize = '12px'; 
                        el.style.fontWeight = 'Bold'; 
                        el.style.textShadow = '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000'; 
                        el.style.whiteSpace = 'nowrap'; 
                        el.innerText = formattedLength; 
                        
                        // Mặc định ẩn nhãn khi khởi tạo
                        el.style.display = 'none';

                        const marker = new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat(midCoord).addTo(map); 
                        activeMarkers.push(marker); 
                    });

                    if (map.getSource('parcel-dimensions-source')) {
                        map.getSource('parcel-dimensions-source').setData({ type: 'FeatureCollection', features: dimensionFeatures });
                    }

                    // TỌA ĐỘ CÁC GÓC THỬA ĐẤT (G1, G2,...)
                    let polygonCoords = [];
                    if (selectedFeature.geometry.type === 'Polygon') {
                        polygonCoords = selectedFeature.geometry.coordinates[0];
                    } else if (selectedFeature.geometry.type === 'MultiPolygon') {
                        polygonCoords = selectedFeature.geometry.coordinates[0][0];
                    }

                    if (polygonCoords && polygonCoords.length > 0) {
                        const uniqueCoords = polygonCoords.slice(0, polygonCoords.length - 1);

                        uniqueCoords.forEach((coord, index) => {
                            const lng = coord[0].toFixed(6);
                            const lat = coord[1].toFixed(6);

                            const cornerEl = document.createElement('div');
                            cornerEl.style.color = '#ffffff';
                            cornerEl.style.fontSize = '12px';
                            cornerEl.style.fontWeight = 'bold';
                            cornerEl.style.textShadow = '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000';
                            cornerEl.style.whiteSpace = 'nowrap';
                            cornerEl.innerHTML = `G${index + 1}: ${lat}, ${lng}`;
                            
                            // Mặc định ẩn nhãn góc khi khởi tạo
                            cornerEl.style.display = 'none';

                            const cornerMarker = new maplibregl.Marker({ element: cornerEl, anchor: 'top', offset: [0, 5] })
                                .setLngLat(coord)
                                .addTo(map);

                            activeMarkers.push(cornerMarker);
                        });
                    }
                } catch (err) {
                    console.error("Lỗi trong quá trình tính toán độ dài cạnh thửa đất:", err);
                }
            }
        // ==========================================
            const soTo = rawProps['Số tờ'] || rawProps['So to'] || '-';
            const soThua = rawProps['Số thửa'] || rawProps['So thua'] || '-';
            const rawDienTich = rawProps['Diện tích'] || rawProps['Dien tich'] || rawProps['dien_tich'] || rawProps['DienTich'] || rawProps['DIỆN TÍCH'] || '-';
            const dienTich = formatNumberVN(rawDienTich); 
            const loaiDat = rawProps['Loại Đất'] || rawProps['Loại Đất:'] || rawProps['Loại đất'] || rawProps['loai_dat'] || '-';
            const tenChu = rawProps['Tên Chủ'] || rawProps['Tên chủ'] || '-';
            const soDinhDanh = rawProps['Số định danh chủ đất'] || rawProps['Số định danh'] || 'Không có';
            
            const columnNValue = rawProps['Cột N'] || rawProps['cot_n'] || rawProps['Ghi Chú'] || rawProps['Ghi chú'] || '';
            let columnNLinkHTML = '';

            if (columnNValue && columnNValue.trim() !== '' && columnNValue !== 'Không có') {
                window[`_viewColN_${parcelId}`] = () => openColumnNPopup(parcelId, 'view', columnNValue);
                columnNLinkHTML = `<a href="javascript:void(0);" onclick="window._viewColN_${parcelId}();" style="color: #007bff; text-decoration: underline; font-weight: bold;">Xem</a>`;
            } else {
                window[`_inputColN_${parcelId}`] = () => openColumnNPopup(parcelId, 'input', '');
                columnNLinkHTML = `<a href="javascript:void(0);" onclick="window._inputColN_${parcelId}();" style="color: #d93025; text-decoration: underline; font-weight: bold;">Nhập</a>`;
            }

            let selectFilter = parcelId ? ['==', ['get', 'ID Thửa Đất'], rawProps['ID Thửa Đất'] || parcelId] : ['==', ['get', 'Tên Chủ'], tenChu];

            if (map.getLayer('sheet-thua-dat-highlight-fill')) map.setFilter('sheet-thua-dat-highlight-fill', selectFilter);
            if (map.getLayer('sheet-thua-dat-highlight-line')) map.setFilter('sheet-thua-dat-highlight-line', selectFilter);

            // 1. Khai báo nội dung thông tin thửa đất
            const panelContent = `
                <div><b>Số tờ:</b> ${soTo}</div>
                <div><b>Số thửa:</b> ${soThua}</div>
                <div><b>Diện tích:</b> ${dienTich} m²</div>
                <div><b>Loại đất:</b> ${loaiDat}</div>
                <div style="grid-column: span 2;"><b>Tên chủ:</b> ${tenChu}</div>
                <div><b>Số định danh:</b> ${soDinhDanh}</div>
                <div><b>Ghi chú:</b> ${columnNLinkHTML}</div>
            `;

            const panelContentEl = document.getElementById('panel-content');
            const panelEl = document.getElementById('parcel-info-panel');
            
            // Gán nội dung vào panel
            if (panelContentEl) panelContentEl.innerHTML = panelContent;
            
            // 2. Hiển thị panel và tự động quét gắn nút "Hiện nhãn" / "Ẩn nhãn" cạnh tiêu đề có sẵn
            if (panelEl) {
                panelEl.style.display = 'block';
                
                const allDivs = panelEl.querySelectorAll('div, span, b, h3, h4');
                for (let el of allDivs) {
                    // Tìm chính xác thẻ chứa tiêu đề "THÔNG TIN THỬA ĐẤT"
                    if (el.innerText && el.innerText.trim() === 'THÔNG TIN THỬA ĐẤT' && !document.getElementById('toggle-labels-btn')) {
                        const btn = document.createElement('button');
                        btn.id = 'toggle-labels-btn';
                        btn.innerText = window._isParcelLabelsVisible ? 'Ẩn nhãn' : 'Hiện nhãn';
                        btn.style.marginLeft = '10px';
                        btn.style.padding = '1px 6px';
                        btn.style.fontSize = '11px';
                        btn.style.fontWeight = 'bold';
                        btn.style.cursor = 'pointer';
                        btn.style.backgroundColor = '#f0f0f0';
                        btn.style.border = '1px solid #ccc';
                        btn.style.borderRadius = '3px';
                        
                        btn.onclick = window.toggleParcelLabels;
                        
                        // Chèn trực tiếp ngay sau chữ THÔNG TIN THỬA ĐẤT
                        el.appendChild(btn);
                        break;
                    }
                }
            }
        });

        map.on('mouseenter', layerId, () => map.getCanvas().style.cursor = 'default');
        map.on('mouseleave', layerId, () => map.getCanvas().style.cursor = 'default');
    });

    map.on('click', (e) => {
        if (typeof isMeasuring !== 'undefined' && isMeasuring) {
            if (window._isDraggingMarker) return;
            const coords = [e.lngLat.lng, e.lngLat.lat];
            if (measureCoordinates.length >= 2 && typeof turf !== 'undefined') {
                const firstCoord = measureCoordinates[0];
                const distanceToFirst = turf.distance(turf.point(firstCoord), turf.point(coords), { units: 'meters' });
                if (distanceToFirst < 5) {
                    pushMeasureState();
                    measureCoordinates.push([...firstCoord]);
                    updateMeasureGeometry(map, false);
                    return;
                }
            }
            pushMeasureState();
            measureCoordinates.push(coords);
            updateMeasureGeometry(map, false);
            return;
        }

        if (!isFeatureClicked) {
            closeParcelPanel(); 
            if (typeof selectPhuongFromPoint === 'function') {
                selectPhuongFromPoint(e.lngLat.lng, e.lngLat.lat, map);
            }
        }
        isFeatureClicked = false; 
    });
}

document.addEventListener('DOMContentLoaded', initMap);
