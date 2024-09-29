function squareRoot(){
    let num = 81;
    for(let i=0; i*i<=num;i++){
        if(i*i === num) {
            console.log("Perfect Square Number");
            console.log("Square Root", i);
            return;
        }
    }
    console.log("Not a perfect square number");
}
squareRoot()

// 0,1,2,3,4




