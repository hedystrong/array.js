let arr1 = [3,45,23,78,34];
let arr2 =[4,2,34,4,12,1]


arr1[arr1.length] = 1;

console.log((arr1));

let arr3 = [];

for(let i = 0; i<= arr1.length; i++) {
    for(let j = 0; j<= arr2.length -1; j++) {
    if(i == j) {
       arr3[i] = arr1[i] * arr2[j]
    }
}
}

console.log(arr3);









