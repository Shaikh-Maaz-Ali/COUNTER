let entriesEl = document.getElementById("entries-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment() {
    count += 1
    entriesEl.textContent = count 
    }


function save() {
    let entriesStr = count + " - "
    saveEl.textContent += entriesStr
    entriesEl.textContent = 0
    count = 0

}

