let saveEl = document.getElementById("save-el")
let countEl = document.getElementsByClassName("count-el")[0]
let count = 0
let sumCount = 0
let sumArray = []

console.log(countEl)
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr

    
    sumArray.push(count)
    
    countEl.textContent = 0
    count = 0
    
}

function sum(){
    for (let index = 0; index < sumArray.length; index++) {
        sumCount += sumArray[index]
        
    }
    console.log(sumCount)

    document.getElementById("sumresult").textContent += sumCount
}
