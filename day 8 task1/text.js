function repeate(a){
for (let i = 0; i <a.length; i++) {
    for(let j=i+1;j<a.length;j++){
    if(a[i]==a[j])
    {
        console.log("duplicate element is: "+a[i]);
    }
}
}
}
var arr=[5,10,86,33,5,45,5,20,15,11];
repeate(arr);