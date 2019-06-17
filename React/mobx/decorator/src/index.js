function log(target){
    const desc=Object.getOwnPropertyDescriptors(target.prototype);

    for(const key of Object.keys(desc)){
        if(key==='constructor'){
            continue;
        }
    }
}

@log

class Numberic {
    PI=3.1415926;
    add(...nums){
        return nums.reduce((p,n)=>(p+n),0)
    }
}