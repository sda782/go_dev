<script lang="ts">
  import { get_image_path } from "./game";
  import { hand } from "./store";
</script>

{#if $hand.cards.length > 0}
  <div class="hand">
    <span class="month-number">{$hand.cards[0].split(":")[1]}</span>
    <img src={get_image_path($hand.cards[0])} alt="" width="75%" />
  </div>
{/if}

<style>
  .hand {
    position: fixed;
    bottom: 0px;
    right: -4%;
  }
  .month-number {
    position: absolute;
    top: -33%;
    left: 55px;
    z-index: 99;
    font-size: 2.5em;
  }
</style>
