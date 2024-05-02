const logContent = document.getElementById('log-content');
const modeSelect = document.getElementById('mode');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  const logEntry = {
    mode: modeSelect.value,
    content: logContent.textContent
  };

  // Save logEntry to a local file using the Storage API
  localStorage.setItem('logEntry', JSON.stringify(logEntry));
});
