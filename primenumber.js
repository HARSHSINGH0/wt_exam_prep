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
