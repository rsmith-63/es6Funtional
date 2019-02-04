/**
 * Created by rob on 7/5/2017.
 */
function Tester() {
}

Tester.prototype.saveResults = function(filepath) {
    console.log('Save test result to ' + filepath)
};

Tester.prototype.run = function() {
    console.log('Running tests...');
    this.saveResults('test.xml')
};

var test = new Tester();

var test = new Tester();

var originalSaveResults = test.saveResults;
test.saveResults = function(filepath) {
    var returnValue = originalSaveResults.apply(this, arguments);
    var planpath = filepath.replace('.xml', '_plan.xml');
    console.log('Save test plan to ' + planpath);
    return returnValue
};

test.run();

function override(object, methodName, callback) {
    object[methodName] = callback(object[methodName])
}

var test = new Tester();

override(test, 'saveResults', function(original) {
    return function(filepath) {
        var returnValue = original.apply(this, arguments);
        var planpath = filepath.replace('.xml', '_plan.xml');
        console.log('Save test plan to ' + planpath);
        return returnValue
    }
});

test.run();

function after(extraBehavior) {
    return function(original) {
        return function() {
            var returnValue = original.apply(this, arguments);
            extraBehavior.apply(this, arguments);
            return returnValue
        }
    }
}

override(test, 'saveResults', after(function(filepath) {
    var planpath = filepath.replace('.xml', '_plan.xml');
    console.log('Save test plan to ' + planpath)
}));


function before(extraBehavior) {
    return function(original) {
        return function() {
            extraBehavior.apply(this, arguments);
            return original.apply(this, arguments)
        }
    }
}

function compose(extraBehavior) {
    return function(original) {
        return function() {
            return extraBehavior.call(this, original.apply(this, arguments))
        }
    }
}

override(person, 'getName', compose(function(name) {
    return name.toUpperCase()
}));

function benchmark(original) {
    return function() {
        var startTime = new Date().getTime();
        var returnValue = original.apply(this, arguments);
        var finishTime = new Date().getTime();
        console.log('Took', finishTime - startTime, 'ms.');
        return returnValue
    }
}

function memoize(original) {
    var memo = { };
    return function(x) {
        if (Object.prototype.hasOwnProperty.call(memo, x)) return memo[x];
        memo[x] = original.call(this, x);
        return memo[x]
    }
}

var fibonacci = {
    fib: function(x) {
        return x <= 1 ? x : this.fib(x - 1) + this.fib(x - 2)
    }
};
override(fibonacci, 'fib', memoize);
console.log(fibonacci.fib(42)); // ~6111ms without memoize,
                               //     0ms with memoize.
benchmark(fibonacci.fib.bind(fibonacci))(42);
override(fibonacci, 'fib', memoize);
benchmark(fibonacci.fib.bind(fibonacci))(42);


// function wrap(orig, newDef) {
//     return function(...args) {
//         return newDef.apply(this, [orig].concat(args));
//     };
// }
//
// myLib.getTotal = wrap(myLib.getTotal, function(orig, ...args) {
//     let total = orig.apply(this, args) * 0.8;
//     return total + this.getTax();
// });