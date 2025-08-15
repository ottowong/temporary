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

btn.onclick = async () => {
  const regionX = 1011, regionY = 701;
  const pixelX = 3421, pixelY = 1494;
  const color = 5;

  try {
    // 1. Request task ID
    const taskResp = await fetch('https://gaming.sadlads.com/turnstile?url=https://wplace.live&sitekey=0x4AAAAAABpqJe8FO0N84q0F');
    const taskData = await taskResp.json();
    const taskId = taskData.task_id;
    console.log('Task ID:', taskId);

    // 2. Poll for token
    let token = null;
    let attempts = 0;
    const maxAttempts = 60; // 60 seconds max

    while (!token && attempts < maxAttempts) {
      attempts++;
      let text = "";

      try {
        await new Promise(r => setTimeout(r, 1000)); // wait 1s
        const resultResp = await fetch(`https://gaming.sadlads.com/result?id=${taskId}`);
        text = await resultResp.text();
        console.log("Poll attempt", attempts, "response:", text);

        if (text === "CAPTCHA_NOT_READY") {
          console.log("CAPTCHA not ready yet, retrying...");
          continue; // keep polling
        }
      } catch (e) {
        console.warn("Fetch failed, retrying...", e);
        continue;
      }

      try {
        const resultData = JSON.parse(text);
        if (resultData.value) {
          token = resultData.value;
        }
      } catch (e) {
        console.warn("Unexpected response, retrying...", text);
      }
    }

    if (!token) {
      alert("Failed to get token after max attempts.");
      return;
    }

    console.log('Got token:', token);

    // 3. Paint pixel
    const paintResp = await fetch(`https://backend.wplace.live/s0/pixel/${regionX}/${regionY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      credentials: 'include',
      body: JSON.stringify({
        coords: [pixelX, pixelY],
        colors: [color],
        t: token
      })
    });
    const paintData = await paintResp.json();
    alert('Painted: ' + (paintData?.painted === 1 ? 'Success' : 'Failed'));

  } catch (err) {
    console.error(err);
    alert('Error: ' + err);
  }
};

win.appendChild(btn);
document.body.appendChild(win);
