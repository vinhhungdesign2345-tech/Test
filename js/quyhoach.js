// ==========================================
// QUẢN LÝ LỚP BẢN ĐỒ QUY HOẠCH (TỰ BẮT MAP)
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const checkInterval = setInterval(() => {
        const targetMap = window.map || window.currentMapInstance || (typeof map !== 'undefined' ? map : null);
        
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
    if (!m) return;
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
    if (!m) return;
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
