const order=(prod)=>{
  setTimeout(()=>{
    console.log("order");
  },2000);
  prod()
}
//call back hell
const prod=()=>{
  console.log("pro");
  setTimeout(()=>{
    console.log("fruits gathered");
    setTimeout(()=>{
     console.log("frruits chopped");
     setTimeout(()=>{
        console.log("order delivered");
        setTimeout(()=>{
          console.log("payment done");
          setTimeout(()=>{
            console.log("customer gone");
          },2000);
        },5000);
     },1000)
    },4000)
  },2000)
}
order(prod);

