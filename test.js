const LUCKY_NUMBER = 5
let chances=0
let attempts=0
let text = 'try again....'
function check(val){
   
    let guessedNumber = document.getElementById("inputNumber").value
    if(val.innerHTML === 'Check'){
        chances=1    
    }
    else if(val.innerHTML === 'Start Over')
        chances=2 
    else if(val.innerHTML === 'Try Again')  
        chances = 3   

            if(guessedNumber == LUCKY_NUMBER){
                attempts++;
                text = chances+':Chances and '+attempts+':Attempts'
                document.getElementById("inputNumber").disabled = true
            }
            else{
                attempts++;
                if(chances == 1 && attempts == 3){
                    document.getElementById("checkButton").innerHTML = 'Start Over'
                    attempts = 0
                 
                }
                else if(chances == 2 && attempts == 3){
                    document.getElementById("checkButton").innerHTML = 'Try Again'
                    attempts = 0
                    
                }
                else if(chances == 3 && attempts == 3){
                    chances++
                    text = "Exhausted"
                }
                
            }
        
        
        document.getElementById("message_div").innerHTML = text
    
      
      
}