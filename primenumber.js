module.exports.isprime=function (a) {
    var i;
    for(i=2;i<=(a/2);i++){
        if(a%i==0){
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports.reverse=function(x){
    var s=x.toString();
    var rev="";
    for(var index=x.length-1;index>-1;index--){
        rev+=x[index];

    }
    return(rev);
}

module.exports.Student=function(firstName,lastName,sub1,sub2,sub3,sub4){
    this.firstName=firstName,
    this.lastName=lastName,
    this.sub1=sub1,
    this.sub2=sub2,
    this.sub3=sub3,
    this.sub4=sub4,
    percentage=((this.sub1+this.sub2+this.sub3+this.sub4)/400)*100;
    //return percentage;
    this.displayPercentage=function(){return percentage;}
}
