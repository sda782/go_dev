<script lang="ts">
  import { board, hand, life } from "./store";

  export var cell: string;
  var played: boolean = false;
  function play_card() {
    if (played) return;
    let card_from_hand = $hand.cards.shift();
    if (card_from_hand) {
      $hand.cards = [...$hand.cards];
      let item_index = $board.cells.indexOf(cell);
      let old_card = $board.cells[item_index];
      $hand.cards.push(old_card);
      if (!card_from_hand.endsWith("11")) {
        $board.cells[item_index] = card_from_hand;
      } else {
        $life -= 1;
      }
      played = true;
    }
  }
</script>

<div class="card">
  {#if played}
    {#if cell}
      <span>{cell}</span>
    {/if}
  {:else}
    <span on:click={() => play_card()}>✾</span>
  {/if}
</div>

<style>
  .card {
    flex: 1 0 21%;
    border: 2px white solid;
    font-size: 2.5em;
    min-height: 6vh;
  }
</style>
