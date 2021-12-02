// let fizzBuzz = (x, y) => {
//     for (let i = 0; i < 100; i++) {
//         if (i % x == 0 && i % y == 0){
//             console.log ("FizzBuzz")
//         } else if (i % x == 0) {
//             console.log("Fizz")
//         } else if (i % y == 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i);
//         }
                
        
//         // se multiplo do primeiro
//         // se multiplo do segundo
//         // se multiplo de ambos
//         // senao

//     }
// }



let fizzBuzz = (x, y) => {
    for (let i = 0; i < 100; i++) {

        if (i % x == 0) {
            console.log("Fizz")
        } 
        if (i % y == 0) {
            console.log("Buzz")
        }
        if (i % x == 0 && i % y == 0){
            console.log ("FizzBuzz")
        }  else {
            console.log(i);
        }
                
        
        // se multiplo do primeiro
        // se multiplo do segundo
        // se multiplo de ambos
        // senao

    }
}

fizzBuzz(3,5);
