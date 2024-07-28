<script>
  import { life } from "./store";
</script>

<div class="life">
  <div>
    {#each { length: $life } as _l}
      <span>♡</span>
    {/each}
  </div>
</div>

<style>
  .life {
    position: fixed;
    top: 0px;
    right: 0;
    height: 10%;
    font-size: 2.5em;
    width: 90px;
    z-index: 99;
  }
  .life > div {
    display: flex;
    flex-wrap: wrap;
  }
  .life > div > span {
    flex: 1 0 49%;
  }
</style>
