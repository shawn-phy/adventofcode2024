async function readInput(): Promise<string> {
  const text = await Deno.readTextFile("input1.txt");
  return text;
}

async function main() {
  try {
    const content = await readInput();
    const lines = content.split("\n");
    
    const lefts: number[] = [];
    const rights: number[] = [];

    // Parser
    for (const line of lines) {
      if (line.trim() === "") continue;
      const [a, b] = line.trim().split(/\s+/).map(Number);
      lefts.push(a);
      rights.push(b);
    }

    lefts.sort((a, b) => a - b);
    rights.sort((a, b) => a - b);

    // Part 1: Sum of absolute differences
    const part1 = lefts.reduce((sum, left, i) => 
      sum + Math.abs(left - rights[i]), 0);

    // Part 2: Sum of common values
    const part2 = lefts.reduce((sum, left) => 
      sum + left * rights.filter(r => r === left).length, 0);

    console.log("Part 1:", part1);
    console.log("Part 2:", part2);

  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error("Error: File 'input1.txt' not found.");
      Deno.exit(1);
    }
    console.error("Error reading file:", error);
    Deno.exit(1);
  }
}

await main();

// to run the file use the command: deno --allow-read day01.ts
// make sure to have the input file in the same directory
//have fun from here on. 
