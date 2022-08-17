//let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    document.getElementById("count-el").innerText = count
    
}

function save() {
    let num = " " + count + " -"
    document.getElementById("save-el").textContent += num
    count = 0
    document.getElementById("count-el").textContent = count 
    console.log(count)
}

