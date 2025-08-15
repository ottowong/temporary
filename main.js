// Minimal window with Start button
const win = document.createElement('div');
win.style.position = 'fixed';
win.style.top = '20px';
win.style.left = '20px';
win.style.background = '#fff';
win.style.border = '1px solid #ccc';
win.style.padding = '20px';
win.style.zIndex = 9999;

const btn = document.createElement('button');
btn.textContent = 'Start';
btn.onclick = () => {
  // Hardcoded values for region, pixel, color, and token
  const regionX = 1011, regionY = 701;
  const pixelX = 3421, pixelY = 1494;
  const color = 5; // Example color index
  const token = '0.FWTifE-Qygi3GD7yLmquZoQ3NKayeUPCfA9DCVFnAg8LMp_TtdSgAAHkx4IIhCe8YGd8TmTj9Ga-NyEYn-w72HtE2Sq64hzGXvj7Tz7Eho_570W7YbhMxhaNQA-cD-_0yef2hz28NizzEx_SxJJPc8dolgdDODp04S38OQszqbrkvL4KHNN8FqwjlOWpU0sN-NCKp4jTok-o0UZJVzB8ZWAb0zOsH353kf-kg8zGJgoOY2esTKWXve_hqhCgHPSYOjz0a0h6KNL83vBQezihIeYcPyIQbPh-XC1qWRyNlMBBhhfElpQFhXR___WF-YzXN0ibfzh9yq8no-Nmnpp6Ac_1vlqHCIsXU9sOFqKJcpPzdooNF2zY69HCElqC7ye9hviae9jolhZsdooYSTfG_VN6Ypm_s1Y84bqkWduQ51Nhgwb8siafQk6MlgsyNa0NRK5bPUeyIhixK6c4OqhFQ0y58zGP2iwVBkmWzagsHzjujp81KWHAVrRU6wlHe5OpvMp-5xdOTFOsW_6vD_DQlo_1P63GY6lvOkOIYrqjB2bRe7m2-9ZWOJJsx0kKxTkywFd2R8_klZMZ73_6lAI9H4OHEEY3MRis-ep6qCvHFYRFWAie01LToR-Wlafjol8V5iZ1eeX3CVpnuhavmD7EnqP5o2JiMVjJaBTck1nhUTsilUAKisRvaMpKryyHgE-KRQEb0Nkm_1P0afzX3H8uwv_47_AopHkrLEorljYTpJpjd1uAhb8UTrxTYyzmnfbKgsM-2Y_iJlqJe55XeQymfg20jT2sjbEccLIR9T1FT1Ar7cUuz2qSJiiZHB-TU61qso-7W6fq8LaHD6_jTcYdMFkK2Qc8hhiZ_Fn0blwjIzQuAQvqvdZ-5iKgN_aefctFKUXz_I5RpXAuc3l1y3VXLQ.lKGb33EAlzLlMgfp51xT6A.e38fe19fe746bcaabe9116ad14f94477aa5a79f13f21fab7207d476c38923c9d';

  fetch(`https://backend.wplace.live/s0/pixel/${regionX}/${regionY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    credentials: 'include',
    body: JSON.stringify({
      coords: [pixelX, pixelY],
      colors: [color],
      t: token
    })
  })
    .then(r => r.json())
    .then(data => alert('Painted: ' + (data?.painted === 1 ? 'Success' : 'Failed')))
    .catch(e => alert('Error: ' + e));
};

win.appendChild(btn);
document.body.appendChild(win);
