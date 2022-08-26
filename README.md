# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

(./screen.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/Nico-2b/CalculatorApp.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript

### What I learned

Improve my HTML, CSS and JS skills.


The CSS tool grid code which does the Numpad :
```css
.appContent__numpad {
    width: 100%;
    padding: 2rem;
    height: 39rem;
    border-radius: 1.5rem;
    display: grid;
    gap: 1.9rem;
    grid: 
    "h i j DEL"1fr
    "e f g plus"1fr
    "b c d minus"1fr
    "dec a factor multiplier" 1fr
    "RESET RESET equal equal" 1.1fr/ 1fr 1fr 1fr 1fr
    ;
    

}
```

The JS code which does the theme changer.
```js
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
```

## Author
- Frontend Mentor - [Nicolas Fanti](https://www.frontendmentor.io/profile/Nico-2b)
- Instagram - [nicofanti_](https://www.instagram.com/nicofanti_/?hl=fr)


