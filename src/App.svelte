<script lang="ts">
  import BoardRender from "./lib/board_render.svelte";
  import HandRender from "./lib/hand_render.svelte";
  import { generate_game } from "./lib/game";
  import { onMount } from "svelte";
  import { board, hand, life } from "./lib/store";

  onMount(() => {
    for (let i = 0; i < 44; i++) {
      $board.cells.push("");
    }
    var starting_state = generate_game();
    $hand.cards = [...starting_state.hand];

    $board.cells = [...starting_state.board];
  });
  $: if ($hand.cards.length == 0 || $life == 0) {
    window.location.reload();
  }
</script>

<BoardRender />
<div class="life">
  {#each { length: $life } as _l}
    <span>♡</span>
  {/each}
</div>
<HandRender />

<style>
  .life {
    position: fixed;
    bottom: 11%;
    text-align: center;
    width: calc(100% - 4px);
    height: 10%;
    padding-top: calc(5% + 0.5em);
    font-size: 3em;
  }
</style>
