<script lang="ts">
  import { get_image_path } from "./game";
  import { hand } from "./store";
</script>

{#if $hand.cards.length > 0}

  <div class="hand">
    <span class="month-number">{$hand.cards[0].split(":")[1]}</span>
    <img src={get_image_path($hand.cards[0])} alt="" />
  </div>
{/if}

<style>
  .hand {
    position: fixed;
    bottom: 0px;
    right: 0px;    
  }
  .month-number{
    position: absolute;
    top: -25%;
    right: 5px;
    z-index: 99;
    font-size: 2.5em;
  }

</style>
