// //CODE1
let findSqrt=+prompt("Enter the number",'0');
console.log(findSqrt**(1/2));




//CODE2
let a=+prompt("Enter the first value",'a');
let b=+prompt("Enter the second number",'b');
console.log(a);
console.log(b);

let temp;
temp=a;
a=b;
b=temp;

console.log(a);
console.log(b);


//CODE3
let num=+prompt("Enter the number",'0');
if(num>=1){
    console.log("POSITIVE NUMBER");
}
else if(num<0){
    console.log("NEGATIVE NUMBER");

}
else console.log("ZERO");

//CODE4
function checkPrime(n){
for(i=2;i<n;i++){
        if(n%i==0){
            console.log("Not a Prime Number");
            break;
    }
    else console.log("PrimeNumber")
}

}
let n=+prompt("Enter the number to be checked= ");
console.log(checkPrime(n));


//CODE5

const numb = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= numb; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

 function values(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum+=i;

    }
    return sum;
}
console.log(values(100));

// CODE7
let arr={
    name:"Nikita",age:21
}

// set(arr.entries("example",4));
// arr.phone_no="1111111111"
arr.friend='randeep';
console.log(arr);


//CODE8
let date=new Date();
console.log(date);

//CODE9
let number=+prompt("Enter the number",'0');
if(number%4==0){
    console.log("Leap Year");
}
else{
    console.log("not a leap year");
}

//CODE10
let data=[1,2,3,4,5,6,7,8,9]
console.log(data.length);
let m=+prompt("Enter the item number of which you want to delete the number",'');
data.splice(m,1);
console.log(data);

//CODE11
function sort()
{
    let a;
    let b;
    if(a<b){return a}
    else if(a=b){return a}
    else return b;
}
let value=[1,7,2,9];
console.log(value.sort())