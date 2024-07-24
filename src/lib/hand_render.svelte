<script lang="ts">
  import { hand } from "./store";
</script>

{#if $hand.cards.length > 0}
  <div class="hand">
    {$hand.cards[0]}
  </div>
{/if}

<style>
  .hand {
    position: fixed;
    bottom: 0;
    text-align: center;
    width: calc(100% - 4px);
    height: 7.5%;
    padding-top: calc(5%);
    font-size: 2.5em;
    border: 2px white solid;
  }
</style>
