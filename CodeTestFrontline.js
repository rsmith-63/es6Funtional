/**
 * Created by rob on 5/18/2017.
 */
let testString = "(id,created,employee(id,firstname,employeeType(id), lastname),location)";
/*
 "{id,created,employee{id,firstname,employeeType{id}, lastname},location}"
 */
let out = "{id,created,employee{id,firstname,employeeType{id}, lastname},location}";

let test = {
    "id": "a",
    "created": "b",
    "employee": {
        "id": "g",
        "firstname": "c",
        "employeeType": {
            "id": "d"
        },
        "lastname": "e"
    },
    "location": "f"
};



// var str =
//     "(id,created,employee(id,firstname,employeeType(id),lastname),location)";
//
// str = str.replace(/[(]/g, "{");
// str = str.replace(/[)]/g, "}");
// str = str.replace(/([A-z])\s*{/g, '$1":{');
// str = str.replace(/([A-z])\s*([},])/g, '$1":null$2');
// str = str.replace(/({)/g, '{"');
// str = str.replace(/(,)/g, ',"');
// var objectStr = JSON.parse(str);
// console.log('',objectStr);
// var objectOutput = function(obj, counter) {
//     for (var i in obj) {
//         console.log(Array(counter + 1).join("-") + " " + i);
//         if (obj.hasOwnProperty(i)) {
//             if (obj[i] !== null) {
//                 objectOutput(obj[i], counter + 1);
//             } else {
//                 counter = 0;
//             }
//         }
//     }
// };
//
// objectOutput(objectStr, 0);
//


let str = "(id,created,employee(id,firstname,employeeType(id),lastname),location)";

str = str.replace(/\(/g, "{").replace(/\)/g, "}");
str = str.replace(/([_a-zA-Z][_a-zA-Z0-9]*)\s*([,{}])/g, (m, name, x)=>{
    return '"'+name+'":' + (x != '{' ? 'null' : '') + x;});
let objectStr = JSON.parse(str);
console.log('objectStr',objectStr);

console.log('keys',Object.keys(objectStr));
const objectOutput =  (obj, objectDepth) =>{
    for (let propName in obj) {
        console.log(`${ new Array(objectDepth + 1).join("-")} ${propName}`);
        //console.log('objectDepth', objectDepth);
        if (obj.hasOwnProperty(propName)) {
            if (obj[propName] !== null) {
                objectOutput(obj[propName], objectDepth + 1);
            }
        }
    }
};
objectOutput(objectStr, 0);
console.log('*******************************');
let a =[];
const buildArrayOfStrings = (obj, objectDepth)=>{
    for (let propName in obj) {
        a.push(`${ new Array(objectDepth + 1).join("-")} ${propName}`);
        if (obj.hasOwnProperty(propName)) {
            if (obj[propName] !== null) {
                buildArrayOfStrings(obj[propName], objectDepth + 1);
            }
        }
    }

};
buildArrayOfStrings (objectStr,0) ;
// a.sort();
// a.sort(compare);
console.log("********* a\n", a.join('\n'));

// const buildArrayOfStringsV2 = (obj, objectDepth)=>{
//     for (let propName in obj) {
//          A.push(`${ new Array(objectDepth + 1).join("-")} ${propName}`);
//         if (obj.hasOwnProperty(propName)) {
//             if (obj[propName] !== null) {
//                return buildArrayOfStringsV2(obj[propName], objectDepth + 1);
//             }
//         }
//     }
//
// };
//
// buildArrayOfStringsV2(objectStr,0) ;
// console.log("********* A", A);

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};

// //replaceAll("[^a-zA-Z]", "")
function compare(a, b) {
  //let c =  b.replace(/[^a-z0-9]+/gi,``);
    //

    console.log('a ', a);
    console.log('b ', b);
    let aaa = text2numberArray(a);
    let sum = aaa.reduce(function(acc, val) {
        return acc + val;
    }, 0);
    let bbb = text2numberArray(b);
    let sum1 = bbb.reduce(function(acc, val) {
        return acc + val;
    }, 0);
    return sum - sum1;


}
//


function text2numberArray(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0);
    });
}
let z = `-- id`;
let q = text2numberArray(z);
let sum = q.reduce(function(acc, val) {
    return acc + val;
}, 0);

console.log("********* q", q);
console.log("********* sum", sum);



