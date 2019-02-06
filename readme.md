# JS Debugging Demo

A few **broken** JavaScript demos to show the power of Chrome's DevTools. The `master` branch contains the broken code, but you can switch to the `fixed` branch to see how the code should look after you've debugged it.


## Breakpoints

Use breakpoints to step through functions. You can stop at specific lines, on exceptions, or any number of generic events. This code contains a snippet you can use to practice navigating breakpoints.

Bonus: Use Snippets! They're tiny JS scripts you can save to the browser and run whenever you want.


## Async

Debugging asynchronous code can be a nightmare, but you can place breakpoints within async functions and callbacks so you can see exactly when that Promise gets resolved or rejected.


## Watch

Using `console.log()` is fine, but can get annoying with too much noise. Use watch expressions to see how values change over time. You can also interact with those values, unlike the basic output to the console.


## DOM

This one isn't broken, but I'll show some shortcuts you can use in the console to interact with DOM nodes on the fly, things like `$0`, `$_`, and `$()`.

