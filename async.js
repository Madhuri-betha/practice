// async function kitchen(){
//     try{
 
//       // instruction here
//     }
 
//     catch(error){
//      // error management here
//     }
//  }
 
 // Trigger
 kitchen();

 let is_shop_open = false;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }
      else{
         reject(console.log("Shop is closed"))
      }
    });
}

async function kitchen(){
    try{
	await time(2000)
	console.log(` was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(` added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on `)

	await time(3000)
	console.log(` as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
kitchen()
