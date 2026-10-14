// This challenge is fully static: no API calls or server required.
const copyButton = document.getElementById('copy');
const ciphertext = document.getElementById('cipher').textContent;
const status = document.getElementById('status');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(ciphertext);
    status.textContent = 'Ciphertext copied. Good luck decrypting!';
    copyButton.textContent = 'Copied ✓';
  } catch {
    status.textContent = 'Select the ciphertext above and copy it manually.';
  }
});
