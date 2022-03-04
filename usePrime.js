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
var firstname="Harsh";
var lastname="Singh";
var sub1=10;
var sub2=21;
var sub3=87;
var sub4=91;
//console.log(f.Student(firstname,lastname,sub1,sub2,sub3,sub4));
var student=new f.Student(firstname,lastname,sub1,sub2,sub3,sub4);
console.log("Percentage scored is "+student.displayPercentage());
