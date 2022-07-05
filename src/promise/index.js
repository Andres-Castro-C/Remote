const promise = new Promise(function(resolve, reject){
    resolve("Hey!");
});

const cows = 15;

const counsCows = new Promise(function(resolve, reject){
    if (cows > 10 ) {
        resolve(`We have ${cows} on the cows farm` );
    }else{
        reject('There is not cows');
    }
});

counsCows.then((results) =>{
    console.log(results);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('finally'));
