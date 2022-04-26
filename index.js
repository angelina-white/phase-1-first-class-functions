 function receivesAFunction(callback)
 {
    callback();
 }

 function returnsANamedFunction()
 {
     return function foo()
     {
         console.log("idk if this works")
     }
 }


function returnsAnAnonymousFunction()
{
    return function () {
        console.log(`Nom nom nom, this is delicious!`);
      };
}