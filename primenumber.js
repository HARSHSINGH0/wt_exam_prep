var f=require('./primenumber');
var x=3;
if(f.isprime(x)){
    console.log(x+" is not prime number");
}
else{
    console.log(x+" is prime number")
}
var myname="harsh";
console.log("Reverse of "+myname+" is "+f.reverse(myname));
