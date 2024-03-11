const group = ['wajed','ratul','habul','sabuz','wajed','habul',]
function noDuplicate(array) {
    const unique = [];
    for(const item of array ){
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
noDuplicate(group);
console.log(noDuplicate(group));

