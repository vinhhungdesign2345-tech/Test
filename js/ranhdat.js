// ==========================================
// TÍNH NĂNG HIỂN THỊ SƠ ĐỒ RANH ĐẤT VÀ TỌA ĐỘ CÁC GÓC
// ==========================================

function openRanhDatPopup(parcelId) {
    const feature = window._currentParcelFeature;
    if (!feature || !feature.geometry) {
        alert("Không tìm thấy dữ liệu hình học của thửa đất!");
        return;
    }

    // Tạo khung Modal hiển thị popup nếu chưa có
    let modal = document.getElementById('ranh-dat-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'ranh-dat-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center;
            z-index: 10000; font-family: Arial, sans-serif;
        `;
        modal.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; width: 550px; max-width: 90%; box-shadow: 0 4px 15px rgba(0,0,0,0.3); position: relative;">
                <button onclick="document.getElementById('ranh-dat-modal').style.display='none'" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 20px; cursor: pointer; font-weight: bold;">&times;</button>
                <h3 style="margin-top: 0; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Sơ Đồ Ranh Đất & Tọa Độ Các Góc</h3>
                <div id="ranh-dat-content" style="text-align: center; margin-top: 15px;"></div>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        modal.style.display = 'flex';
    }

    const contentEl = document.getElementById('ranh-dat-content');
    
    // Lấy danh sách tọa độ vòng ngoài cùng của thửa đất (Polygon)
    const coords = feature.geometry.coordinates[0]; 
    if (!coords || coords.length === 0) {
        contentEl.innerHTML = "<p>Không có dữ liệu tọa độ ranh.</p>";
        return;
    }

    // Tính toán giới hạn (Bounding Box) để co giãn hình vẽ SVG vừa khung hình
    let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
    coords.forEach(pt => {
        const lng = pt[0], lat = pt[1];
        if (lng < minLng) minLng = lng;
        if (lng > maxLng) maxLng = lng;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
    });

    const svgWidth = 500;
    const svgHeight = 350;
    const padding = 50;
    const drawWidth = svgWidth - padding * 2;
    const drawHeight = svgHeight - padding * 2;

    const lngSpan = maxLng - minLng || 0.00001;
    const latSpan = maxLat - minLat || 0.00001;

    // Chuyển đổi tọa độ địa lý sang tọa độ hiển thị trên khung SVG (đảo ngược trục Y của SVG)
    const pointsTransformed = coords.map(pt => {
        const lng = pt[0], lat = pt[1];
        const x = padding + ((lng - minLng) / lngSpan) * drawWidth;
        const y = svgHeight - (padding + ((lat - minLat) / latSpan) * drawHeight);
        return { x, y, lat: lat.toFixed(4), lng: lng.toFixed(4) };
    });

    const pointsStr = pointsTransformed.map(p => `${p.x},${p.y}`).join(' ');

    // Tạo mã SVG vẽ hình thửa đất thu nhỏ và nhãn tọa độ tại mỗi góc
    let svgHTML = `<svg width="${svgWidth}" height="${svgHeight}" style="background: #f9f9f9; border: 1px solid #ccc; border-radius: 4px;">`;
    
    // Vẽ nền thửa đất
    svgHTML += `<polygon points="${pointsStr}" fill="rgba(0, 180, 216, 0.3)" stroke="#0077b6" stroke-width="2" />`;

    // Vẽ các nút tròn tại đỉnh và text tọa độ dạng 9.1234, 105.1234
    pointsTransformed.forEach((p, index) => {
        // Bỏ qua điểm khép vòng cuối nếu trùng với điểm đầu tiên
        if (index === pointsTransformed.length - 1 && p.x === pointsTransformed[0].x && p.y === pointsTransformed[0].y) return;
        
        svgHTML += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#d90429" stroke="#fff" stroke-width="1.5" />`;
        svgHTML += `<text x="${p.x + 6}" y="${p.y - 4}" font-size="10px" fill="#333" font-weight="bold">${p.lat}, ${p.lng}</text>`;
    });

    svgHTML += `</svg>`;
    contentEl.innerHTML = svgHTML;
}

// Đăng ký hàm toàn cục để gọi từ link trong popup bản đồ
window._openRanhDat = openRanhDatPopup;
