// ==========================================
// QUẢN LÝ LỚP BẢN ĐỒ QUY HOẠCH
// ==========================================

function initQuyHoachLayer(map) {
    if (!map) return;

    // 1. Thêm nguồn dữ liệu (Source) dạng raster tiles quy hoạch
    if (!map.getSource('quy-hoach-source')) {
        map.addSource('quy-hoach-source', {
            type: 'raster',
            tiles: [
                'https://r4gmiynxmeobj.vcdn.cloud/ca-mau-2030/14/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: 'Quy hoạch Cà Mau'
        });

        // 2. Thêm lớp hiển thị (Layer) lên bản đồ
        // Đặt phía sau lớp 'sheet-thua-dat-fill' (nếu có) để lớp quy hoạch nằm dưới lớp thửa đất
        const targetLayer = map.getLayer('sheet-thua-dat-fill') ? 'sheet-thua-dat-fill' : undefined;

        map.addLayer({
            id: 'quy-hoach-layer',
            type: 'raster',
            source: 'quy-hoach-source',
            paint: {
                'raster-opacity': 0.7 // Độ trong suốt của lớp quy hoạch (0 -> 1)
            }
        }, targetLayer);
    }
}

// Hàm bật/tắt (Toggle) hiển thị lớp quy hoạch
function toggleQuyHoach() {
    const map = window.currentMapInstance;
    if (!map) return;

    const layerId = 'quy-hoach-layer';
    if (map.getLayer(layerId)) {
        const currentVisibility = map.getLayoutProperty(layerId, 'visibility');
        const newVisibility = (currentVisibility === 'none') ? 'visible' : 'none';
        
        map.setLayoutProperty(layerId, 'visibility', newVisibility);
        
        // Cập nhật lại trạng thái text trên nút bấm nếu có
        const btn = document.getElementById('toggleQuyHoachBtn');
        if (btn) {
            btn.innerText = (newVisibility === 'visible') ? 'Tắt Quy hoạch' : 'Bật Quy hoạch';
        }
    }
}
