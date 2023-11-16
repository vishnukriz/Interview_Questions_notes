function SumOfDigits(){
    let num = 467;
    let sum = 0;
    
    while(num>0){
        let quo = Math.floor(num/10);
        let rem = num%10;
        sum = sum + rem;
        num = quo;
    }
    console.log(sum);
    
}
SumOfDigits();

//result:
//17
