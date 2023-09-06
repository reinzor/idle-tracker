import Options from '../components/Options.svelte';
import { storage } from '../storage';

// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

function render() {
  const target = document.getElementById('app');

  if (target) {
    storage.get().then(({ idleState }) => {
      new Options({
        target,
        props: { idleState },
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', render);
