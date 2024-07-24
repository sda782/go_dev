import { writable, type Writable } from "svelte/store";

export const board: Writable<{ cells: string[] }> = writable({
  cells: [],
});
export const hand: Writable<{
  cards: string[];
}> = writable({
  cards: [],
});

export const life: Writable<number> = writable(4);
