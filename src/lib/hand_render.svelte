<script lang="ts">
  import { get_image_path } from "./game";
  import { hand } from "./store";
</script>

{#if $hand.cards.length > 0}
  <div class="hand">
    <img src={get_image_path($hand.cards[0])} alt="" />
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
