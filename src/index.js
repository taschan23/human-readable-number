module.exports = function toReadable(number) {
    let result = '';
    let names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let tenNames = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let tensNames = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberArr = number.toString().split('');

    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr.length === 3) {
            result += names[numberArr[0]] + ' hundred';
            if (parseInt(numberArr[1]) > 0 && parseInt(numberArr[2]) >= 0) {
                result += ' ';
            }
            numberArr = numberArr.splice(1);
        } else if (numberArr.length === 2) {
            if (parseInt(numberArr[1]) === 0) {
                if (parseInt(numberArr[0]) === 1) {
                    result += names[numberArr.join('')];
                } else {
                    result += tensNames[numberArr[0]];
                }
            } else {
                if (parseInt(numberArr[0]) === 1) {
                    result += tenNames[numberArr[1]];
                } else {
                    result += tensNames[numberArr[0]] + ' ' + names[numberArr[1]];
                }
            }
            numberArr = numberArr.splice(1);
        } else {
            result = names[numberArr[i]];
        }
    }

    return result.trim();
}
