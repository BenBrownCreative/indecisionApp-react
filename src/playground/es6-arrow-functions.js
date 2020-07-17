console.log('arrows');

const square = function(x) {
    return x * x;
};
// as long as we are returning a single expression we can do this
const squareArrow = x => x * x;


const getFirstName = name => name.split(' ')[0];

console.log(getFirstName('Aaron Brown'));
