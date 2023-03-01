var a = [1,2,3,4,0];
console.log("input " + b);

function findMax(a){
    if(!a || !a.length){
        return "loi"
    }
    let max = a[0];
    for(var i = 0; i < a.length; i++){
        if(max < a[i]){
            max = a[i]
        }
    }
    return max;
}

console.log(findMax(a));