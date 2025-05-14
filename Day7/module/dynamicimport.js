//codes2.js
(async () => {
    const module = await import('./codes1.js');
    console.log(module.greet('GFG'));
  })();