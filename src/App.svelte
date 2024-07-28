<script lang="ts">
  import BoardRender from "./lib/board_render.svelte";
  import HandRender from "./lib/hand_render.svelte";
  import { generate_game } from "./lib/game";
  import { onMount } from "svelte";
  import { board, hand, life } from "./lib/store";
    import Life from "./lib/life.svelte";

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
  $: if ($hand.cards[0].endsWith("11")) {
    setTimeout(()=>{
      $life -= 1;
      $hand.cards.splice(0, 1);
      $hand.cards = [...$hand.cards];
    },1000)
    
  }
</script>

<BoardRender />
<Life/>
<HandRender />


