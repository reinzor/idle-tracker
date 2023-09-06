import { storage } from '../storage';
const DETECT_INTERVAL_IN_SECONDS = 60;

setInterval(() => {
  chrome.idle.queryState(DETECT_INTERVAL_IN_SECONDS, (idleState) => {
    storage.set({ idleState });
  });
}, 1000);
