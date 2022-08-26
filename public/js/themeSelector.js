window.addEventListener("DOMContentLoaded", function() {

const listTheme = document.querySelectorAll("#theme")
const selectors = document.querySelectorAll(".slide__selector")

function removeClass() {
selectors.forEach(e => {
    e.classList.remove("slide__selector--active")
})
}

function themeChanger(id) {
    listTheme.forEach(e => {
        e.classList.remove("th1", "th2", "th3")
        e.classList.add(`th${id}`)
    })
}

selectors.forEach((selector) => {
selector.addEventListener("click", (e) => {
if(e.target.classList.contains("slide__selector--active")) return;
removeClass();
e.target.classList.add("slide__selector--active")
const id = e.target.attributes._id.value;
themeChanger(id)
         
})
})
})