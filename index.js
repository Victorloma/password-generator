const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.querySelector("button")
let pw1 = ""
let pw2 = ""
let pw1El = document.querySelector('.pw1')
let pw2El = document.querySelector('.pw2')

btn.addEventListener("click", function(){
    pw1 = ""
    pw2 = ""
    for (let i =0; i<15; i++){
        pw1 += characters[Math.floor(Math.random()*characters.length)]
        pw2 += characters[Math.floor(Math.random()*characters.length)]
    }
    pw1El.textContent = pw1
    pw2El.textContent = pw2
})
