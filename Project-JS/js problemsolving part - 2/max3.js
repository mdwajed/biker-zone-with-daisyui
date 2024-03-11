const wajed = 88;
const nafi = 69;
const nehan = 91;
if (wajed > nafi && wajed > nehan) {
    console.log('wajed will get the prize')
}
else if (nafi > wajed && nafi > nehan) {
    console.log('nafi will get the prize')
}

else {
    console.log('nehan will get the prize')
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return 'num1 is greater'
    }
    else if (num2 > num1 && num2 > num3) {
        return 'num2 is greater'
    } else {
        return 'num3 is greater'
    }
}
maxOfThree(88, 69, 91);
console.log(maxOfThree(88, 69, 91));

const max = Math.max(56, 78, 23, 90, 98, 89, 99);
console.log('Greater number of tis numbers : ', max);
