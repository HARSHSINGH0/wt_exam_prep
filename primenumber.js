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