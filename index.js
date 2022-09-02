// console.log('hello World');
//Write a JavaScript Program Wheather A Given Number is Prime Or Not..!
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
// console.log(isPrime(143));
//Wap in JavaScript Number of Prime Numbers In a Range
function CountPrimes(n){
    let arr=[];
    if(n<2){
        return arr;
    }
    for(let i=2;i<n;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    return arr;
}

//Wap to print ist 10 Fibbonacci number..
function Fibbonacci(num){
    let arr=[]
    let a=0
    let b=1
    for(let i=0;i<num;i++){
        arr.push(a)
        let c=a+b;
        a=b;
        b=c;
    }
    return arr;
}
// console.log(Fibbonacci(10));

//Wap to print given Number of Fibbonacci series.
function FibbonacciSeries(number){
    let n1=0,n2=1,nextTerm;
    console.log('Fibonacci Series:');
    for (let index = 0; index < number; index++) {
        console.log(n1);
        nextTerm=n1+n2;
        n1=n2;
        n2=nextTerm;
    }
}
// FibbonacciSeries(10)

//Write a Program Print Fibbonacci Number till a Certain Number
function Fibbonacci(num){
    let n1=0,n2=1;
    console.log(`Fibbonacci Series Upto ${num}`);
    console.log(n1);
    console.log(n2);
    nextTerm=n1+n2;
    while(nextTerm<=num){
        console.log(nextTerm);
        n1=n2;
        n2=nextTerm;
        nextTerm=n1+n2;
    }
}
// Fibbonacci(13)

//Nth Fibbonacci Number
// const FiiboNum=(num)=>{
//     if(num===1){
//         return 0;
//     }
//     if(num===2 || num===3){
//         return 1;
//     }
//     return FiiboNum(num-2)+FiiboNum(num-1)
// }

// console.log(FiiboNum(10));


//Write a Program to Return Nth Fibbonacci Number
function NthFiboNacci(num){
    if(num==1){
        return 0;
    }
   else if(num==2 || num==3){
       return 1;
   }else{
       return NthFiboNacci(num-2)+NthFiboNacci(num-1);
   }
}

// console.log(NthFiboNacci(10));

//Write a Program to Return Factorial of a Number
function Factorial(num){
    if(num==0 || num==1){
        return 1;
    }
    else{
        return num*Factorial(num-1);
    }
}
// console.log(Factorial(300));


//Write a Program to return the Whather the Number is a Armstrong Number or Not
// console.log(isArmStrong(153));

function isArmStrong(num){
    let num2=num,last,res=0;
    while(num>0){
        last=num%10;
        res+=last*last*last;
        num=Math.trunc(num/10);
    }
    return res==num2
}
//Write a Program to Define All the ArmStrong Number in a Range
function ArmStrongInRange(lower,upper){
    console.log('ArmStrong Numbers Are:');
    for(let i=lower;i<upper;i++){
        if(isArmStrong(i)){
            console.log(i);
        }
    }
}
// ArmStrongInRange(1,1000)

//Write A JavaScript Program to Reverse a Number
function Reverse(num){
    let res=0;
    while(num>0){
        let last=num%10;
        res=res*10+last;
        num=Math.trunc(num/10)
    }
    return res
}
// console.log(Reverse(567));

//Write a JavaScript Program to Know Wheather a Number is Plaindrome Or Not..!
function isPalindrome(num){
    let res=0;
    let num2=num;
    while(num>0){
        let last=num%10;
        res=res*10+last;
        num=Math.trunc(num/10)
    }
    return res==num2;
}
// console.log(isPalindrome(12201));


let a="dilu"

const Plaindrome=(a)=>{
    let ans=""
    for(let i=a.length-1;i>=0;i--){
        ans+=a.charAt(i)
    }
    return ans===a;
}

// console.log(Plaindrome(""));
