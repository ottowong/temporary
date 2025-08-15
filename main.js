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
  const token = '0.9_YoLlSuNgJQ6y3_enGtdA5DiyS5ikp5ZPIUWg0oVnyR88uOLva8Wr1RzQfiOMKLpKpz8AAdulWrpI92jPfV0AHbSNeLMubRB7bDz0pRAmuEMh1uMuGQoymUASNLL-UhKQmUFx_mSQlblBL9_Ni5LNqy6-z70XyJsZH_0kdWxY6nZMgxhhkCCDhG1fXB8J1uN0eS8M0cVRxeEHv23GAKq7I6xWp9cC0TYGU2-l3FxBm4m7ZASjqWTnHjuW4ol7NyidNP3OeCSIRpodFUZ78Nk33PZ6cIjW3YW0Ct3hxmUHFxfGfCWSjGg_L_9FoCs6YZw4Ri_4on9CfH6Ge7BtQhdkNT6-R8i3wOh7Olans6L5_qpbvq9Jtbd_3MKe6YBpCagS41rMim0JMy1bM3tfvTV9gWzIWT3tyD0spkL4QaLDqn0RtO3fHYjDDsJrCucfPWN6LcDOUOGIOgItMf8ehREKx4t-AP2QIpYMvEZCW6Vx319jpd0XRp_aVvMQolGtjf9Lm527uS974j4GSAJTyB4F49oFtbo_ucNjqTOQxpnI9n0h3ZGHrdZfgARwpTCt4Z6IomX-YcX4m3J0SNC0ozj3TWFHEL_8iUhhG_NDn-Pgu4bxc7K4ra0uLqfBn-7y_HCstr3sAkXIDzXRLZ-l1k3vwlZxWfWWZh9h0a-eW-EgGXfoufNiWYMVQ5sYFQmWS0UqKcH1UCNzJG6tdSAaezfWTsSqlLYY8DwSvqj3-2rhoed3PZqT4OjZcqwp3uxRpkty63oZC8GmRODSQYLrH4xPmFALB4q1Jyy9-t6NymSPAdZkuD9dhUgkQyOtNPPlD6zoQvvdGKFjOGHWlvkEmFzMn6BJ6nSwushyZoRJGp4eqkE8XHMi8e-I27P7F9aUKemlMZf0tJxhsH2-vUCvtODQ.iAdXwV06qahcPMzaujctHw.82a989d52e827504428d6dfddcdc6cf9178d8580cad3470592c193dff11ae0e3';

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
