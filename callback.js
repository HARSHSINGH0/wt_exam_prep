var calculate=function(x,y,display){
    sum=x+y;
    setTimeout(function(){display(sum);},10000);
    
}
calculate(5,10,function(res){
    console.log("Sum is : "+res);
    console.log("Program Ends");
});
console.log("Doing something else ");
