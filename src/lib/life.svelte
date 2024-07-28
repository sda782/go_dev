<script>

    import { life } from "./store";

</script>
<div class="life">
    {#each { length: $life } as _l}
      <span>♡</span>
    {/each}
  </div>
<style>
    .life {
      position: fixed;
      top: 0px;
      right: 0;
      text-align: center;
      height: 10%;
      font-size: 2.5em;
      z-index: 99;
    }
  </style>