/**
 * Created by rob on 5/19/2017.
 */
const input = "(id,created,employee(id,firstname,employeeType(id),lastname),location)";
console.log('input',input);
// replace parentheses  with {}
let replaceParentheses = input.replace(/\(/g, "{").replace(/\)/g, "}");
console.log('replaceParentheses',replaceParentheses);
let jsonStr = replaceParentheses.replace(/([_a-zA-Z][_a-zA-Z0-9]*)\s*([,{}])/g, (unused, propName, spaceOrNull)=>{
    return '"'+propName+'":' + (spaceOrNull != '{' ? 'null' : '') + spaceOrNull;
});
console.log('jsonStr',jsonStr);
let objectOut = JSON.parse(jsonStr);
console.log('objectOut',objectOut);



const  getArray = (obj, objectDepth) =>{
    let values = [];
    const buildArrayOfStrings = (obj, objectDepth) => {
        for (let propName in obj) {
            values.push(`${ new Array(objectDepth + 1).join("-")} ${propName}`);
            if (obj.hasOwnProperty(propName)) {
                if (obj[propName] !== null) {
                    buildArrayOfStrings(obj[propName], objectDepth + 1);
                }
            }
        }

    };
    buildArrayOfStrings(obj, objectDepth);
    return values;
};

let strArry = getArray(objectOut,0);
console.log("********* strArry\n", strArry.join('\n'));

class Parse {
    constructor(input) {
        this.inputStr = input;
        this.replaceParentheses = input.replace(/\(/g, "{").replace(/\)/g, "}");
        this.jsonStr = this.replaceParentheses.replace(/([_a-zA-Z][_a-zA-Z0-9]*)\s*([,{}])/g, (unused, propName, spaceOrNull) => {
            return '"' + propName + '":' + (spaceOrNull != '{' ? 'null' : '') + spaceOrNull;
        });
        this.obj = JSON.parse(this.jsonStr);
        this.values = [];
        this.getArray = this.getArray.bind(this);
        this.buildArrayOfStrings = this.buildArrayOfStrings.bind(this);
    }


    getValues() {
        return this.values;
    }

    buildArrayOfStrings(objectDepth) {
        for (let propName in this.obj) {
            this.values.push(`${ new Array(objectDepth + 1).join("-")} ${propName}`);
            if (this.obj.hasOwnProperty(propName)) {
                if (this.obj[propName] !== null) {

                    this.buildArrayOfStrings(this.obj[propName], objectDepth + 1);
                }
            }
        }
    }

        getArray(objectDepth)
        {



            //let bound = this.buildArrayOfStrings.bind(this);
            this.buildArrayOfStrings(objectDepth);
            return this.values;
        }

}
const parseString = new Parse(input);

let strArry2 =parseString.getArray(0);

console.log("********* strArry2\n", strArry2.join('\n'));