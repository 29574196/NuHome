for(let i = 1;i<= 500;i++){
    let prime = true;
    for(let j = 1;j<i;j++){
        if(i % j === 0 && j !== 1){
            prime = false
        }
    }
    if(prime){
        console.log('FiZZBUZZ++'); 
    }
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FiZZBUZZ'); 
    }else
    if(i % 3 === 0){
        console.log('FiZZ'); 
    }else
    if(i % 5 === 0){
        console.log('BUZZ');
    }
}