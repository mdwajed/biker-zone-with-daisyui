const mobile = {
    brand: 'samsung',
    price: 35000,
    color: 'red',
    camera: '10px',
    screen: '16cm'
}
console.log(mobile);
for(prop in mobile){
    console.log(prop,mobile[prop]);
    //console.log(mobile[prop]);
}
const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,':', mobile[key]);
}