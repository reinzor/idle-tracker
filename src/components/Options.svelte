<script lang="ts">
  import { storage } from '../storage';

  export let idleState: chrome.idle.IdleState;

  setInterval(async () => {
    idleState = (await storage.get()).idleState;
    console.log(idleState);
  }, 2000);
</script>

<div class="container">
  <p>Idle state: <b>{idleState}</b></p>
</div>

<style>
  .container {
    min-width: 250px;
  }
</style>
