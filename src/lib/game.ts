type gg = {
  hand: string[];
  board: string[];
};

export const months: Array<string> = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

export function get_image_path(val: string): string {
  const [monthStr, monthIndexStr] = val.split(":");
  const monthIndex = parseInt(monthIndexStr);
  const monthType = months[monthIndex - 1];

  if (!monthType) {
    return "";
  }

  return `/cards/${monthType} (${monthStr}).png`;
}

export function generate_game(): gg {
  var d = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 12; j++) {
      d.push(`${i + 1}:${j + 1}`);
    }
  }
  shuffle(d);
  let hand: string[] = [];
  let board: string[] = [];
  d.forEach((i: string, index: number) => {
    if (index < 4) {
      hand.push(i);
    } else {
      board.push(i);
    }
  });

  return {
    hand,
    board,
  };
}

function shuffle(array: any) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
