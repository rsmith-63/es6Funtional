/**
 * Created by rob on 1/31/2017.
 */
//"use strict";
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('good to go');
    },250);
    setTimeout(()=>{
        reject('oops error');
    },500)

});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('good to go p2');
    },300);
    setTimeout(()=>{
        reject('oops error p2');
    },1000)

});
Promise.all([p,p2]).then((data)=>{
    console.log("all ");
    console.log(data);
    }

).catch((e)=>{
    console.log(e);
});
Promise.race([p, p2]).then(function(value) {
    console.log("race ");
    console.log(value); // "two"
    // Both resolve, but p2 is faster
}).catch((e)=>{
    console.log(e);
});

p.then((res) => {
    console.log('wee Haw promise 1 done');
 console.log(res);
}).catch((e)=>{
    console.log(e);
});
// fetchTest();
// function fetchTest() {
//   const fetch = require('isomorphic-fetch');
//     fetch('https://www.google.com.bz/')
//         .then(function(response) {
//             if (response.status >= 400) {
//                 throw new Error("Bad response from server");
//             }
//             console.log('got responce from https://www.google.com.bz/')
//             return console.log(response);
//         }).catch((e)=>{
//         console.log(e);
//
//     })
//
// }
testJoke();
function testJoke(){
    const fetch = require('isomorphic-fetch');
    fetch('http://api.icndb.com/jokes/random/1')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log('*********************************************************');
            console.log('got responce from http://api.icndb.com/jokes/random/');
            response.json().then((jokes)=>{
                console.log(jokes);
            });
        }).catch((e)=>{
        console.log(e);

    });
}

rawNodeWithPromise().then((data)=>{
    console.log('111111111111111111111111111111111111111111111111111111111111');
    console.log(data[0].version);
} ).catch((e)=>{
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(`Got error: ${e.message}`);
});
function rawNodeWithPromise() {

    return new Promise((resolve,reject)=>{
        const http = require('http');
        http.get('http://nodejs.org/dist/index.json', (res) => {
            const statusCode = res.statusCode;
            const contentType = res.headers['content-type'];

            let error;
            if (statusCode !== 200) {
                error = new Error(`Request Failed.\n` +
                    `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error(`Invalid content-type.\n` +
                    `Expected application/json but received ${contentType}`);

            }
            if (error) {
                console.log(error.message);
                // consume response data to free up memory
                res.resume();
                reject(error);
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => rawData += chunk);
            res.on('end', () => {
                try {
                    let parsedData = JSON.parse(rawData);
                    //console.log(parsedData);
                    resolve(parsedData);
                } catch (e) {
                    console.log(e.message);
                    reject(e);
                }
            });
        }).on('error', (e) => {
            console.log(`Got error: ${e.message}`);
            reject(e);
        })
    })}


//generators
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

testPromise().then((response)=>{
    console.log('got response from  testPromise');
    response.json().then((jokes)=>{
        console.log(jokes);
    })

}
).catch((e)=>{
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(`Got error: ${e.message}`);
});


