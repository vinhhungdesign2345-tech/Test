// ==========================================
// config.js//
1. CẤU HÌNH HỆ THỐNG VÀ BẢN ĐỒ
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
    'version': 8, // Phiên bản chuẩn của MapLibre/Mapbox Style Specification (phiên bản 8)
    
 // --- KHAI BÁO CÁC NGUỒN DỮ LIỆU (SOURCES) CHO BẢN ĐỒ ---
    'sources': {
        // 1. Nguồn ảnh vệ tinh kết hợp nhãn giao thông từ Google Maps
        'google-satellite': {
            'type': 'raster', // Định dạng dữ liệu dạng ảnh lưới (raster tiles)
            'tiles': ['https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'], // Đường dẫn mẫu lấy mảnh ảnh bản đồ vệ tinh của Google
            'tileSize': 256 // Kích thước tiêu chuẩn của mỗi mảnh ảnh (tile) là 256x256 pixel
        },
        
        // 2. Nguồn ảnh bản đồ đường phố thông thường từ OpenStreetMap (OSM)
        'osm-map': { 
            'type': 'raster', // Định dạng dữ liệu dạng ảnh lưới (raster tiles)
            'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], // Đường dẫn lấy mảnh bản đồ từ máy chủ OpenStreetMap
            'tileSize': 256, // Kích thước tiêu chuẩn của mỗi mảnh ảnh là 256x256 pixel
            'attribution': '&copy; OpenStreetMap contributors' // Dòng thông báo bản quyền tác giả dữ liệu theo quy định của OSM
        },
        
        // 3. Nguồn dữ liệu không gian chứa hạ tầng mạng lưới điện (tỉnh Cà Mau)
        'ha-tang-dien-source': {
            'type': 'geojson', // Kiểu dữ liệu không gian định dạng chuẩn GeoJSON
            'data': './geojson/Ca-Mau-ha-tang-dien.json' // Đường dẫn tệp chứa tọa độ các đối tượng hạ tầng điện
        }
    },

 // --- KHAI BÁO CÁC LỚP HIỂN THỊ (LAYERS) XẾP THEO THỨ TỪ TỪ DƯỚI LÊN TRÊN ---
    'layers': [
        // Lớp 1: Hiển thị bản đồ nền ảnh vệ tinh Google (đặt ở dưới cùng)
        {
            'id': 'google-satellite-layer',
            'type': 'raster',
            'source': 'google-satellite', // Gắn với nguồn 'google-satellite' đã định nghĩa ở trên
            'minzoom': 0, // Cấp độ phóng to tối thiểu hiển thị lớp này (từ cấp 0)
            'maxzoom': 22  // Cấp độ phóng to tối đa hiển thị lớp này (đến cấp 22)
        },
        
        // Lớp 2: Hiển thị bản đồ đường phố OpenStreetMap (mặc định cấu hình ẩn)
        {
            'id': 'osm-layer', 
            'type': 'raster',
            'source': 'osm-map', // Gắn với nguồn 'osm-map'
            'layout': { 'visibility': 'none' }, // Thuộc tính hiển thị mặc định là ẩn ('none'), bật lên khi cần dùng nền bản đồ đường phố
            'minzoom': 0, 
            'maxzoom': 22
        },
        
        // Lớp 3: Hiển thị các đối tượng dạng đường thẳng/đường gấp khúc (LineString) của hệ thống điện
        {
            'id': 'ha-tang-dien-line',
            'type': 'line', // Kiểu hiển thị đối tượng dạng đường (Line)
            'source': 'ha-tang-dien-source', // Lấy dữ liệu từ nguồn hạ tầng điện Cà Mau
            'filter': ['==', '$type', 'LineString'], // Bộ lọc chỉ chọn các đối tượng hình học có kiểu là đường (đường dây điện)
            'minzoom': 0, 
            'maxzoom': 22,
            'paint': {
                'line-color': '#ffcc00', // Màu sắc đường dây điện là màu vàng cam (#ffcc00)
                'line-width': 1,         // Độ dày nét vẽ đường dây là 1 pixel
                'line-opacity': 0.5      // Độ trong suốt của đường dây là 50% (0.5) cho đỡ rối mắt
            }
        },
        
        // Lớp 4: Hiển thị các đối tượng dạng điểm chấm tròn (Point) như trạm điện, cột điện
        {
            'id': 'ha-tang-dien-points',
            'type': 'circle', // Kiểu hiển thị đối tượng hình học dạng điểm chấm tròn (Circle)
            'source': 'ha-tang-dien-source', // Lấy dữ liệu từ nguồn hạ tầng điện Cà Mau
            'filter': ['==', '$type', 'Point'], // Bộ lọc chỉ chọn các đối tượng hình học có kiểu là điểm (cột điện/trạm)
            'minzoom': 14, // Giới hạn chỉ bắt đầu hiện các điểm cột điện khi người dùng phóng to bản đồ từ cấp độ 14 trở lên
            'maxzoom': 22,
            'paint': {
                'circle-radius': 4,            // Bán kính chấm tròn điểm điện là 4 pixel
                'circle-color': '#ff0000',     // Màu sắc tô bên trong chấm tròn là màu đỏ (#ff0000)
                'circle-stroke-width': 1,      // Độ dày đường viền ngoài chấm tròn là 1 pixel
                'circle-stroke-color': '#ffffff' // Màu viền ngoài chấm tròn là màu trắng (#ffffff) để nổi bật
            }
            }
            ]
            },

// --- CÁC THÔNG SỐ KHỞI TẠO VÀ GIAO DIỆN BỔ SUNG ---
           MAP_CENTER: [105.15, 9.18], // Tọa độ trung tâm khởi tạo ban đầu của bản đồ theo định dạng [Kinh độ, Vĩ độ] tại Cà Mau
           MAP_ZOOM: 12,               // Mức độ phóng to (zoom level) khởi tạo mặc định ban đầu là cấp 12
           FILL_COLOR: '#00ffcc',      // Màu sắc tô nền mặc định cho đối tượng thửa đất khi được chọn (xanh ngọc sáng)
           FILL_OPACITY: 0.3,          // Độ trong suốt của lớp màu nền thửa đất là 30% (0.3)
           OUTLINE_COLOR: '#ffffff'    // Màu sắc đường viền ranh giới thửa đất mặc định là màu trắng
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

// Biến toàn cục lưu trữ dữ liệu GeoJSON hiện tại của tỉnh đang được tải
let currentGeoData = null;

/**
 * Xử lý sự kiện khi người dùng click trực tiếp lên một điểm bất kỳ trên bản đồ:
 * - Tự động xác định xem điểm đó thuộc tỉnh nào và phường/xã nào.
 * - Cập nhật giao diện dropdown, nạp dữ liệu ranh giới và dữ liệu thửa đất tương ứng.
 */
async function selectPhuongFromPoint(lng, lat, map) {
    const tinhSelect = document.getElementById('tinhFilter');
    const phuongSelect = document.getElementById('phuongFilter');
    
    // Tạo đối tượng điểm không gian (Turf.js point) từ tọa độ người dùng vừa click [Kinh độ, Vĩ độ]
    const point = turf.point([lng, lat]); 

    let matchedProvince = null;
    let matchedPhuong = null;
    let targetGeoData = null;

    // Duyệt qua từng tỉnh trong danh sách cấu hình để tìm xem điểm click nằm trong ranh giới tỉnh nào
    for (const provinceInfo of CONFIG.PROVINCES) {
        const geoData = await fetchGeoDataByUrl(provinceInfo.file);
        
        if (geoData && geoData.features) {
            for (const feature of geoData.features) {
                // Kiểm tra xem điểm click có nằm bên trong vùng đa giác (Polygon/MultiPolygon) của ranh giới không
                if (turf.booleanPointInPolygon(point, feature)) {
                    matchedProvince = provinceInfo;
                    targetGeoData = geoData;
                    
                    // Trích xuất tên phường/xã từ thuộc tính của đối tượng bản đồ
                    const p = feature.properties || {};
                    matchedPhuong = p.name || p.dia_chi || p.Phuong || p.Xa || p.NAME_2 || p.NAME_3;
                    break;
                }
            }
        }
        if (matchedProvince) break; // Thoát vòng lặp ngay khi tìm thấy tỉnh chứa điểm click
    }

    // Nếu tìm thấy tỉnh và dữ liệu ranh giới tương ứng
    if (matchedProvince && targetGeoData) {
        // Nếu tỉnh được chọn khác với tỉnh hiện tại trên giao diện thì tiến hành cập nhật
        if (tinhSelect.value !== matchedProvince.id) {
            tinhSelect.value = matchedProvince.id;
            currentGeoData = targetGeoData;

            // Kiểm tra xem nguồn bản đồ 'thua-dat-src' đã tồn tại trên bản đồ chưa
            if (map.getSource('thua-dat-src')) {
                map.getSource('thua-dat-src').setData(targetGeoData); // Cập nhật dữ liệu mới nếu đã có sẵn nguồn
            } else {
                // Nếu chưa có, thêm mới nguồn dữ liệu GeoJSON ranh giới vào bản đồ
                map.addSource('thua-dat-src', { type: 'geojson', data: targetGeoData });
                // Thêm lớp phủ tô nền (fill) cho ranh giới (mặc định trong suốt)
                map.addLayer({
                    'id': 'thua-dat-layer',
                    'type': 'fill',
                    'source': 'thua-dat-src',
                    'paint': { 'fill-color': '#000000', 'fill-opacity': 0 }
                });
                // Thêm lớp hiển thị đường viền ranh giới màu đỏ
                map.addLayer({
                    'id': 'thua-dat-line-layer',
                    'type': 'line',
                    'source': 'thua-dat-src',
                    'paint': { 'line-color': '#ff0000', 'line-width': 2 }
                });
            }

            // Làm mới và mở khóa ô chọn Phường/Xã
            phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>';
            phuongSelect.disabled = false;
            
            // Thu thập danh sách các phường/xã có trong dữ liệu tỉnh để đưa vào dropdown
            const phuongSet = new Set();
            targetGeoData.features.forEach(f => {
                const p = f.properties || {};
                const val = p.name || p.dia_chi || p.Phuong || p.Quan || p.Xa || p.NAME_2 || p.NAME_3;
                if (val) phuongSet.add(String(val).trim());
            });
            
            // Sắp xếp tên phường/xã theo thứ tự chữ cái và thêm vào thẻ <select>
            Array.from(phuongSet).sort().forEach(pName => {
                const opt = document.createElement('option');
                opt.value = pName;
                opt.textContent = pName;
                phuongSelect.appendChild(opt);
            });

            // Tải thêm dữ liệu thửa đất liên quan từ Google Sheets
            await loadThuaDatFromSheet(map);
        }

        // Nếu xác định được tên phường/xã cụ thể từ điểm click, tiến hành lọc hiển thị
        if (matchedPhuong && phuongSelect) {
            phuongSelect.value = matchedPhuong;
            
            // Biểu thức lọc ranh giới hành chính đúng theo tên phường/xã vừa chọn
            const filterExpr = [
                'any',
                ['==', ['get', 'name'], matchedPhuong],
                ['==', ['get', 'dia_chi'], matchedPhuong],
                ['==', ['get', 'Phuong'], matchedPhuong],
                ['==', ['get', 'Xa'], matchedPhuong]
            ];
            
            // Biểu thức lọc thửa đất từ Google Sheets theo địa chỉ phường/xã
            const sheetFilterExpr = ['==', ['get', 'Địa Chỉ Thửa Đất'], matchedPhuong];

            // Áp dụng bộ lọc lên các lớp bản đồ tương ứng
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', filterExpr);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', filterExpr);
            if (map.getLayer('sheet-thua-dat-fill')) map.setFilter('sheet-thua-dat-fill', sheetFilterExpr);
            if (map.getLayer('sheet-thua-dat-line')) map.setFilter('sheet-thua-dat-line', sheetFilterExpr);
        }
    }
}

/**
 * Tải toàn bộ dữ liệu ranh giới của một Tỉnh/Thành phố khi người dùng chọn thủ công từ dropdown Tỉnh
 */
async function loadProvinceData(provinceId, map) {
    const phuongSelect = document.getElementById('phuongFilter');
    phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>';
    hideThuaDat(map); // Ẩn dữ liệu thửa đất cũ khi đổi tỉnh

    // Nếu không chọn tỉnh nào (chọn dòng mặc định), vô hiệu hóa ô chọn phường/xã và kết thúc
    if (!provinceId) {
        phuongSelect.disabled = true;
        currentGeoData = null;
        return;
    }

    // Tìm thông tin tỉnh dựa vào ID cấu hình
    const provinceInfo = CONFIG.PROVINCES.find(p => p.id === provinceId);
    if (!provinceInfo) return;

    // Tải tệp GeoJSON tương ứng của tỉnh
    const geoData = await fetchGeoDataByUrl(provinceInfo.file); 
    if (!geoData || !geoData.features) {
        alert("Chưa tải được file GeoJSON!");
        return;
    }

    currentGeoData = geoData;
    const phuongSet = new Set();

    // Trích xuất danh sách tất cả các phường/xã có trong tệp GeoJSON của tỉnh
    geoData.features.forEach(f => {
        const p = f.properties || {};
        const val = p.name || p.dia_chi || p.Phuong || p.Quan || p.Xa || p.NAME_2 || p.NAME_3;
        if (val) phuongSet.add(String(val).trim());
    });

    // Cập nhật hoặc thêm nguồn dữ liệu bản đồ ranh giới tỉnh
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

    // Thiết lập hiển thị toàn bộ ranh giới các đơn vị trong tỉnh (bỏ qua các đối tượng dạng điểm)
    const showAllProvinceFilter = ['!=', '$type', 'Point']; 
    if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', showAllProvinceFilter);
    if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', showAllProvinceFilter);

    // Tự động dịch chuyển khung nhìn bản đồ (zoom/fit) ôm trọn phạm vi ranh giới tỉnh vừa chọn
    try {
        const bbox = turf.bbox(geoData);
        map.fitBounds(bbox, { padding: 50, maxZoom: 15, duration: 300 }); 
    } catch (err) {
        console.error("Lỗi tự động zoom khung tỉnh:", err);
    }

    // Mở khóa và đổ dữ liệu danh sách Phường/Xã vào ô dropdown tương ứng
    phuongSelect.disabled = false;
    Array.from(phuongSet).sort().forEach(pName => {
        const opt = document.createElement('option');
        opt.value = pName;
        opt.textContent = pName;
        phuongSelect.appendChild(opt);
    });
}

/**
 * Khởi tạo giao diện các bộ lọc (Dropdown Tỉnh/Thành phố và Phường/Xã) và gắn các sự kiện tương tác
 */
function initFilter(map) {
    const tinhSelect = document.getElementById('tinhFilter');
    const phuongSelect = document.getElementById('phuongFilter');

    // Đổ danh sách toàn bộ các Tỉnh/Thành phố từ file cấu hình vào thẻ chọn <select> Tỉnh
    tinhSelect.innerHTML = '<option value="">-- Tỉnh / TP --</option>';
    CONFIG.PROVINCES.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        tinhSelect.appendChild(opt);
    });

    // Lắng nghe sự kiện khi người dùng thay đổi lựa chọn Tỉnh/Thành phố
    tinhSelect.addEventListener('change', (e) => {
        loadProvinceData(e.target.value, map);
    });

    // Lắng nghe sự kiện khi người dùng thay đổi lựa chọn Phường/Xã
    phuongSelect.addEventListener('change', async (e) => {
        const selectedPhuong = e.target.value;

        // Nếu người dùng chọn lại dòng trống (bỏ chọn phường/xã)
        if (!selectedPhuong) {
            hideThuaDat(map);
            const showAllProvinceFilter = ['!=', '$type', 'Point'];
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', showAllProvinceFilter);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', showAllProvinceFilter);
        } else {
            // Thiết lập bộ lọc hiển thị ranh giới đúng theo Phường/Xã được chọn
            const filterExpr = [
                'any',
                ['==', ['get', 'name'], selectedPhuong],
                ['==', ['get', 'dia_chi'], selectedPhuong],
                ['==', ['get', 'Phuong'], selectedPhuong],
                ['==', ['get', 'Xa'], selectedPhuong]
            ];

            const sheetFilterExpr = ['==', ['get', 'Địa Chỉ Thửa Đất'], selectedPhuong];

            // Cập nhật bộ lọc lên bản đồ
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', filterExpr);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', filterExpr);
            
            // Tải dữ liệu thửa đất từ Google Sheets cho khu vực được chọn
            await loadThuaDatFromSheet(map);

            if (map.getLayer('sheet-thua-dat-fill')) map.setLayer('sheet-thua-dat-fill', sheetFilterExpr);
            if (map.getLayer('sheet-thua-dat-line')) map.setLayer('sheet-thua-dat-line', sheetFilterExpr);

            // Tự động zoom camera bản đồ tập trung vào ranh giới của phường/xã vừa chọn
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
