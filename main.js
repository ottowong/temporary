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
  const token = '0.Psrt4P7WE3-u71WnXl8dR8DBq2fA-MCl3IFiNIrPGOf-fAiDflyninDbcKuX1ZIioTyC5VjPYxRgRqqw9sgpqPCgpW_OZk9ii9LMHFHQWrITJaEr9v5UeZon-2zHaz5fhC-MUJm88Moa7XwCNpwef1Pp7We-eL6KLJKyD9QEPt5GKW8gv2uS1FUFwBD1KHQj7U03GQz37KuzBU68m3WEWkNc9dtS5v81t5cv-sr1UYp4f9ovIrF-LBUBjKU3_a5_e9j7JSGQj4GykMHR6Or2alC6MCpjC2sADRUbldm4VEghOvSxJ12tUK_ouNmyo2V1treEiJMtEAOib2b2K6KN9Yj-O7gsk0L0oGZwFmoK_AOIFadPekA366_-tAOT1aANBaiSqLBIIWqLYdk1jqkxmBoWhxz8KRhSAQmZqSgwjv0KeqMWEE7FzuFIWP29h2K4J3Lo-FzN3jYaGhv4Gq_JGr1djXmVbPALYX3IaEaAzDSw5CIdVl0EB4ncZaeCO3ULTzqeu3bMaOkVRe5BQdWwZz_RkpWYOV4NBOB3XECUGLCT0BF23EqWvJdRBVav4mihk3VLLp-tNTk9cdGuUjJCyKtxJts-LSGjXGRZyYnAZW5cLKiHKXPBIn5E6b2r7l_VtSNa1VpIcqa2pxISF2lLtkeQ7ESftPJB7R6AalBma6FV0d4W_A8NuwOEPnh6fQseTdrrPpvg8voYyV3s_JMVKO_INBu2b_4ERm0SZ3dj1FB-RkKI6cPoiMGwWmeuN8YQrZHwlkM4tzJzD8FDEr-xtLiR6ZqkTd92udWCjuIPrNNZwZcVje9OPUToDDSdJRgFb2HnTgOvC9qVoRplD8VaZqs_9GiVIDQfl1WuLwyZAMdczvMicuhZw2cT4qalExH_bFnkD7NbYfjGyp2HH3Q3qQ.gnMojvAbatXLxmFakSlh1Q.91162eaeba4a5b122acacd0181a64669c6713ef7ee0659269e9ea08d2c44363e';

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
