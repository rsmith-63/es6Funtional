/**
 * Created by rob on 2/8/2017.
 */
const co = require('co');
const fetch = require('isomorphic-fetch');


co(function *(){

    let response = yield fetch('http://api.icndb.com/jokes/random/1');
    let joke = yield response.json();
    console.log('HAHA HA HAHA');
    console.log(joke);

} );


function testPromise(){
    const fetch = require('isomorphic-fetch');
    return   fetch('http://api.icndb.com/jokes/random/1')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log('*********************************************************');
            console.log('got responce from http://api.icndb.com/jokes/random/');
            return response;
        })
        .catch((e)=>{
            console.log(e);

        });
}
co(function *(){
    "use strict";
   const rsp = yield testPromise();
   const aws = yield rsp.json();
    console.log("testPromise");
    console.log('here is the answer', aws);
});


function runGen( gen ) {
    const iterator = gen();
    console.log('iterator');
    const iteration = iterator.next();
    const promise = iteration.value;
    promise.then( response => {
        "use strict";
        const anotherIterator = iterator.next(response);

        console.log(anotherIterator);
        const p2 = anotherIterator.value;
        p2.then(json => iterator.next(json) )
    } );
}


runGen(function *(){

    let response = yield fetch('http://api.icndb.com/jokes/random/1');
    let joke = yield response.json();
    console.log('hmmm HA HAHA');
    console.log(joke);


} );

class JokeProvider {
    *getJoke() {
         yield' hahahahaha ';
  }
}
function *getJoke() {
    co(function *(){
     let a = yield fetch('http://api.icndb.com/jokes/random/1');
      yield a ;
    } )
}
let joker = new JokeProvider();
let zzzzz = joker.getJoke().next().value;
console.log('zzzzzzz',zzzzz);

let ahahaha =  getJoke( ).next();
ahahaha = getJoke( ).next();
console.log('ahahaha',ahahaha);

function *jokeOnU() {
    yield fetch('http://api.icndb.com/jokes/random/1');
}
co( function *() {
    let resp = yield jokeOnU().next().value;

    console.log('resp',resp);
    let  jk = yield resp.json();
    console.log('jk',jk);
});

// function runGenRecursive(gen ) {
//     const iterator = gen();
//
//     function iterate (iteration) {
//         if(iteration.done){
//             return iteration.value;
//         }
//         const promise = iteration.value;
//         return promise.then(x => iterate(iterator.next(x)))
//     }
//    return iterate(iterator.next())
// }
//
// runGenRecursive(function *(){
//     console.log('WWWWWWWOOOOOOO HA HAHA');
//     let response = yield fetch('http://api.icndb.com/jokes/random/1');
//     let joke =     yield response.json();
//
//     console.log(joke);
//
//
// } )


// let qqq = yield getData();
// console.log(qqq);




// function testPromiseChain(){
//     const fetch = require('isomorphic-fetch');
//     fetch('http://api.icndb.com/jokes/random/1')
//         .then(function(response) {
//             if (response.status >= 400) {
//                 throw new Error("Bad response from server");
//             }
//             console.log('*********************************************************');
//             console.log('got responce from http://api.icndb.com/jokes/random/');
//              return response.json();
//
//         }).then((jokes)=>{
//            return jokes;
//     }).catch((e)=>{
//         console.log(e);
//
//     });
// }
// console.log('testPromiseChain');
// testPromiseChain();
//
// console.log('jokes');


// function getExample() {
//     const fetch = require('isomorphic-fetch');
//
//     let a = fetch('http://api.icndb.com/jokes/random/1')
//         .then(function(response) {
//             if (response.status >= 400) {
//                 throw new Error("Bad response from server");
//             }
//             console.log('*********************************************************');
//             console.log('got responce from http://api.icndb.com/jokes/random/');
//             return response.json();
//
//         });
//     let b = a.then((jokes)=>{
//         return jokes;
//     });
//
//     return Promise.all([a, b]).then((resultA, resultB) =>{
//         // more processing
//         return resultA;
//     });
// }
//
// console.log('getExample');
// let qa = getExample();
//
// console.log(qa);
