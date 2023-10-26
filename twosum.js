var twoSum = function(nums, target) {
  let res = [];
  for(let i=0 ; i < nums.length ;i++){
    for( let j=i+1 ;j < nums.length ; j++){
        if(nums[i]+nums[j] === target){
        res.push([i,j])
        }
    }
}
return res;
};

const l = [2,7,11,3,15,6];
console.log(typeof(l));
console.log(typeof(l[1]))
if(typeof(l) === "object"){
    console.log("array");
}else{
    console.log("not array");
}
console.log(twoSum(l,9));