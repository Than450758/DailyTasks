const exampleset=new Set([1,1,1,1,2,2,2,2]);
exampleset.add(5);
exampleset.add(5).add(17);
exampleset.delete(5);
//exampleset.clear();
console.log(exampleset.size);