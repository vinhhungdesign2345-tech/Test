// ==========================================
// QUẢN LÝ LỚP BẢN ĐỒ QUY HOẠCH
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const checkInterval = setInterval(() => {
        let targetMap = null;

        // Quét tìm thực thể bản đồ MapLibre thực sự (có hàm getSource)
        for (let key in window) {
            try {
                const obj = window[key];
                if (obj && typeof obj.getSource === 'function' && typeof obj.addLayer === 'function') {
                    targetMap = obj;
                    break;
                }
            } catch (e) {}
        }

        if (targetMap) {
            clearInterval(checkInterval);
            initQuyHoachLayer(targetMap);
            
            const btn = document.getElementById('toggleQuyHoachBtn');
            if (btn) {
                btn.onclick = function() {
                    toggleQuyHoachDirect(targetMap);
                };
            }
        }
    }, 100);
});

function initQuyHoachLayer(m) {
    if (!m || typeof m.getSource !== 'function') return;

    if (!m.getSource('quy-hoach-source')) {
        m.addSource('quy-hoach-source', {
            type: 'raster',
            tiles: ['https://r4gmiynxmeobj.vcdn.cloud/ca-mau-2030/14/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: 'Quy hoạch Cà Mau'
        });

        const targetLayer = m.getLayer('sheet-thua-dat-fill') ? 'sheet-thua-dat-fill' : undefined;

        m.addLayer({
            id: 'quy-hoach-layer',
            type: 'raster',
            source: 'quy-hoach-source',
            paint: { 'raster-opacity': 0.7 }
        }, targetLayer);
    }
}

function toggleQuyHoachDirect(m) {
    if (!m || typeof m.getLayer !== 'function') return;
    const layerId = 'quy-hoach-layer';
    
    if (m.getLayer(layerId)) {
        const currentVisibility = m.getLayoutProperty(layerId, 'visibility');
        const newVisibility = (currentVisibility === 'none') ? 'visible' : 'none';
        
        m.setLayoutProperty(layerId, 'visibility', newVisibility);
        
        const btn = document.getElementById('toggleQuyHoachBtn');
        if (btn) {
            btn.innerText = (newVisibility === 'visible') ? 'Tắt Quy hoạch' : 'Bật Quy hoạch';
        }
    }
}
