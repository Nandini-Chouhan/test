
async function hello(){
    let promise = new Promise(function(resolve,reject){
   setTimeout(() => {resolve("Hello GitHub... I am Nandini 💜 ");},2000); 
});
promise.then(function(value){
    console.log(value);
});
}
hello();