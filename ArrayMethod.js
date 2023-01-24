 /* const shoppingCart = {
    1: "apple",
    2: "oranges"
};
console.log(shoppingCart);
 */

/*
var obj = [
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P2', 'value': 200 },
    { 'name': 'P3', 'value': 450 }
];

var holder = {};

obj.forEach(function (d) {
    if (holder.hasOwnProperty(d.name)) {
        holder[d.name] = holder[d.name] + d.value;
    } else {
        holder[d.name] = d.value;
    }
});

var obj2 = [];

for (var prop in holder) {
    obj2.push({ name: prop, value: holder[prop] });
}

console.log(obj2);
 */

const fill = (arraySize , value) => {
    let arr=[];
    for(let i=0; i<arraySize ; i++){
        arr[i]=value;
    };
    return arr;
}
let result = fill(4 , 'a');
console.log( "[4 , a]" ,result);


arr = [1, 2, 3, 4];
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);


arr2 = [1, 2, 3, 4];
console.log( arr2.reverse())
