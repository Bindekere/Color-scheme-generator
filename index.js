const schemeOptions = document.getElementById("color-scheme")
const display = document.querySelectorAll(".color")
const btn = document.getElementById("color-btn")
let colorChoice = document.getElementById("color-choice")
const displayToArray = Array.apply(null, display);

console.log(schemeOptions.value)
colorChoice.addEventListener("input",()=>{
    colorChoice = document.getElementById("color-choice").value.replace("#","")
    console.log(colorChoice)
})

btn.addEventListener("click",()=>{
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorChoice}&mode=${schemeOptions.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < displayToArray.length || i < data.colors.length; i++){
                // took a while to research this for loop but thank God for stackoverflow!
                displayToArray[i].style.background = String(data.colors[i].hex.value)
            }
            // looking at other people's code they approached the project like this
            // but i felt it was not DRY enough.
            // displayToArray[0].style.background = String(data.colors[0].hex.value)
            // displayToArray[1].style.background = String(data.colors[1].hex.value)
            // displayToArray[2].style.background = String(data.colors[2].hex.value)
            // displayToArray[3].style.background = String(data.colors[3].hex.value)
            // displayToArray[4].style.background = String(data.colors[4].hex.value)
        })
})


