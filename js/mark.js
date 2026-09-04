// ==========================================
// js/mark.js - QUẢN LÝ TÍNH NĂNG ĐÁNH DẤU ĐỊA ĐIỂM
// ==========================================

let isMarkingMode = false; // Trạng thái bật/tắt chế độ đánh dấu trên bản đồ
let tempMarker = null;     // Biến lưu trữ icon ghim tạm thời khi người dùng click chọn vị trí
const MARK_API_URL = 'https://script.google.com/macros/s/AKfycbz87dcUkndM5w5BeFqUFYJt8JDEcPu98IH5mbzNdov_6eXTNUEhIiknFQ9P7H2c0ZQE/exec';

// ==========================================
// HÀM KHỞI TẠO TÍNH NĂNG ĐÁNH DẤU
// ==========================================
function initMarkFeature(map) {
  // 1. Tạo nút đánh dấu nằm chung cụm góc trên bên phải (dưới nút định vị)
  const topRightContainer = document.querySelector('.maplibregl-ctrl-top-right');
  
  if (topRightContainer) {
    const markControlDiv = document.createElement('div');
    markControlDiv.className = 'maplibregl-ctrl maplibregl-ctrl-group';
    markControlDiv.innerHTML = `
      <button id="toggleMarkBtn" type="button" title="Bật/Tắt chế độ đánh dấu địa điểm" style="background: white; border: none; cursor: pointer; width: 29px; height: 29px; display: flex; align-items: center; justify-content: center; font-size: 16px;">
        📍
      </button>
    `;
    topRightContainer.appendChild(markControlDiv);

    // XÓA BỎ CLASS MẶC ĐỊNH CỦA MAPLIBRE ĐỂ TRIỆT TIÊU HOÀN TOÀN VIỀN/NỀN TRẮNG DƯ THỪA
    markControlDiv.classList.remove('maplibregl-ctrl-group');

    // Sự kiện click bật/tắt chế độ đánh dấu
    document.getElementById('toggleMarkBtn').onclick = function() {
      isMarkingMode = !isMarkingMode;
      if (isMarkingMode) {
        this.style.background = '#e0f0ff';
        this.style.border = '2px solid #007bff';
        map.getCanvas().style.cursor = 'crosshair';
      } else {
        this.style.background = 'white';
        this.style.border = 'none';
        map.getCanvas().style.cursor = '';
        
        // TẮT CHẾ ĐỘ GHIM: Tự động xóa hộp thoại nhập tên và ghim tạm nếu đang hiển thị
        const oldPopup = document.getElementById('mark-input-popup');
        if (oldPopup) oldPopup.remove();
        if (tempMarker) {
          tempMarker.remove();
          tempMarker = null;
        }
      }
    };
  }

  // 2. Lắng nghe sự kiện click trên bản đồ khi đang bật chế độ đánh dấu
  map.on('click', (e) => {
    if (!isMarkingMode) return;

    const lng = e.lngLat.lng.toFixed(6);
    const lat = e.lngLat.lat.toFixed(6);
    const coordinatesStr = `${lat}, ${lng}`;

    // Xóa ghim tạm cũ nếu có trước khi tạo ghim tạm mới
    if (tempMarker) {
      tempMarker.remove();
      tempMarker = null;
    }

    // Tạo icon ghim tạm thời ngay vị trí vừa click chuột
    const tempEl = document.createElement('div');
    tempEl.innerHTML = '📍';
    tempEl.style.fontSize = '20px';
    tempEl.style.cursor = 'pointer';

    tempMarker = new maplibregl.Marker({ 
      element: tempEl,
      anchor: 'bottom' // Neo chuẩn ngay chân đáy icon 📍
    })
    .setLngLat([e.lngLat.lng, e.lngLat.lat])
    .addTo(map);

    // Hiển thị hộp thoại nhỏ cho phép người dùng nhập tên địa điểm
    openMarkPrompt(coordinatesStr, map, { lng: e.lngLat.lng, lat: e.lngLat.lat });
  });

  // 3. Tải và hiển thị các điểm đánh dấu đã lưu từ tab "Đánh dấu" trên Google Sheet lên bản đồ
  loadSavedMarkers(map);
}

// ==========================================
// HÀM MỞ HỘP THOẠI NHẬP TÊN ĐỊA ĐIỂM (TẠO MỚI)
// ==========================================
function openMarkPrompt(coordinatesStr, map, lngLatObj) {
  // Xóa hộp thoại cũ nếu đang tồn tại trên giao diện
  const oldPopup = document.getElementById('mark-input-popup');
  if (oldPopup) oldPopup.remove();

  const popupDiv = document.createElement('div');
  popupDiv.id = 'mark-input-popup';
  
  // CẤU HÌNH GIAO DIỆN HỘP THOẠI POPUP (Dưới đáy màn hình)
  popupDiv.style.cssText = `
    position: fixed;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    padding: 4px 6px;
    border-radius: 6px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    z-index: 100;
    width: auto;
    white-space: nowrap;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    gap: 6px;
  `;
  
  popupDiv.innerHTML = `
    <input type="text" id="placeNameInput" placeholder="Tên địa điểm..." style="width: 110px; padding: 2px 4px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 3px; font-size: 11px;" autofocus>
    <span style="font-size: 11px; color: #666; font-family: monospace;" title="Tọa độ">${coordinatesStr}</span>
    <button id="saveMarkBtn" style="padding: 2px 6px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">Lưu</button>
    <button id="cancelMarkBtn" style="padding: 2px 6px; background: #ccc; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">Hủy</button>
  `;
  document.body.appendChild(popupDiv);

  // Sự kiện nút Hủy
  document.getElementById('cancelMarkBtn').onclick = () => {
    popupDiv.remove();
    if (tempMarker) {
      tempMarker.remove();
      tempMarker = null;
    }
  };
  
  // Sự kiện nút Lưu đánh dấu mới
  document.getElementById('saveMarkBtn').onclick = async () => {
    const placeName = document.getElementById('placeNameInput').value.trim();
    if (!placeName) {
      alert('Vui lòng nhập tên địa điểm!');
      return;
    }

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

    const payload = {
      action: 'addMark', 
      tenDiaDiem: placeName,
      toaDo: coordinatesStr,
      ngayCapNhat: formattedDate
    };

    const saveBtn = document.getElementById('saveMarkBtn');

    try {
      saveBtn.innerText = 'Lưu...';
      saveBtn.disabled = true;

      await fetch(MARK_API_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      alert('Đã lưu địa điểm về Google Sheet thành công!');
      popupDiv.remove();
      
      if (tempMarker) {
        tempMarker.remove();
        tempMarker = null;
      }
      
      loadSavedMarkers(map);

    } catch (err) {
      console.error('Lỗi khi lưu điểm đánh dấu:', err);
      alert('Có lỗi xảy ra khi lưu dữ liệu!');
    } finally {
      saveBtn.innerText = 'Lưu';
      saveBtn.disabled = false;
    }
  };
}

// ==========================================
// HÀM TẢI DANH SÁCH ĐIỂM TỪ TAB "Đánh dấu" HIỂN THỊ LÊN BẢN ĐỒ
// ==========================================
async function loadSavedMarkers(map) {
  try {
    const apiGetUrl = `${MARK_API_URL}?sheet=danhdau`;
    const response = await fetch(apiGetUrl);
    const data = await response.json(); 
    
    if (!Array.isArray(data)) return;

    data.forEach(item => {
      if (!item.toaDo) return;
      
      const parts = item.toaDo.split(',').map(s => parseFloat(s.trim()));
      if (parts.length !== 2) return;
      const [lat, lng] = parts;

      if (isNaN(lat) || isNaN(lng)) return;

      // Tạo icon ghim trên bản đồ
      const el = document.createElement('div');
      el.innerHTML = '📍';              
      el.style.fontSize = '20px';          
      el.style.cursor = 'pointer';         

      let markerInstance = null;

      // ==========================================
      // HÀM MỞ THANH ĐIỀU KHIỂN DƯỚI ĐÁY (ĐỒNG BỘ GIỐNG HÌNH 1)
      // ==========================================
      const openBottomControl = (isEditMode = false) => {
        // Xóa popup cũ nếu đang mở
        const oldPopup = document.getElementById('mark-input-popup');
        if (oldPopup) oldPopup.remove();

        const controlDiv = document.createElement('div');
        controlDiv.id = 'mark-input-popup';
        
        // Kích thước và vị trí cố định ở đáy màn hình giống hệt hộp thoại tạo điểm mới
        controlDiv.style.cssText = `
          position: fixed;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          padding: 4px 6px;
          border-radius: 6px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          z-index: 100;
          width: auto;
          white-space: nowrap;
          font-family: sans-serif;
          display: flex;
          align-items: center;
          gap: 6px;
        `;

        if (!isEditMode) {
          // GIAO DIỆN XEM / SỬA / XÓA (Khi click vào ghim đã lưu)
          controlDiv.innerHTML = `
            <input type="text" id="placeNameInput" value="${item.tenDiaDiem || ''}" placeholder="Tên địa điểm..." style="width: 110px; padding: 2px 4px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 3px; font-size: 11px;">
            <span style="font-size: 11px; color: #666; font-family: monospace;" title="Tọa độ">${item.toaDo}</span>
            <button id="saveEditMarkBtn" style="padding: 2px 6px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">Lưu</button>
            <button id="deleteMarkBtn" style="padding: 2px 6px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">Xóa</button>
            <button id="cancelMarkBtn" style="padding: 2px 6px; background: #ccc; border: none; border-radius: 3px; cursor: pointer; font-size: 11px;">Đóng</button>
          `;
          document.body.appendChild(controlDiv);

          // Focus vào ô input tên
          const inputEl = controlDiv.querySelector('#placeNameInput');
          inputEl.focus();

          // Nút Đóng
          controlDiv.querySelector('#cancelMarkBtn').onclick = () => {
            controlDiv.remove();
          };

          // Nút Lưu (Cập nhật tên mới)
          controlDiv.querySelector('#saveEditMarkBtn').onclick = async () => {
            const newName = inputEl.value.trim();
            const saveBtn = controlDiv.querySelector('#saveEditMarkBtn');
            
            const payload = { 
              action: 'updateMark', 
              toaDo: item.toaDo,     
              tenDiaDiem: newName    
            };

            try {
              saveBtn.innerText = 'Đang lưu...';
              saveBtn.disabled = true;

              await fetch(MARK_API_URL, {
                method: 'POST',
                mode: 'no-cors', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              });

              controlDiv.remove();
              setTimeout(() => loadSavedMarkers(map), 1000);

            } catch (err) {
              console.error('Lỗi khi cập nhật tên địa điểm:', err);
              alert('Có lỗi xảy ra khi lưu dữ liệu!');
              saveBtn.innerText = 'Lưu';
              saveBtn.disabled = false;
            }
          };

          // Nút Xóa điểm đánh dấu
          controlDiv.querySelector('#deleteMarkBtn').onclick = async () => {
            if (!confirm(`Bạn có chắc muốn xóa địa điểm "${item.tenDiaDiem || item.toaDo}" này không?`)) return;

            controlDiv.remove();
            if (markerInstance) markerInstance.remove();

            const payload = {
              action: 'deleteMark', 
              toaDo: item.toaDo
            };

            try {
              await fetch(MARK_API_URL, {
                method: 'POST',
                mode: 'no-cors', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              });

              setTimeout(() => loadSavedMarkers(map), 1000);
            } catch (err) {
              console.error('Lỗi khi xóa điểm đánh dấu:', err);
            }
          };
        }
      };

      // Tạo đối tượng Marker và bắt sự kiện click trực tiếp để mở thanh điều khiển dưới đáy
      markerInstance = new maplibregl.Marker({ 
        element: el,         
        anchor: 'bottom'     
      })
        .setLngLat([lng, lat])      
        .addTo(map);            

      // Lắng nghe sự kiện click trên icon ghim đã lưu để mở popup dưới đáy
      el.addEventListener('click', (e) => {
        e.stopPropagation(); // Ngăn sự kiện click lan ra bản đồ
        openBottomControl(false);
      });
    });
  } catch (err) {
    console.error('Không thể tải danh sách điểm đánh dấu từ Google Sheet:', err);
  }
}
