// ==========================================
// TẤT CẢ LOGIC QUY HOẠCH - GÓI GỌN TRONG 1 FILE NÀY
// ==========================================

// 1. Tự động lắng nghe sự kiện load của bản đồ (nếu map đã có) hoặc khởi tạo khi bản đồ sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
    // Đợi khi map instance đã được khởi tạo xong xuôi bên map.js
    const checkMapInterval = setInterval(() => {
        // Kiểm tra xem biến map toàn cục đã tồn tại chưa
        if (typeof map !== 'undefined' && map) {
            clearInterval(checkMapInterval);
            
            // Tiến hành khởi tạo lớp quy hoạch luôn
            initQuyHoachLayer(map);
            
            // Tự động tìm nút bấm trên giao diện và gắn sự kiện click luôn
            const quyHoachBtn = document.getElementById('toggleQuyHoachBtn');
            if (quyHoachBtn) {
                quyHoachBtn.onclick = toggleQuyHoach;
            }
        }
    }, 100);
});

// Hàm khởi tạo source và layer quy hoạch
function initQuyHoachLayer(mapInstance) {
    if (!mapInstance) return;

    if (!mapInstance.getSource('quy-hoach-source')) {
        mapInstance.addSource('quy-hoach-source', {
            type: 'raster',
            tiles: [
                'https://r4gmiynxmeobj.vcdn.cloud/ca-mau-2030/14/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: 'Quy hoạch Cà Mau'
        });

        const targetLayer = mapInstance.getLayer('sheet-thua-dat-fill') ? 'sheet-thua-dat-fill' : undefined;

        mapInstance.addLayer({
            id: 'quy-hoach-layer',
            type: 'raster',
            source: 'quy-hoach-source',
            paint: {
                'raster-opacity': 0.7
            }
        }, targetLayer);
    }
}

// Hàm bật/tắt hiển thị lớp quy hoạch
function toggleQuyHoach() {
    if (typeof map === 'undefined' || !map) return;

    const layerId = 'quy-hoach-layer';
    if (map.getLayer(layerId)) {
        const currentVisibility = map.getLayoutProperty(layerId, 'visibility');
        const newVisibility = (currentVisibility === 'none') ? 'visible' : 'none';
        
        map.setLayoutProperty(layerId, 'visibility', newVisibility);
        
        const btn = document.getElementById('toggleQuyHoachBtn');
        if (btn) {
            btn.innerText = (newVisibility === 'visible') ? 'Tắt Quy hoạch' : 'Bật Quy hoạch';
        }
    }
}
