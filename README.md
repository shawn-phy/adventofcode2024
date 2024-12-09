# adventofcode2024
this repo holds content for the challenges of 2024

## Install Deno
Install the Deno runtime on your system using one of the terminal commands below.

Windows
>irm https://deno.land/install.ps1 | iex

Additional installation options can be found here. After installation, you should have the deno executable available on your system path. You can verify the installation by running:

`deno --version`

## Hello World 
Deno can run JavaScript and TypeScript with no additional tools or configuration required. Let's create a simple "hello world" program and run it with Deno.

Create a TypeScript or JavaScript file called main and include the following code:

TypeScript
``` typescript
main.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```

Save the file and run it with Deno:

main.ts
```
$ deno main.ts
Hello, world!
```