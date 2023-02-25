const resultsDiv = document.querySelector(".results")

textColors = [
  "text-light-red",
  "text-orangey-yellow",
  "text-green-teal",
  "text-cobalt-blue",
]

bgColors = [
  "bg-light-red/5",
  "bg-orangey-yellow/5",
  "bg-green-teal/5",
  "bg-cobalt-blue/5",
]

const data = fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    return data
  })

function createDiv(bgColor, textColor, icon, category, score) {
  let div = document.createElement("div")
  div.classList.add("flex", "justify-between", "p-3", "rounded-md")

  div.classList.add(bgColor)
  div.innerHTML = `
        <div class="flex gap-3">
            <img src=${icon} alt="" />
            <p class=${textColor}>${category}</p>
        </div>
        <p>${score}<span class="text-gray-400">&nbsp;/&nbsp;100</span></p>`

  resultsDiv.appendChild(div)
}

data.then((data) => {
  data.forEach((item) => {
    if (item.category === "Reaction") {
      createDiv(
        bgColors[0],
        textColors[0],
        item.icon,
        item.category,
        item.score
      )
    } else if (item.category === "Memory") {
      createDiv(
        bgColors[1],
        textColors[1],
        item.icon,
        item.category,
        item.score
      )
    } else if (item.category === "Verbal") {
      createDiv(
        bgColors[2],
        textColors[2],
        item.icon,
        item.category,
        item.score
      )
    } else {
      createDiv(
        bgColors[3],
        textColors[3],
        item.icon,
        item.category,
        item.score
      )
    }
  })
})
