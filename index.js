var coint = []
var numbers = [10, 5, 2, 3, 6, 7];
var trans = 23
var fee = 0.5
var change = []

const alers = [
    coint,
    fee,
    change
]

numbers.sort(function (a, b) {
    return b - a;
});
var tamp = 0
for (let i = 0; i < numbers.length; i++) {
    if (parseFloat(tamp) < parseFloat(trans)) {
        trans = trans + fee
        tamp = tamp + parseFloat(numbers[i])
        coint.push(parseInt(numbers[i]))
    } else {
        change.push(parseInt(numbers[i]))

    }
}
let total = tamp - trans
change.push(parseInt(total))
change.sort(function (a, b) {
    return b - a;
});
console.log('Coin Yang Diperlukan:', coint);
console.log('Biaya:', fee * coint.length)
console.log('Sisa coin:', change)