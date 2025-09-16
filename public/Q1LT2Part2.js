process.stdin.on('data', function (data)  { // do not change this line
    let num = parseInt(data.toString().trim()); // convert data input into a numeric integer data type and placed it in num. Do not change this line.
  
    /* - Please work with the num variable in your code.
  
        - No HTML nor CSS needed.  Output is just through console.log
  
        - No prompt, getElementById, alert nor confirm
  
        - just focus on the stated requirements
  
  */
  
     // ------------------------------------- type your script below -----------------------------------/  
    
    
    if(num>0 && num<=100){
        let factorial=1;
        for(let i=2;i<=num;i++){
            factorial=factorial*i;
        }
        console.log("The factorial of "+num+" is: "+factorial);
    } 
    else{
        console.log("Please enter a valid positive number.");
    }
    
    
    
  
  
  
  
  
  
     // ------------------------------------- end of your script  --------------------------------------/    
  
    process.exit();  // stops the process do not remove
  });// do not remove
  
  