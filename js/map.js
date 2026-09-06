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

    SHEET_DATA_URL: 'https://script.google.com/macros/s/AKfycbz87dcUkndM5w5BeFqUFYJt8JDEcPu98IH5mbzNdov_6eXTNUEhIiknFQ9P7H2c0ZQE/exec', // Đường dẫn API Google Apps Script để lấy dữ liệu thuộc tính thửa đất

    MAP_STYLE: {
        'version': 8,      // Phiên bản chuẩn của MapLibre/Mapbox Style Specification (luôn là 8)
        'sources': {       // Khai báo các nguồn dữ liệu bản đồ (Raster tiles, GeoJSON...)
            'google-satellite': {
                'type': 'raster', // Định dạng kiểu lưới ảnh (raster)
                'tiles': ['https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'], // Link nguồn ảnh bản đồ vệ tinh kết hợp nhãn giao thông của Google
                'tileSize': 256   // Kích thước tiêu chuẩn của mỗi ô tile (pixel)
            },
            'osm-map': { 
                'type': 'raster', // Định dạng kiểu lưới ảnh
                'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], // Link nguồn bản đồ nền OpenStreetMap thông thường
                'tileSize': 256,  // Kích thước tile (pixel)
                'attribution': '&copy; OpenStreetMap contributors' // Dòng bản quyền tác giả hiển thị ở góc bản đồ
            },
            'ha-tang-dien-source': {
                'type': 'geojson', // Định dạng dữ liệu dạng không gian GeoJSON
                'data': './geojson/Ca-Mau-ha-tang-dien.json' // Đường dẫn tệp chứa dữ liệu hạ tầng điện tỉnh Cà Mau
            }
        },
        'layers': [        // Danh sách các lớp hiển thị (thứ tự từ dưới lên trên)
            {
                'id': 'google-satellite-layer', // ID định danh lớp vệ tinh Google
                'type': 'raster',                // Loại lớp hiển thị dạng ảnh raster
                'source': 'google-satellite',    // Lấy nguồn dữ liệu từ 'google-satellite' ở trên
                'minzoom': 0, 'maxzoom': 22      // Khoảng mức thu phóng (zoom level) cho phép hiển thị lớp này (từ 0 đến 22)
            },
            {
                'id': 'osm-layer', 
                'type': 'raster',                // Lớp ảnh bản đồ nền OpenStreetMap
                'source': 'osm-map',             // Lấy nguồn dữ liệu từ 'osm-map'
                'layout': { 'visibility': 'none' }, // Thiết lập mặc định: ẩn lớp này khi khởi động ('none')
                'minzoom': 0, 'maxzoom': 22      // Khoảng mức thu phóng hiển thị
            },
            {
                'id': 'ha-tang-dien-line',       // ID lớp hiển thị đường dây điện (đường / LineString)
                'type': 'line',                  // Kiểu hiển thị dạng đường kẻ
                'source': 'ha-tang-dien-source', // Lấy nguồn từ dữ liệu hạ tầng điện
                'filter': ['==', '$type', 'LineString'], // Bộ lọc: chỉ lấy các đối tượng có kiểu hình học là đường (LineString)
                'minzoom': 0, 'maxzoom': 22,     // Khoảng mức thu phóng hiển thị
                'paint': {                       // Thuộc tính trang trí đường
                    'line-color': '#ffcc00',     // Màu sắc đường dây điện (màu vàng)
                    'line-width': 1,             // Độ dày nét đường (1 pixel)
                    'line-opacity': 0.5          // Độ trong suốt của đường (50%)
                }
            },
            {
                'id': 'ha-tang-dien-points',     // ID lớp hiển thị trạm biến áp/cột điện (điểm / Point)
                'type': 'circle',                // Kiểu hiển thị dạng hình tròn
                'source': 'ha-tang-dien-source', // Lấy nguồn từ dữ liệu hạ tầng điện
                'filter': ['==', '$type', 'Point'], // Bộ lọc: chỉ lấy các đối tượng có kiểu là điểm (Point)
                'minzoom': 14,                   // Chỉ bắt đầu hiển thị các điểm này khi zoom từ cấp độ 14 trở lên (tránh rối mắt khi nhìn xa)
                'maxzoom': 22,                   // Mức zoom tối đa
                'paint': {                       // Thuộc tính trang trí điểm tròn
                    'circle-radius': 4,          // Bán kính hình tròn (4 pixel)
                    'circle-color': '#ff0000',   // Màu bên trong hình tròn (màu đỏ)
                    'circle-stroke-width': 1,    // Độ rộng đường viền bao quanh hình tròn (1 pixel)
                    'circle-stroke-color': '#ffffff' // Màu viền bao quanh (màu trắng)
                }
            }
        ]
    },

    MAP_CENTER: [105.15, 9.18], // Tọa độ tâm mặc định khi mở bản đồ [Kinh độ (Longitude), Vĩ độ (Latitude)] - khu vực Cà Mau
    MAP_ZOOM: 12,               // Mức độ zoom (thu phóng) ban đầu của bản đồ (số càng lớn nhìn càng gần chi tiết)
    FILL_COLOR: '#00ffcc',      // Màu tô nền mặc định cho các thửa đất khi chưa phân loại (Xanh ngọc sáng)
    FILL_OPACITY: 0.3,          // Độ trong suốt của lớp màu tô nền thửa đất (30% mờ ảo để thấy ảnh vệ tinh bên dưới)
    OUTLINE_COLOR: '#ffffff'    // Màu sắc đường viền ranh giới của các thửa đất (Màu trắng)
};

const COLOR_MATCH_EXPRESSION = [
    'match',                    // Biểu thức điều kiện so khớp (giống câu lệnh switch-case trong lập trình)
    ['get', 'Loại Đất'],        // Lấy giá trị trường thuộc tính 'Loại Đất' của từng thửa đất để kiểm tra
    'Đất ở tại đô thị', '#e063ce',          // Nếu là 'Đất ở tại đô thị' -> tô màu hồng tím (#e063ce)
    'Đất ở tại nông thôn', '#cf99c7',       // Nếu là 'Đất ở tại nông thôn' -> tô màu tím nhạt (#cf99c7)
    'Đất nuôi trồng thuỷ sản', '#00b4d8',    // Nếu là 'Đất nuôi trồng thuỷ sản' -> tô màu xanh dương (#00b4d8)
    'Đất nuôi trồng thủy sản', '#00b4d8',    // (Dự phòng trường hợp viết sai chính tả chữ 'thủy') -> tô màu xanh dương (#00b4d8)
    'Đất trồng cây lâu năm', '#519e05',     // Nếu là 'Đất trồng cây lâu năm' -> tô màu xanh lá (#519e05)
    'Đất trồng cây hàng năm khác', '#519e05', // Nếu là 'Đất trồng cây hàng năm khác' -> tô màu xanh lá (#519e05)
    'Đất trồng lúa', '#f5e753',              // Nếu là 'Đất trồng lúa' -> tô màu vàng lúa chín (#f5e753)
    'Đất chuyên trồng lúa nước', '#ffea00',  // Nếu là 'Đất chuyên trồng lúa nước' -> tô màu vàng đậm (#ffea00)
    '#c2b9ab'                                // Màu mặc định (fallback): Dùng cho các loại đất khác không nằm trong danh sách trên (màu xám cát)
];

// ==========================================
// 1A. HÀM PHỤ TRỢ TẢI FILE GEOJSON AN TOÀN
// ==========================================
async function fetchGeoDataByUrl(url) {
    try {
        const response = await fetch(url); // Gửi yêu cầu HTTP để tải nội dung file từ đường dẫn URL
        if (!response.ok) throw new Error(`Không thể tải file: ${url}`); // Kiểm tra nếu kết nối thất bại hoặc file không tồn tại thì báo lỗi
        return await response.json(); // Chuyển đổi dữ liệu nhận được thành định dạng JSON và trả về
    } catch (error) {
        console.error("Lỗi tải GeoJSON:", error); // Ghi log lỗi ra cửa sổ console nếu quá trình tải gặp sự cố
        return null; // Trả về giá trị null nếu tải thất bại
    }
}

// ==========================================
// 2. XỬ LÝ LOGIC BẢN ĐỒ VÀ HÀNH CHÍNH
// ==========================================
let currentGeoData = null; // Biến toàn cục lưu trữ dữ liệu GeoJSON hiện tại đang được nạp

async function selectPhuongFromPoint(lng, lat, map) {
    const tinhSelect = document.getElementById('tinhFilter'); // Lấy phần tử thẻ <select> chọn Tỉnh/TP trên giao diện
    const phuongSelect = document.getElementById('phuongFilter'); // Lấy phần tử thẻ <select> chọn Phường/Xã trên giao diện
    const point = turf.point([lng, lat]); // Tạo một đối tượng điểm hình học từ kinh độ (lng) và vĩ độ (lat) bằng Turf.js

    let matchedProvince = null; // Biến lưu thông tin tỉnh/thành khớp với điểm click
    let matchedPhuong = null; // Biến lưu tên phường/xã khớp với điểm click
    let targetGeoData = null; // Biến lưu dữ liệu GeoJSON của tỉnh đó

    // Duyệt qua danh sách các tỉnh được cấu hình trong CONFIG.PROVINCES để tìm xem điểm click nằm ở tỉnh nào
    for (const provinceInfo of CONFIG.PROVINCES) {
        const geoData = await fetchGeoDataByUrl(provinceInfo.file); // Tải file GeoJSON của từng tỉnh
        if (geoData && geoData.features) {
            for (const feature of geoData.features) {
                // Kiểm tra xem điểm tọa độ (point) có nằm bên trong vùng hình học (polygon) của thửa đất/xã không
                if (turf.booleanPointInPolygon(point, feature)) {
                    matchedProvince = provinceInfo; // Lưu lại tỉnh khớp
                    targetGeoData = geoData; // Lưu lại dữ liệu GeoJSON tương ứng
                    const p = feature.properties || {}; // Lấy danh sách các thuộc tính của đối tượng không gian
                    // Trích xuất tên phường/xã từ nhiều tên trường dữ liệu khác nhau (phòng trường hợp cấu trúc file khác nhau)
                    matchedPhuong = p.name || p.dia_chi || p.Phuong || p.Xa || p.NAME_2 || p.NAME_3;
                    break; // Thoát vòng lặp khi đã tìm thấy
                }
            }
        }
        if (matchedProvince) break; // Thoát khỏi vòng lặp tỉnh nếu đã tìm thấy khớp
    }

    // Nếu tìm thấy tỉnh và dữ liệu bản đồ tương ứng
    if (matchedProvince && targetGeoData) {
        if (tinhSelect.value !== matchedProvince.id) {
            tinhSelect.value = matchedProvince.id; // Cập nhật giá trị hiển thị trên thẻ chọn Tỉnh
            currentGeoData = targetGeoData; // Cập nhật biến dữ liệu GeoJSON hiện tại

            // Kiểm tra nếu nguồn dữ liệu bản đồ 'thua-dat-src' đã tồn tại thì cập nhật dữ liệu mới
            if (map.getSource('thua-dat-src')) {
                map.getSource('thua-dat-src').setData(targetGeoData);
            } else {
                // Nếu chưa có thì thêm nguồn dữ liệu (source) mới vào bản đồ
                map.addSource('thua-dat-src', { type: 'geojson', data: targetGeoData });
                // Thêm lớp phủ màu nền (fill) cho thửa đất
                map.addLayer({
                    'id': 'thua-dat-layer',
                    'type': 'fill',
                    'source': 'thua-dat-src',
                    'paint': { 'fill-color': '#000000', 'fill-opacity': 0 } // Màu nền đen, độ mờ bằng 0 (trong suốt)
                });
                // Thêm lớp hiển thị đường viền ranh giới thửa đất
                map.addLayer({
                    'id': 'thua-dat-line-layer',
                    'type': 'line',
                    'source': 'thua-dat-src',
                    'paint': { 'line-color': '#ff0000', 'line-width': 2 } // Viền màu đỏ, độ dày 2 pixel
                });
            }

            phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>'; // Đặt lại danh sách chọn Phường/Xã ban đầu
            phuongSelect.disabled = false; // Mở khóa cho phép người dùng chọn Phường/Xã
            
            const phuongSet = new Set(); // Dùng Set để lưu danh sách các phường/xã độc lập (không bị trùng lặp)
            targetGeoData.features.forEach(f => {
                const p = f.properties || {};
                const val = p.name || p.dia_chi || p.Phuong || p.Quan || p.Xa || p.NAME_2 || p.NAME_3;
                if (val) phuongSet.add(String(val).trim()); // Thêm tên phường/xã vào tập hợp sau khi đã cắt khoảng trắng thừa
            });
            
            // Sắp xếp tên các phường theo thứ tự bảng chữ cái và thêm vào thẻ <select> trên giao diện
            Array.from(phuongSet).sort().forEach(pName => {
                const opt = document.createElement('option');
                opt.value = pName;
                opt.textContent = pName;
                phuongSelect.appendChild(opt);
            });

            // Nếu hàm tải dữ liệu thửa đất từ Google Sheets tồn tại thì gọi thực thi
            if (typeof loadThuaDatFromSheet === 'function') {
                await loadThuaDatFromSheet(map);
            }
        }

        // Nếu xác định được tên Phường/Xã cụ thể từ điểm click
        if (matchedPhuong && phuongSelect) {
            phuongSelect.value = matchedPhuong; // Gán giá trị Phường/Xã lên giao diện
            // Tạo biểu thức lọc bản đồ MapLibre để tìm các đối tượng có tên khớp với phường được chọn
            const filterExpr = [
                'any',
                ['==', ['get', 'name'], matchedPhuong],
                ['==', ['get', 'dia_chi'], matchedPhuong],
                ['==', ['get', 'Phuong'], matchedPhuong],
                ['==', ['get', 'Xa'], matchedPhuong]
            ];
            const sheetFilterExpr = ['==', ['get', 'Địa Chỉ Thửa Đất'], matchedPhuong]; // Biểu thức lọc cho dữ liệu từ Google Sheet

            // Áp dụng bộ lọc cho các lớp bản đồ GeoJSON và lớp dữ liệu Google Sheet
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', filterExpr);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', filterExpr);
            if (map.getLayer('sheet-thua-dat-fill')) map.setFilter('sheet-thua-dat-fill', sheetFilterExpr);
            if (map.getLayer('sheet-thua-dat-line')) map.setFilter('sheet-thua-dat-line', sheetFilterExpr);
        }
    }
}

async function loadProvinceData(provinceId, map) {
    const phuongSelect = document.getElementById('phuongFilter'); // Lấy thẻ chọn Phường/Xã
    phuongSelect.innerHTML = '<option value="">-- Phường / Xã --</option>'; // Làm trống danh sách phường khi đổi tỉnh mới
    if (typeof hideThuaDat === 'function') hideThuaDat(map); // Gọi hàm ẩn các thửa đất cũ nếu có

    // Nếu không có ID tỉnh nào được chọn (trường hợp chọn dòng mặc định)
    if (!provinceId) {
        phuongSelect.disabled = true; // Khóa thẻ chọn Phường/Xã lại
        currentGeoData = null; // Xóa dữ liệu GeoJSON hiện tại
        return;
    }

    const provinceInfo = CONFIG.PROVINCES.find(p => p.id === provinceId); // Tìm thông tin cấu hình của tỉnh dựa vào ID
    if (!provinceInfo) return;

    const geoData = await fetchGeoDataByUrl(provinceInfo.file); // Tải file GeoJSON của tỉnh đó
    if (!geoData || !geoData.features) {
        alert("Chưa tải được file GeoJSON!"); // Cảnh báo nếu tải file lỗi hoặc không có cấu trúc features
        return;
    }

    currentGeoData = geoData; // Lưu trữ dữ liệu GeoJSON mới tải
    const phuongSet = new Set(); // Tạo tập hợp tên phường/xã không trùng lặp
    geoData.features.forEach(f => {
        const p = f.properties || {};
        const val = p.name || p.dia_chi || p.Phuong || p.Quan || p.Xa || p.NAME_2 || p.NAME_3;
        if (val) phuongSet.add(String(val).trim());
    });

    // Cập nhật hoặc thêm mới nguồn dữ liệu (source) và các lớp hiển thị (layers) lên bản đồ
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

    const showAllProvinceFilter = ['!=', '$type', 'Point']; // Bộ lọc hiển thị toàn bộ đối tượng (trừ kiểu Point) trong phạm vi tỉnh
    if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', showAllProvinceFilter);
    if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', showAllProvinceFilter);

    // Tự động thu phóng (zoom) bản đồ bao trọn phạm vi (bounding box) của toàn bộ tỉnh vừa tải
    try {
        const bbox = turf.bbox(geoData); // Tính toán khung bao (Bounding Box) của dữ liệu GeoJSON
        map.fitBounds(bbox, { padding: 50, maxZoom: 15, duration: 300 }); // Dịch chuyển camera bản đồ đến khung bao với khoảng đệm 50px trong 300ms
    } catch (err) {
        console.error("Lỗi tự động zoom khung tỉnh:", err);
    }

    phuongSelect.disabled = false; // Mở khóa thẻ chọn Phường/Xã
    // Thêm các tùy chọn Phường/Xã đã sắp xếp vào thẻ <select> trên giao diện
    Array.from(phuongSet).sort().forEach(pName => {
        const opt = document.createElement('option');
        opt.value = pName;
        opt.textContent = pName;
        phuongSelect.appendChild(opt);
    });
}

function initFilter(map) {
    const tinhSelect = document.getElementById('tinhFilter'); // Lấy thành phần chọn Tỉnh/TP trên giao diện
    const phuongSelect = document.getElementById('phuongFilter'); // Lấy thành phần chọn Phường/Xã trên giao diện

    tinhSelect.innerHTML = '<option value="">-- Tỉnh / TP --</option>'; // Đặt tiêu đề mặc định cho danh sách Tỉnh/TP
    CONFIG.PROVINCES.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;     // Gán giá trị ID của tỉnh cho option
        opt.textContent = p.name; // Gán tên hiển thị của tỉnh cho option
        tinhSelect.appendChild(opt); // Đưa option vào thẻ select Tỉnh/TP
    });

    // Lắng nghe sự kiện thay đổi lựa chọn Tỉnh/TP để tải dữ liệu tương ứng
    tinhSelect.addEventListener('change', (e) => {
        loadProvinceData(e.target.value, map);
    });

    // Lắng nghe sự kiện thay đổi lựa chọn Phường/Xã trên giao diện
    phuongSelect.addEventListener('change', async (e) => {
        const selectedPhuong = e.target.value; // Lấy tên phường/xã được chọn

        // Nếu người dùng không chọn phường nào (chọn dòng mặc định)
        if (!selectedPhuong) {
            if (typeof hideThuaDat === 'function') hideThuaDat(map); // Ẩn dữ liệu thửa đất
            const showAllProvinceFilter = ['!=', '$type', 'Point'];
            // Hiển thị lại toàn bộ ranh giới của tỉnh
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', showAllProvinceFilter);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', showAllProvinceFilter);
        } else {
            // Nếu có chọn một Phường/Xã cụ thể, thiết lập biểu thức lọc dữ liệu theo tên phường
            const filterExpr = [
                'any',
                ['==', ['get', 'name'], selectedPhuong],
                ['==', ['get', 'dia_chi'], selectedPhuong],
                ['==', ['get', 'Phuong'], selectedPhuong],
                ['==', ['get', 'Xa'], selectedPhuong]
            ];

            const sheetFilterExpr = ['==', ['get', 'Địa Chỉ Thửa Đất'], selectedPhuong]; // Biểu thức lọc cho dữ liệu từ Google Sheet theo địa chỉ

            // Áp dụng bộ lọc cho các layer bản đồ
            if (map.getLayer('thua-dat-layer')) map.setFilter('thua-dat-layer', filterExpr);
            if (map.getLayer('thua-dat-line-layer')) map.setFilter('thua-dat-line-layer', filterExpr);
            
            // Gọi hàm tải dữ liệu từ Google Sheet nếu tồn tại
            if (typeof loadThuaDatFromSheet === 'function') {
                await loadThuaDatFromSheet(map);
            }

            if (map.getLayer('sheet-thua-dat-fill')) map.setLayer('sheet-thua-dat-fill', sheetFilterExpr);
            if (map.getLayer('sheet-thua-dat-line')) map.setLayer('sheet-thua-dat-line', sheetFilterExpr);

            // Nếu đang có dữ liệu GeoJSON, tiến hành lọc các thửa thuộc phường đó để zoom bản đồ lại gần
            if (currentGeoData) {
                const filtered = currentGeoData.features.filter(f => {
                    const p = f.properties || {};
                    return p.name === selectedPhuong || p.dia_chi === selectedPhuong || p.Phuong === selectedPhuong || p.Xa === selectedPhuong;
                });

                if (filtered.length > 0) {
                    const fc = turf.featureCollection(filtered); // Tạo tập hợp các tính năng đã lọc
                    const bbox = turf.bbox(fc); // Tính toán khung bao của riêng phường/xã đó
                    map.fitBounds(bbox, { padding: 50, duration: 300 }); // Zoom bản đồ khung bao vừa tìm với thời gian chuyển động 300ms
                }
            }
        }
    });
}

// ==========================================
// 3. QUẢN LÝ BẢN ĐỒ MAPLIBRE VÀ TƯƠNG TÁC
// ==========================================
let activeMarkers = [];          // Mảng lưu trữ danh sách các marker (nhãn hiển thị trên bản đồ như độ dài cạnh, tọa độ góc)
window.selectedThuaDatId = null; // Biến toàn cục lưu ID của thửa đất đang được chọn

function clearLengthMarkers() {                       // Hàm xóa toàn bộ các nhãn độ dài cạnh và tọa độ
    activeMarkers.forEach(marker => marker.remove()); // Xóa từng marker khỏi bản đồ MapLibre
    activeMarkers = [];                               // Làm rỗng mảng quản lý marker
}

// Hàm định dạng số theo chuẩn Việt Nam (phân tách hàng nghìn, thay dấu phẩy/chấm)
function formatNumberVN(val) {
    if (val === null || val === undefined || val === '' || val === '-') return '-'; // Trả về dấu gạch ngang nếu giá trị rỗng
    const stringVal = String(val).replace(',', '.'); // Chuyển đổi thành chuỗi và chuẩn hóa dấu phẩy thành dấu chấm
    const num = parseFloat(stringVal); // Ép kiểu sang số thực
    if (isNaN(num)) return val; // Nếu không phải là số thì trả về nguyên bản
    return num.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 2 }); // Định dạng số kiểu VN (tối đa 2 chữ số thập phân)
}

// Hàm đóng bảng thông tin thửa đất (Panel) và dọn dẹp các trạng thái liên quan
function closeParcelPanel() {
    const panel = document.getElementById('parcel-info-panel'); // Lấy phần tử khung panel thông tin trên giao diện
    if (panel) panel.style.display = 'none'; // Ẩn panel đi
    window.selectedThuaDatId = null; // Xóa ID thửa đất đang chọn
    clearLengthMarkers(); // Xóa các nhãn trên bản đồ

    const mapInstance = window.currentMapInstance; // Lấy thể hiện bản đồ hiện tại
    if (mapInstance) {
        // Đặt lại bộ lọc tô sáng (highlight) ranh giới thửa đất về rỗng (tắt tô sáng)
        if (mapInstance.getLayer('sheet-thua-dat-highlight-fill')) {
            mapInstance.setFilter('sheet-thua-dat-highlight-fill', ['==', ['get', 'ID Thửa Đất'], '']);
        }
        if (mapInstance.getLayer('sheet-thua-dat-highlight-line')) {
            mapInstance.setFilter('sheet-thua-dat-highlight-line', ['==', ['get', 'ID Thửa Đất'], '']);
        }
        // Xóa dữ liệu nguồn hiển thị độ dài cạnh
        if (mapInstance.getSource('parcel-dimensions-source')) {
            mapInstance.getSource('parcel-dimensions-source').setData({ type: 'FeatureCollection', features: [] });
        }
    }
}

// Hàm khởi tạo bản đồ MapLibre và các sự kiện tương tác
function initMap() {
    const map = new maplibregl.Map({
        container: 'map', // ID của phần tử HTML chứa bản đồ (thường là <div id="map"></div>)
        style: CONFIG.MAP_STYLE, // Cấu hình giao diện và lớp bản đồ lấy từ biến CONFIG
        center: CONFIG.MAP_CENTER, // Tọa độ tâm mặc định ban đầu [Kinh độ, Vĩ độ]
        zoom: CONFIG.MAP_ZOOM,     // Mức độ phóng to (zoom) ban đầu
        maxTileCacheSize: 50,      // Giới hạn số lượng ô tile lưu trong bộ nhớ đệm
        
        // Khóa hoàn toàn tính năng xoay và chế độ góc nhìn 3D nghiêng
        dragRotate: false,         // Không cho phép kéo giữ chuột phải để xoay bản đồ
        pitchWithRotate: false,    // Không cho phép thay đổi góc nghiêng (pitch) khi xoay
        touchZoomRotate: true      // Cho phép thao tác chạm cảm ứng phóng to/thu nhỏ
    });

    // Vô hiệu hóa hẳn tính năng xoay bằng cử chỉ xoay hai ngón tay trên thiết bị cảm ứng
    map.touchZoomRotate.disableRotation();

    window.currentMapInstance = map; // Lưu thể hiện bản đồ vào biến toàn cục để dùng ở nơi khác

    // Khởi tạo điều khiển định vị vị trí người dùng (Geolocate Control)
    const geolocate = new maplibregl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }, // Cấu hình độ chính xác cao, thời gian chờ tối đa 20 giây
        trackUserLocation: true, // Bật chế độ theo dõi vị trí người dùng di chuyển thực tế
        showUserHeading: true    // Hiển thị hướng quay của thiết bị người dùng trên bản đồ
    });
    
    map.addControl(geolocate, 'top-right'); // Đưa nút định vị vào góc trên bên phải bản đồ

    // Lắng nghe sự kiện khi định vị thành công vị trí người dùng
    geolocate.on('geolocate', async (position) => {
        const lng = position.coords.longitude; // Lấy kinh độ hiện tại của người dùng
        const lat = position.coords.latitude; // Lấy vĩ độ hiện tại của người dùng
        // Nếu hàm xác định xã/phường từ điểm tồn tại thì gọi thực thi để tự động lọc hành chính
        if (typeof selectPhuongFromPoint === 'function') {
            await selectPhuongFromPoint(lng, lat, map);
        }
    });

    // Sự kiện xảy ra khi bản đồ đã tải xong hoàn toàn cấu trúc cơ bản
    map.on('load', () => {
        const satLayer = 'google-satellite-layer'; // ID lớp bản đồ vệ tinh Google
        const osmLayer = 'osm-layer'; // ID lớp bản đồ nền OpenStreetMap

        map.setLayoutProperty(satLayer, 'visibility', 'visible'); // Mặc định bật hiển thị lớp vệ tinh
        map.setLayoutProperty(osmLayer, 'visibility', 'none');    // Mặc định ẩn lớp OSM

        // Thiết lập nút bấm chuyển đổi qua lại giữa bản đồ Vệ tinh và bản đồ OSM
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

        // Thiết lập thanh trượt (slider) điều chỉnh độ mờ (opacity) của lớp thửa đất
        const opacitySlider = document.getElementById('opacitySlider');
        const opacityValueLabel = document.getElementById('opacityValue');

        if (opacitySlider) {
            opacitySlider.oninput = function() {
                const val = parseFloat(this.value); // Lấy giá trị số thực từ thanh trượt
                if (opacityValueLabel) opacityValueLabel.innerText = val; // Hiển thị số liệu trực quan ra giao diện
                // Cập nhật độ mờ cho lớp nền thửa đất từ Google Sheets
                if (map.getLayer('sheet-thua-dat-fill')) {
                    map.setPaintProperty('sheet-thua-dat-fill', 'fill-opacity', val);
                }
                // Cập nhật độ mờ cao hơn một chút cho lớp thửa đang được chọn (highlight)
                if (map.getLayer('sheet-thua-dat-highlight-fill')) {
                    map.setPaintProperty('sheet-thua-dat-highlight-fill', 'fill-opacity', Math.min(val + 0.2, 1.0));
                }
            };
        }

        // Thêm nguồn dữ liệu và lớp hiển thị kích thước cạnh thửa đất nếu chưa có sẵn
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
                    'circle-radius': 4,                   // Bán kính điểm mốc cạnh (4 pixel)
                    'circle-color': '#ffffff',            // Màu trắng bên trong điểm mốc
                    'circle-stroke-width': 1.5,           // Độ dày viền điểm mốc (1.5 pixel)
                    'circle-stroke-color': '#000000'      // Màu viền đen cho điểm mốc
                }
            });
        }

        // Khởi động các tính năng phụ trợ đo đạc và đánh dấu điểm nếu các hàm tương ứng tồn tại
        if (typeof initMeasureFeature === 'function') initMeasureFeature(map);
        if (typeof initMarkFeature === 'function') initMarkFeature(map);

        initFilter(map); // Khởi tạo bộ lọc hành chính (Tỉnh, Phường)
        if (typeof initThuaDatSearch === 'function') initThuaDatSearch(map); // Khởi tạo tính năng tìm kiếm thửa đất
    });

    const sheetLayers = ['sheet-thua-dat-fill', 'sheet-thua-dat-line']; // Danh sách các lớp tương ứng với thửa đất tải từ Google Sheets
    let isFeatureClicked = false; // Biến cờ kiểm tra xem người dùng có click trúng đối tượng thửa đất hay không

    // Lắng nghe sự kiện click chuột vào từng lớp thửa đất trên bản đồ
    sheetLayers.forEach(layerId => {
        map.on('click', layerId, (e) => {
            // Nếu đang trong chế độ đo đạc hoặc chế độ đánh dấu thì bỏ qua sự kiện click thửa đất
            if (typeof isMeasuring !== 'undefined' && isMeasuring || (typeof isMarkingMode !== 'undefined' && isMarkingMode)) return; 
            if (!e.features || !e.features.length) return; // Nếu không có đối tượng nào được bấm trúng thì dừng lại
            isFeatureClicked = true; // Đánh dấu là đã click trúng thửa đất

            const selectedFeature = e.features[0]; // Lấy thửa đất đầu tiên bị click trúng
            window._currentParcelFeature = selectedFeature; // Lưu tính năng hình học thửa đất vào biến toàn cục
            const rawProps = selectedFeature.properties || {}; // Lấy danh sách thuộc tính của thửa đất
            window._currentParcelRawProps = rawProps;

            const parcelId = rawProps['ID Thửa Đất'] || rawProps['id'] || ''; // Lấy mã ID định danh thửa đất
            window.selectedThuaDatId = parcelId;

            clearLengthMarkers(); // Xóa các nhãn cũ đang có
            
            // Kiểm tra và khởi tạo trạng thái ẩn/hiện nhãn nếu chưa có (mặc định là false - ẩn)
            if (window._isParcelLabelsVisible === undefined) {
                window._isParcelLabelsVisible = false;
            }

            // Định nghĩa hàm chuyển đổi trạng thái ẩn/hiện nhãn toàn cục
            window.toggleParcelLabels = function() {
                window._isParcelLabelsVisible = !window._isParcelLabelsVisible; // Đảo ngược trạng thái true/false
                const btn = document.getElementById('toggle-labels-btn');
                if (btn) {
                    btn.innerText = window._isParcelLabelsVisible ? 'Ẩn nhãn' : 'Hiện nhãn'; // Thay đổi chữ trên nút bấm tương ứng
                }
                
                // Ẩn hoặc hiện tất cả các marker nhãn độ dài cạnh và tọa độ góc hiện tại
                activeMarkers.forEach(marker => {
                    const el = marker.getElement();
                    if (el) {
                        el.style.display = window._isParcelLabelsVisible ? 'block' : 'none';
                    }
                });

                // Ẩn hoặc hiện lớp đường bao nét độ dài cạnh trên bản đồ (nếu có layer này)
                if (map.getLayer('parcel-dimensions-line')) {
                    map.setLayoutProperty('parcel-dimensions-line', 'visibility', window._isParcelLabelsVisible ? 'visible' : 'none');
                }
            };

            // ==========================================
            // ĐOẠN CODE TÍNH TOÁN VÀ GHI ĐỘ DÀI CẠNH & TỌA ĐỘ GÓC
            // ==========================================
            if (typeof turf !== 'undefined' && selectedFeature.geometry) {
                try {
                    const lineSegments = turf.lineSegment(selectedFeature);  // Cắt hình học thửa đất thành các phân đoạn đường biên nhỏ bằng thư viện Turf.js
                    const dimensionFeatures = [];

                    // Duyệt qua từng đoạn đường biên cạnh thửa để tính toán chiều dài
                    lineSegments.features.forEach(segment => {
                        const lengthMeters = turf.length(segment, { units: 'meters' });  // Tính chiều dài cạnh theo đơn vị mét
                        // Định dạng hiển thị: Nếu chiều dài từ 10m trở lên lấy 1 chữ số thập phân, dưới 10m lấy 2 chữ số thập phân
                        const formattedLength = lengthMeters >= 10 ? `${lengthMeters.toFixed(1)}m` : `${lengthMeters.toFixed(2)}m`;

                        segment.properties.length = formattedLength;
                        dimensionFeatures.push(segment);

                        const coords = segment.geometry.coordinates;
                        // Tính toán tọa độ điểm chính giữa của cạnh để đặt nhãn tên chiều dài
                        const midCoord = [(coords[0][0] + coords[1][0]) / 2, (coords[0][1] + coords[1][1]) / 2];

                        const el = document.createElement('div');
                        el.style.color = '#ffffff';                  // Màu chữ trắng
                        el.style.fontSize = '12px';                  // Cỡ chữ 12 pixel
                        el.style.fontWeight = 'normal';              // Kiểu chữ thường (không in đậm)
                        el.style.textShadow = '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000';  // Viền bóng đen giúp chữ dễ đọc trên nền vệ tinh
                        el.style.whiteSpace = 'nowrap';              // Không cho phép xuống dòng văn bản tự động
                        el.innerText = formattedLength;              // Gán nội dung là chiều dài cạnh
                        
                        // ĐIỀU CHỈNH TRẠNG THÁI HIỂN THỊ: 
                        // Dựa vào biến toàn cục để quyết định hiện ('block') hay ẩn ('none') ngay khi tạo
                        el.style.display = window._isParcelLabelsVisible ? 'block' : 'none';

                        const marker = new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat(midCoord).addTo(map);  // Tạo marker gắn nhãn độ dài lên bản đồ
                        activeMarkers.push(marker);  // Lưu marker vào mảng quản lý chung
                    });

                    // Cập nhật dữ liệu vào nguồn hiển thị độ dài cạnh trên bản đồ
                    if (map.getSource('parcel-dimensions-source')) {
                        map.getSource('parcel-dimensions-source').setData({ type: 'FeatureCollection', features: dimensionFeatures });
                    }

                    // TỌA ĐỘ CÁC GÓC THỬA ĐẤT (G1, G2,...)
                    let polygonCoords = [];
                    if (selectedFeature.geometry.type === 'Polygon') {
                        polygonCoords = selectedFeature.geometry.coordinates[0]; // Lấy danh sách tọa độ vòng ngoài của Polygon
                    } else if (selectedFeature.geometry.type === 'MultiPolygon') {
                        polygonCoords = selectedFeature.geometry.coordinates[0][0]; // Lấy danh sách tọa độ của MultiPolygon
                    }

                    // Nếu có tọa độ góc, tiến hành tạo nhãn hiển thị tọa độ từng góc G1, G2...
                    if (polygonCoords && polygonCoords.length > 0) {
                        const uniqueCoords = polygonCoords.slice(0, polygonCoords.length - 1); // Loại bỏ điểm trùng lặp cuối vòng khép kín

                        uniqueCoords.forEach((coord, index) => {
                            const lng = coord[0].toFixed(4); // Lấy kinh độ, làm tròn 4 chữ số thập phân
                            const lat = coord[1].toFixed(4); // Lấy vĩ độ, làm tròn 4 chữ số thập phân

                            const cornerEl = document.createElement('div');
                            cornerEl.style.color = '#ffffff';
                            cornerEl.style.fontSize = '12px';
                            cornerEl.style.fontWeight = 'normal';        
                            cornerEl.style.textShadow = '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000';
                            cornerEl.style.whiteSpace = 'nowrap';
                            cornerEl.innerHTML = `G${index + 1}:<br>${lat}, ${lng}`; // Tên góc (G1, G2...) nằm hàng trên, tọa độ lat/lng xuống hàng dưới bằng thẻ <br>
                            
                            // ĐIỀU CHỈNH TRẠNG THÁI HIỂN THỊ CHO NHÃN GÓC TƯƠNG TỰ
                            cornerEl.style.display = window._isParcelLabelsVisible ? 'block' : 'none';

                            const cornerMarker = new maplibregl.Marker({ element: cornerEl, anchor: 'top', offset: [0, 5] })
                                .setLngLat(coord)
                                .addTo(map); // Thêm marker tọa độ góc lên bản đồ

                            activeMarkers.push(cornerMarker);
                        });
                    }
                } catch (err) {
                    console.error("Lỗi trong quá trình tính toán độ dài cạnh thửa đất:", err);
                }
            }
            // ==========================================
            // TRÍCH XUẤT THÔNG TIN THUỘC TÍNH THỬA ĐẤT
            // ==========================================
            const soTo = rawProps['Số tờ'] || rawProps['So to'] || '-'; // Lấy thông tin số tờ bản đồ
            const soThua = rawProps['Số thửa'] || rawProps['So thua'] || '-'; // Lấy thông tin số thửa đất
            const rawDienTich = rawProps['Diện tích'] || rawProps['Dien tich'] || rawProps['dien_tich'] || rawProps['DienTich'] || rawProps['DIỆN TÍCH'] || '-';
            const dienTich = formatNumberVN(rawDienTich); // Định dạng diện tích theo kiểu số Việt Nam
            const loaiDat = rawProps['Loại Đất'] || rawProps['Loại Đất:'] || rawProps['Loại đất'] || rawProps['loai_dat'] || '-'; // Lấy loại đất
            const tenChu = rawProps['Tên Chủ'] || rawProps['Tên chủ'] || '-'; // Lấy tên chủ sử dụng đất
            const soDinhDanh = rawProps['Số định danh chủ đất'] || rawProps['Số định danh'] || 'Không có'; // Lấy số định danh cá nhân/CCCD
            
            // Xử lý thông tin hiển thị hoặc nút bấm tại cột ghi chú / Cột N
            const columnNValue = rawProps['Cột N'] || rawProps['cot_n'] || rawProps['Ghi Chú'] || rawProps['Ghi chú'] || '';
            let columnNLinkHTML = '';

            // Nếu có dữ liệu cột N thì hiển thị nút "Xem", ngược lại hiển thị nút "Nhập"
            if (columnNValue && columnNValue.trim() !== '' && columnNValue !== 'Không có') {
                window[`_viewColN_${parcelId}`] = () => openColumnNPopup(parcelId, 'view', columnNValue);
                columnNLinkHTML = `<a href="javascript:void(0);" onclick="window._viewColN_${parcelId}();" style="color: #007bff; text-decoration: underline; font-weight: bold;">Xem</a>`;
            } else {
                window[`_inputColN_${parcelId}`] = () => openColumnNPopup(parcelId, 'input', '');
                columnNLinkHTML = `<a href="javascript:void(0);" onclick="window._inputColN_${parcelId}();" style="color: #d93025; text-decoration: underline; font-weight: bold;">Nhập</a>`;
            }

            // Thiết lập bộ lọc (Filter) để tô sáng thửa đất đang chọn trên bản đồ
            let selectFilter = parcelId ? ['==', ['get', 'ID Thửa Đất'], rawProps['ID Thửa Đất'] || parcelId] : ['==', ['get', 'Tên Chủ'], tenChu];

            if (map.getLayer('sheet-thua-dat-highlight-fill')) map.setFilter('sheet-thua-dat-highlight-fill', selectFilter);
            if (map.getLayer('sheet-thua-dat-highlight-line')) map.setFilter('sheet-thua-dat-highlight-line', selectFilter);

            // 1. Khai báo nội dung HTML chi tiết cho bảng thông tin (Panel)
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
            
            // Gán nội dung thông tin vào khung panel trên giao diện
            if (panelContentEl) panelContentEl.innerHTML = panelContent;
            
            // 2. Hiển thị panel và tự động quét gắn nút "Hiện nhãn" / "Ẩn nhãn" ngay cạnh tiêu đề có sẵn
            if (panelEl) {
                panelEl.style.display = 'block'; // Bật hiển thị khung panel thông tin
                
                // Lọc các thẻ HTML bên trong panel để tìm tiêu đề chính xác
                const allDivs = panelEl.querySelectorAll('div, span, b, h3, h4');
                for (let el of allDivs) {
                    // Tìm đúng thẻ chứa đoạn chữ "THÔNG TIN THỬA ĐẤT" và đảm bảo chưa gắn nút trước đó
                    if (el.innerText && el.innerText.trim() === 'THÔNG TIN THỬA ĐẤT' && !document.getElementById('toggle-labels-btn')) {
                        const btn = document.createElement('button');
                        btn.id = 'toggle-labels-btn';
                        btn.innerText = window._isParcelLabelsVisible ? 'Ẩn nhãn' : 'Hiện nhãn'; // Thay đổi text dựa theo trạng thái hiện tại
                        btn.style.marginLeft = '10px';  // Cách lề trái một chút để tạo khoảng cách với chữ tiêu đề
                        btn.style.padding = '1px 6px';    // Khoảng đệm trong nút bấm
                        btn.style.fontSize = '11px';    // Cỡ chữ nhỏ gọn
                        btn.style.fontWeight = 'bold';  // Chữ in đậm
                        btn.style.cursor = 'pointer';   // Đổi hình con trỏ chuột thành dạng bàn tay khi hover
                        btn.style.backgroundColor = '#f0f0f0'; // Màu nền xám nhạt cho nút
                        btn.style.border = '1px solid #ccc';    // Viền xám nhạt
                        btn.style.borderRadius = '3px';       // Bo góc nhẹ
                        
                        // Gắn sự kiện khi click vào nút sẽ gọi hàm bật/tắt nhãn toàn cục
                        btn.onclick = window.toggleParcelLabels;
                        
                        // Chèn trực tiếp nút bấm vào ngay sau chữ tiêu đề (giúp giữ nguyên nút 'x' đóng popup ở góc phải)
                        el.appendChild(btn);
                        break;
                    }
                }
            }
        });

        // Thiết lập sự kiện trỏ chuột khi di chuyển qua lại trên layer thửa đất
        map.on('mouseenter', layerId, () => map.getCanvas().style.cursor = 'default');
        map.on('mouseleave', layerId, () => map.getCanvas().style.cursor = 'default');
    });

    // Sự kiện click toàn cục trên bản đồ (dùng cho công cụ đo khoảng cách hoặc click ra vùng trống ngoài thửa đất)
    map.on('click', (e) => {
        // Nếu đang bật chế độ đo đạc khoảng cách trên bản đồ
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

        // Nếu click ra vùng trống (không trúng thửa đất nào) thì ẩn panel thông tin đi
        if (!isFeatureClicked) {
            closeParcelPanel(); 
            if (typeof selectPhuongFromPoint === 'function') {
                selectPhuongFromPoint(e.lngLat.lng, e.lngLat.lat, map);
            }
        }
        isFeatureClicked = false; // Đặt lại cờ trạng thái click
    });
}

// Khởi chạy hàm khởi tạo bản đồ khi toàn bộ cấu trúc DOM trang web đã tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', initMap);
