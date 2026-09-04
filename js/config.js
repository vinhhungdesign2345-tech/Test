// ==========================================
// 1. CẤU HÌNH HỆ THỐNG VÀ BẢN ĐỒ (CONFIG)
// ==========================================
const CONFIG = {
 // --- DANH SÁCH CÁC TỈNH/THÀNH PHỐ VÀ ĐƯỜNG DẪN TỆP TÀI NGUYÊN GEOJSON ---
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
 { id: "QuangTri", name: "16. Tỉnh Quảng Trị", file: "./geojson/Quang-Tri.json" },
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
 { id: "TuyenQuang", name: "31. Tỉnh Tuyên Quang", file: "./geojson/Tuyen-Quang.json" },
 { id: "ThaiNguyen", name: "32. Tỉnh Thái Nguyên", file: "./geojson/Thai-Nguyên.json" },
 { id: "CaoBang", name: "33. Tỉnh Cao Bằng", file: "./geojson/Cao-Bang.json" },
 { id: "LangSon", name: "34. Tỉnh Lạng Sơn", file: "./geojson/Lang-Son.json" }, 
 ],

 // --- URL GOOGLE APPS SCRIPT TRUY XUẤT DỮ LIỆU THỬA ĐẤT ---
 SHEET_DATA_URL: 'https://script.google.com/macros/s/AKfycbz87dcUkndM5w5BeFqUFYJt8JDEcPu98IH5mbzNdov_6eXTNUEhIiknFQ9P7H2c0ZQE/exec',

 // --- CẤU HÌNH GIAO DIỆN VÀ LỚP BẢN ĐỒ (MAP STYLE) ---
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

// --- BIỂU THỨC QUY ĐỊNH MÀU SẮC PHÂN LOẠI LOẠI ĐẤT ---
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
// 2. XỬ LÝ LOGIC BẢN ĐỒ VÀ HÀNH CHÍNH (PROVINCE)
// ==========================================

let currentGeoData = null;

/**
 * Chọn phường/xã và tỉnh từ tọa độ click trên bản đồ
 */
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

 await loadThuaDatFromSheet(map);
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

/**
 * Tải dữ liệu ranh giới tỉnh khi chọn từ dropdown
 */
async function loadProvinceData(provinceId, map) {
 const phuongSelect = document.getElementById('phuongFilter');
 phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>';
 hideThuaDat(map);

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

/**
 * Khởi tạo và gắn sự kiện cho bộ lọc dropdown
 */
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
 hideThuaDat(map);
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
 
 await loadThuaDatFromSheet(map);

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
