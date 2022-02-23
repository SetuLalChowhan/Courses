const products = [
    {
        id:1,
        name:"Monitor"
    },
    {
        id:2,
        name:"Processor"
    },
    {
        id:3,
        name:"grapics Card"
    }
];

// products.forEach( product=>{
//     console.log(product.id);
// })
//    const newP=products.find( product=>{
//    if(product.id ===1)  return product;
    
      
// });
//    const newP=products.map( product=>{
//    if(product.id ===1)  return product;
//    console.log(product.name);
    
      
// });

// const newP = products.filter( product=>{
//      if(product.id == 1) return product;
     
// });
const newP = products.filter( product=>{
     product = (product.id)*2; 
     
        return true
     
   
});

console.log(newP);





