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
  const token = '0.ZTA_5beiUEqJmLkrFduAX1p0aMZcDnlIK-vcQwywpd5-Oa4TY2_EsuZle8lCKQ16KigJQTFn1mSaYIr5csYDpcJfnGEF6X8lKhKjAM5IT77SfecaTd1i5ecHnIxe_zXNZDH5YuP_iTyZ0FyP5S0fGi0I075kSYt13RavF7SY_CXYfQY4s_oH6dVIlZhc7RMsqvQcRG-wjX9QpV7uFTCD0Z_EwSPPLH0idPDtp1yQ_jqjfMs80ufEgsq8a5HUusrv_brf556TQ8oc3umavI1rkxhTtnChDOJkbcnpaSRymzhh0VfDLNKqIlWnVqeRx2HgpnUmsxUN1LTYc7z_BTsAt_S8cIU29lrQnVYYz_qYHd-En3blz7nqdwFE1nc7GJ8KIqzjBtNLJOmIm4Tdrix7yFDz5kfyRuHHnlYTthr4yW54j9HHSFDrg5kYSmC2cAyA8QShIsERY2Go2L4hAQS9hu_cBa_2q13lLnYZtJzSWwMplrFwqyhHUHFTnHDsbqcog4ZUNE5V04C1BUiYZfkSIzgxm6tdzk8fAHJ1yDdbRteMSpr_vKWMDzewEJtzBrvYgZ0cCh_eS0QltJ8j8sps3Eb3Dy-rpF1dM0jSBzLW5RXInKUXNA_5s7RTaZGKJH3RlYHOOoetxM_Se4224MHj1VhZQQKbg9CPYQECbAvuSla7uVt6u73A9_Tknlr443YulnR-Y-dozo7uVDr93EE89VW3l7W_s8OE0GOwxtLNGvZE91FfYj7w-f-y4Yd0SzUzYFbEjHN6FRiCagGX9ILaOfIFTe7sg80nRWywPQzrNDjwtkTNU6b7OsovKBPv6Zlv4c-HumShCeK6fbI0r0wOpGKgyp4oTaCenIjMlvhRKIoGgVPPKU6PcI-YBHgBKtMT-SPqcWJqMtwfMxwhjdFKsg.745v1ai-e_Nro8E9p5mejg.c249c550b40b141b5c732efd743e937041bf4b75632374fdb46c32ebcd8a39b6';

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
