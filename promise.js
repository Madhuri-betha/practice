// promise
// pending
// resolve=>.then,.then  finally
// reject=>catch        finally



// is_shop_open=true

// let order = ( time, work ) => {
//     return new Promise( ( resolve, reject )=>{
//       if( is_shop_open ){
//         setTimeout(()=>{
//           resolve(work())
//          }, time)
//       }
//       else{
//         reject( console.log("Our shop is closed") )
//       }
//     })
//   }
//   order( 2000, ()=>console.log('strawberry was selected'))
//   .then(()=>{
//     return order(0000,()=>console.log('production has started'))
//   })
//   .then(()=>{
//     return order(2000, ()=>console.log("Fruit has been chopped"))
//   })
//   .then(()=>{
//     return order(1000, ()=>console.log(`liquids added`))
//   })
//   .then(()=>{
//     return order(1000, ()=>console.log("start the machine"))
//   })
//   .then(()=>{
//     return order(2000, ()=>console.log("Serve Ice Cream"))
//   })

//   .catch(()=>{
//     console.log("Customer left")
//   })
//   .finally(()=>{
//     console.log("end of day")
//   })


//example 2
  function kitchen(value){

    return new Promise ((resolve, reject)=>{
      if(value){
         resolve("promise is fulfilled")
      } 
      else{
          reject("error caught here")
      }
    })
  }
  
  kitchen(false)  // run the code
  .then(console.log("ghujiko"))    // next step
  .then()    // next step
  .catch(console.log("error"))   // error caught here
  .finally(console.log("end"))