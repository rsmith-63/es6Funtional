/**
 * Created by rob on 1/27/2017.
 */



let xform = [
    {
        "DbName": "pubmed",
        "MenuName": "PubMed",
        "Count": "523",
        "Status": "Ok"
    },
    {
        "DbName": "pmc",
        "MenuName": "PubMed Central",
        "Count": "6091",
        "Status": "Ok"
    },
    {
        "DbName": "books",
        "MenuName": "Books",
        "Count": "231",
        "Status": "Ok"
    },
    {
        "DbName": "pubmedhealth",
        "MenuName": "PubMed Health",
        "Count": "9",
        "Status": "Ok"
    },
    {
        "DbName": "omim",
        "MenuName": "OMIM",
        "Count": "8",
        "Status": "Ok"
    },
    {
        "DbName": "ncbisearch",
        "MenuName": "Site Search",
        "Count": "11",
        "Status": "Ok"
    },
    {
        "DbName": "nuccore",
        "MenuName": "Nucleotide",
        "Count": "3664",
        "Status": "Ok"
    },
    {
        "DbName": "nucgss",
        "MenuName": "GSS",
        "Count": "2830201",
        "Status": "Ok"
    },
    {
        "DbName": "nucest",
        "MenuName": "EST",
        "Count": "4",
        "Status": "Ok"
    },
    {
        "DbName": "protein",
        "MenuName": "Protein",
        "Count": "808",
        "Status": "Ok"
    },
    {
        "DbName": "genome",
        "MenuName": "Genome",
        "Count": "308",
        "Status": "Ok"
    },
    {
        "DbName": "structure",
        "MenuName": "Structure",
        "Count": "4",
        "Status": "Ok"
    },
    {
        "DbName": "snp",
        "MenuName": "SNP",
        "Count": "18739",
        "Status": "Ok"
    },
    {
        "DbName": "dbvar",
        "MenuName": "dbVar",
        "Count": "119350",
        "Status": "Ok"
    },
    {
        "DbName": "gene",
        "MenuName": "Gene",
        "Count": "3",
        "Status": "Ok"
    },
    {
        "DbName": "biosystems",
        "MenuName": "BioSystems",
        "Count": "201",
        "Status": "Ok"
    },
    {
        "DbName": "unigene",
        "MenuName": "UniGene",
        "Count": "62817",
        "Status": "Ok"
    },
    {
        "DbName": "cdd",
        "MenuName": "Conserved Domains",
        "Count": "3922",
        "Status": "Ok"
    },
    {
        "DbName": "clone",
        "MenuName": "Clone",
        "Count": "684049",
        "Status": "Ok"
    },
    {
        "DbName": "popset",
        "MenuName": "PopSet",
        "Count": "24",
        "Status": "Ok"
    },
    {
        "DbName": "geoprofiles",
        "MenuName": "GEO Profiles",
        "Count": "15",
        "Status": "Ok"
    },
    {
        "DbName": "gds",
        "MenuName": "GEO DataSets",
        "Count": "4",
        "Status": "Ok"
    },
    {
        "DbName": "homologene",
        "MenuName": "HomoloGene",
        "Count": "1",
        "Status": "Ok"
    },
    {
        "DbName": "pccompound",
        "MenuName": "PubChem Compound",
        "Count": "37",
        "Status": "Ok"
    },
    {
        "DbName": "pcsubstance",
        "MenuName": "PubChem Substance",
        "Count": "5",
        "Status": "Ok"
    },
    {
        "DbName": "pcassay",
        "MenuName": "PubChem BioAssay",
        "Count": "2",
        "Status": "Ok"
    },
    {
        "DbName": "nlmcatalog",
        "MenuName": "NLM Catalog",
        "Count": "3",
        "Status": "Ok"
    },
    {
        "DbName": "gap",
        "MenuName": "dbGaP",
        "Count": "3",
        "Status": "Ok"
    },
    {
        "DbName": "proteinclusters",
        "MenuName": "Protein Clusters",
        "Count": "656",
        "Status": "Ok"
    },
    {
        "DbName": "bioproject",
        "MenuName": "BioProject",
        "Count": "3",
        "Status": "Ok"
    }
];
let catagorySet = [{"category":'Literature', 'dbList':['Books','MeSH','NLM Catalog',
    'PubMed','PubMed Central' ]},{"category":'Genes', 'dbList':['Books','MeSH','NLM Catalog',
    'PubMed','PubMed Central' ]}
];
let resultsOnly = xform.filter( (ele) => { return ele.Count != '0';});
  console.log(resultsOnly);



  /*
   Literature
   Db	Count	Description
   Books	1,715	books and reports
   MeSH	4	ontology used for PubMed indexing
   NLM Catalog	1,736	books, journals and more in the NLM Collections
   PubMed	25,175	scientific & medical abstracts/citations
   PubMed Central	34,295	full-text journal articles
   */

let categories = {
    "categories": [
        {
            "category": "books",
            "databases": [
                {
                    "DbName": "pubmed",
                    "MenuName": "PubMed",
                    "Count": "523",
                    "Status": "Ok"
                },
                {
                    "DbName": "pmc",
                    "MenuName": "PubMed Central",
                    "Count": "6089",
                    "Status": "Ok"
                }
            ]
        }
    ]
};


let category = {
    "category": "books",
    "databases": [
        {
            "DbName": "pubmed",
            "MenuName": "PubMed",
            "Count": "523",
            "Status": "Ok"
        },
        {
            "DbName": "pmc",
            "MenuName": "PubMed Central",
            "Count": "6089",
            "Status": "Ok"
        }
    ]
};



var metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
let {translations :myLat} = metadata;
console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"


//destructuring
{
    console.log( ' array e');

    let e = [{a: "tye", b: 'blue'}, {a: "coat", b: 'red'}, {a: "pants", b: 'green'}];
    console.log( e);
    let zzz = e.filter(({b} = o) => {
        return b !== 'green'
    });
    console.log( 'filter by prop b in array e');
    console.log(zzz);
    console.log( 'get prop b from array e[0]');
    let key = 'b';
    let {[key] : z} = e[0];

    console.log(z);
    console.log( '*************');

    let [a, b] = e;
    console.log( ' set a to e[0] and to b array e[1]');
    console.log(a);
    console.log('********');
    console.log(b);
    console.log('********');
    let [, , c] = e;
    console.log( ' set c to e[2]');
    console.log(c);
    console.log('********');
    let [, yyy, ...q]= e;
    console.log(q);
    console.log(yyy);

}



//object literal scoping
console.log( 'object literal scoping');
{
    let nombre = 'Rob';
    let last ='Smith';
    console.log(`my name is ${nombre} ${last}`);

    let o = {
        nombre: 'Will',
        last: 'smith',
        sayName(){
            "use strict";
            return ` nombre is ${this.nombre} ${this.last}`;
        }
    };
    console.log( 'object o invoke say name in object o');
    console.log(o.sayName());
    console.log('object o access the constructor name prop');
    console.log('note this telles not name of the the object o but that it is only an object ');
    console.log(o.constructor.name);
    console.log('object o access the nombre prop');
    console.log(o.nombre);
    console.log('********')

}
// class syntax

console.log( 'class syntax');
{
    class Name {
        constructor() {
            this.first = 'Billy';
            this.middle = 'Bob';
            this.last = 'Smith';
        }

        sayName() {
            "use strict";
            return ` nombre is ${this.first} ${this.middle} ${this.last}`;
        }
    }

    let nm = new Name();
    console.log(nm.sayName());
    console.log(nm.constructor.name);
    console.log(nm.first);
    console.log(Name.constructor.name);
}
// fat arrow , literal this

{
    // object literal
   let clothing =
    {
         e:  [{clothingType: "tye", color: 'blue'}, {clothingType: "pants", color: 'red'}, {
             clothingType: "shirt",
            color: 'green'
        }],
         otherColors : ["yellow", "purple", "black"],
        //add more colors
        // short hand notation
         transform(){
             // return output of map function
             "use strict";
             return this.e.map(  (itemOfClothing,index) =>{
                 let obj = Object.assign({}, itemOfClothing);
                 obj.color = [this.otherColors[index],itemOfClothing.color] ;
                 return obj;

             })
         }
    };
  let z = clothing.transform();
    console.log(z);

    console.log("QQQQQQQQQQQQ");
    console.log(clothing.e);
   // class syntax
   class Clothing{
        constructor(){
            this.e =  [{clothingType: "tye", color: 'blue'}, {clothingType: "pants", color: 'red'}, {
                clothingType: "shirt",
                color: 'green'
            }];
            this.otherColors =  ["yellow", "purple", "black"];
        }

       transform(){
           // return output of map function
           "use strict";
           return this.e.map(  (itemOfClothing,index) =>{
               let obj = Object.assign({}, itemOfClothing);
               obj.color = [this.otherColors[index],itemOfClothing.color] ;
               return obj;

           })
       }


   }

   let co = new Clothing();
   let aaa = co.transform();
    console.log("AAAAAAAAAAAA");
    console.log(aaa);
    console.log("asasas");
    //vars not private
    console.log(co.e);




    // bad this has modified e array not immutable
    let clothes =  [{clothingType: "tye", color: 'blue'}, {clothingType: "pants", color: 'red'}, {
        clothingType: "shirt",
        color: 'green'
    }];

    let otherColors =  ["yellow", "purple", "black"];

    class Co{
        constructor(clothes,otherColors){
            this.e = clothes;
            this.otherColors =  otherColors;
        }

        transform(){
            // return output of map function
            "use strict";
            return this.e.map(  (itemOfClothing,index) =>{

                itemOfClothing.color = [this.otherColors[index],itemOfClothing.color] ;
                return itemOfClothing;

            })
        }


    }

    let aba = new Co(clothes,otherColors);
    // array returned here is new array but has references to the to e the internal object
    let adf = aba.transform();
    console.log("NNNNNNNNNNNNNN");
    console.log(adf);
    console.log("2222222222222222");
    //vars not private  and e was modified
    console.log(aba.e);
    // ref modified here too
    console.log("3333333333");
    console.log(clothes);


    //immutable class

    let c =  [{clothingType: "tye", color: 'blue'}, {clothingType: "pants", color: 'red'}, {
        clothingType: "shirt",
        color: 'green'
    }];

    let b =  ["yellow", "purple", "black"];

    class CoCo{
        constructor(clothes,otherColors){
            this.e = clothes;
            this.otherColors =  otherColors;
        }

        transform(){
            // return output of map function
            "use strict";
            return this.e.map(  (itemOfClothing,index) =>{
                //For deep cloning, we need to use other alternatives because Object.assign()
                // copies property values. If the source value is a reference to an object,
                // it only copies that reference value./
                let obj = Object.assign({}, itemOfClothing);
                obj.color = [this.otherColors[index],itemOfClothing.color] ;
                return obj;

            })
        }


    }

    let haba = new CoCo(c,b);
    // array returned here is new array but has new references
    let hadf = aba.transform();
    console.log("ooooooooooo");
    console.log(hadf);
    console.log("55555555555");
    //vars not private  and e was not modified
    console.log(haba.e);
    // ref not  modified here too
    console.log("66666666");
    console.log(c);
}
/*
 Rest operator looks exactly like the spread syntax,
 and is used for destructuring arrays and objects. In a way,
  Rest elements are the opposite of spread elements - spread elements 'expands' an array into its elements,
 and rest elements collects multiple elements and 'condenses' into a single element
 */

// short hand properties

let page = 100;
let book = 'war and peace';

let bookmark ={
   page,
    book
};
console.log("bookmark");
console.log(bookmark);
//this does not modify the object
console.log("bookmark unmodified after change to standalone value");
page = 200;
console.log(bookmark);
console.log("bookmark modified after change to property value");
bookmark.page = 300;
console.log(bookmark);
let timeRanges ={ lengt:1, start:5, end:10};
let movie='tom and jerry';
let vidPos ={
    timeRanges,
    movie
};
console.log('vidPos');
console.log(vidPos);

// change reference affects object

timeRanges.end = 15;
console.log('vidPos modified');
console.log(vidPos);


// module pattern

let modPat = (function () {

    function addPub() {
        return 42;
    }

    function sub() {
        return 51;
    }
    return addPub;

})();

console.log('modPat');
console.log(modPat);

let add = modPat;
console.log(add());

let m2 = (function () {

    return {
        publicMethod: function () {
           return 75;
        }
    };

})();
console.log('m2');
console.log(m2.publicMethod());

//Anonymous Object Literal return
let m3 = (function () {

    let privateMethod = function () {
        "use strict";
        return 25;
    };

    return {
        publicMethodOne: function () {
           // I can call `privateMethod()` you know...
            return privateMethod() + 5;
        },
        publicMethodTwo: function () {
            return privateMethod() + 10;
        },
        publicMethodThree: function () {
            return privateMethod();
        }
    };

})();
console.log('m3');
console.log(m3.publicMethodOne());
console.log(m3.publicMethodTwo());
console.log(m3.publicMethodThree());



//Locally scoped Object Literal
let Module = (function () {

    // locally scoped Object
    let myObject = {};

    // declared with `var`, must be "private"
    let privateMethod = function () {
        "use strict";
        return 10000;
    };

    myObject.someMethod = function () {
        return privateMethod();
    };

    return myObject;

})();
console.log(Module);
console.log(Module.someMethod());


let Module1 = (function () {

    let  privateMethod = function () {
        // private
        return 12;
    };

    let someMethod = function () {
        // public
        return 14;
    };

    let anotherMethod = function () {
        // public
        return privateMethod() + someMethod();
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();

console.log(Module1);
console.log(Module1.someMethod());
console.log(Module1.anotherMethod());

//object assign remember no deep copy here
let per1 = {
 name: 'rob',
    age:34
};
let per2 = Object.assign({},per1,{age:27} );
console.log('per1 and per2');
console.log(per1,per2);
let per3 = Object.assign({},per1,{age:57, occ:"coal miner"} );
console.log(per1,per2,per3);

// Arrays
let ary1 =  [{clothingType: "tye", color: 'blue'}, {clothingType: "pants", color: 'red'}, {
    clothingType: "shirt", color: 'green'},{clothingType: "tye", color: 'purple'}
];
// for of array
console.log('for of');
for(type of ary1){
    console.log(` type of clothing ${JSON.stringify(type)}`);
}


let ary2 =  ["yellow", "purple", "black"];
let ary3 = [10,20,30];
function sum() {
    "use strict";
    let arg = Array.from(arguments);
   return arg.reduce((prev, cur) => {
       return prev + cur;
    }
        )
}
console.log('arrg test');
let zzz = sum(...ary3);
console.log(zzz);

console.log(Array.from(`wee haw look at this array`));
console.log (ary1.find((obj)=> obj.clothingType === 'tye'));
console.log (ary1.findIndex((obj)=> obj.clothingType === 'tye'));

console.log (ary1.filter((obj)=> obj.clothingType === 'tye'));

//Maps
const myMap = new Map();
myMap.set('wee',{wee:'wee',haw:'haw'});
myMap.set('haw', 15);
console.log(myMap);



//

//Need to look at this later
// let ModuleTwo = (function (Module1) {
//
//     Module.extension = function (Module1) {
//       return  Module1;
//     };
//
//     return Module;
//
// })(Module || {});
// console.log(ModuleTwo);
// ModuleTwo(Module1);
// console.log(ModuleTwo);
// console.log(ModuleTwo.extension.someMethod());
// console.log(ModuleTwo.extension.anotherMethod());
//
//
// let ModuleThree = (function (Module) {
//
//     // locally scoped Object
//     let myObject = {};
//
//     // declared with `var`, must be "private"
//     let privateMethod = function () {
//         "use strict";
//         return 0.75;
//     };
//
//     myObject.someOtherMethod = function () {
//         return privateMethod();
//     };
//     myObject.extension = function () {
//         // another method!
//     };
//
//
//     return myObject;
//
// })(Module || {});

//console.log('ModuleThree');
// ModuleThree(Module1);
// console.log(ModuleThree);
// console.log(ModuleThree.someMethod());
// console.log(ModuleThree.anotherMethod());
//
// console.log(ModuleThree.someOtherMethod());



// let b = function ({firstName,lastName}) {
//     console.log("name", ` --- ${firstName} ${lastName}`);
// };

function myFunc({someLongPropertyName: prop}) {
    console.log(prop);
}

myFunc({someLongPropertyName: 'Hello'});

function userId({id}) {
    return id;
}

function whois({displayName, fullName: {firstName: name}}) {
    console.log(displayName + ' is ' + name);
}

var user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
let a = {
    "firstName": "Robert",
    "lastName": "Martin"
};

function b ({firstName,lastName}) {
    console.log("name", ` --- ${firstName} ${lastName}`);
}
b(a);



