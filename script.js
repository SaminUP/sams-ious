async function checkIOU() {
  const code = document.getElementById('codeInput').value.trim().toUpperCase();
  const resultDiv = document.getElementById('iouResult');
  resultDiv.innerHTML = "Checking...";

  try {
    const response = await fetch('ious.json');
    const data = await response.json();

    if (data[code]) {
      const ious = data[code];
      resultDiv.innerHTML = `
        <p class="font-bold mb-2">Sam owes you:</p>
        <ul class="list-disc list-inside">
          ${ious.map(iou => `<li>${iou}</li>`).join('')}
        </ul>
      `;
    } else {
      resultDiv.innerHTML = `<p class="text-red-500 font-semibold">Sam owes you NOTHING! (or wrong code?) 😅</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p class="text-red-500">Oops! Something went wrong.</p>`;
  }
}
