<script lang="ts">
  import { get_image_path } from "./game";
  import { board, hand, life } from "./store";

  export var cell: string;
  var played: boolean = false;
  function play_card() {
    if (played) return;
    if ($hand.cards[0].endsWith("11")) return;
    let card_from_hand = $hand.cards.shift();
    if (card_from_hand) {
      $hand.cards = [...$hand.cards];
      let card_index = $board.cells.indexOf(cell);
      let old_card = $board.cells[card_index];
      $hand.cards.push(old_card);
      $board.cells[card_index] = card_from_hand;
      played = true;
    }
  }
</script>

<div class="card">
  {#if played}
    {#if cell}
      <img src={get_image_path(cell)}  alt="" />
    {/if}
  {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img on:click={() => play_card()}  src="/cards/card_back.png" alt="" />
  {/if}
</div>

<style>
  .card {
    flex: 1 0 9%;
    font-size: 2.5em;
    min-height: 6vh;
  }
  .card>img{
    width: 90%;
  }
</style>
