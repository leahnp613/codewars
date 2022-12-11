// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sum = arr1.map(function (num, idx) {
        return num + arr2[idx];
      });
    return sum.reduce((partialSum,num) => partialSum + num, 0 );
}