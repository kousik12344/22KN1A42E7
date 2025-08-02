export const logAction = (action, payload) => {
  const timestamp = new Date().toISOString();
  const logEntry = { action, payload, timestamp };
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push(logEntry);
  localStorage.setItem('logs', JSON.stringify(logs));
};
