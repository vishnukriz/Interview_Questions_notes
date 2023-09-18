function prime(){
    
    for(let i=2;i<10;i++){
        let isPrime = true;
        for(let j=2;j<i;j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
            
        }
       if(isPrime) console.log(i);
    }
}
prime();

/**
2
3
5
7
**/
