//document.getElementById("count-el").innerText = 5
//ctrl+k+c to change
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch

// console.log(count)

/* let myAge = 24;
 let humanDogRatio = 7
 let myDogAge = myAge * humanDogRatio
 console.log(myDogAge)*/
 
 /*re-assignin of variables
 let count = 5
 count = 3
 console.log(count)*/

 /*let bonusPoint = 50
 bonusPoint -= 25
 bonusPoint += 45*/

 //ONCLICK EVENT LISTENER
//step1 initialize thr count as 0
//step2 listen for clicks on the increment btn
//step3 increment the count variable when the btn is clicked
//step4 change the count-el in the html to reflect the new count

/*function increment() {
    console.log("button was clicked")

}
function countDown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log(0)
}
 countDown()
 countDown()

 

function startCount() {
    console.log(42)
}
startCount()

let lap1 = 12
let lap2 = 14
let lap3 = 23
totalLap = lap1 + lap2 + lap3
console.log(totalLap)

 function totalLap() {
    console.log(totalLap)
 }

 totalLap()*/



 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 let count = 0
 

//create a function that increment the lapCompleted variable with one
//run it three times
function increment() {
    count += 1
    countEl.innerText = count
    }

    //1. create a function'save()', which logs out the count when it's called

    function save() {
        countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }
    




 /*let countEl = document.getElementById("count-el")
 
 
 
 
 //listing for click setup
 
 //console.log(count)

 function increment() {
    count += 1
    
     countEl.innerText = count
     
 }
 increment()

 function save() {
     let countStr = count + " -"
     saveEl.innerText += countStr
     //console.log(count)
 }

 /*let message = "You have three new notification"
 let username = "princewill"
 messageToUser = message + " ," +username + "!"
 console.log(messageToUser)

 let name = "princewill";
 let greeting = "Hi, my name is "
 myGreeting = greeting +  name
 console.log(myGreeting)*/

 