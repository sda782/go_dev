<script>
  import Card from "./card.svelte";
  import { board } from "./store";
</script>

<div class="board">
  {#if $board.cells}
    {#each $board.cells as cell}
      <Card {cell}></Card>
    {/each}
  {/if}
</div>

<style>
  .board {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 85%;
  }
</style>
