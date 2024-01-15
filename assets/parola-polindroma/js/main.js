const utente = prompt("Inserisci una parola")





function parolaPalindroma(parola){
   
const lunghezza = parola.length

for(let i = 0 ; i < Math.floor(lunghezza / 2); i++){

   if(parola[i] !== parola[lunghezza - 1 - i]){
    return false 
   }
  
}
return true
    
}

if(parolaPalindroma(utente)){
    console.log("la parola e palindroma")
}else{
    console.log("non e una parola palindroma")
}