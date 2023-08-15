import './style.css';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js'

function itemCreatorNC(typeOfObj, whatText) {
    const newItem = document.createElement(typeOfObj);
    newItem.textContent = whatText;
 
    return newItem;
 }

 function itemCreator(typeOfObj, typeOfClass, whatText) {
    const newItem = document.createElement(typeOfObj);
    newItem.textContent = whatText;
    newItem.classList.add(typeOfClass);
 
    return newItem;
 }

 function combinator(obj1, ...args) {
    for (let arg of args) {
        obj1.appendChild(arg);
    }
}
 

function initialization() {
    const leftNavMidTop = itemCreatorNC("h1", "Home");
    const leftNavMidMid = itemCreatorNC("h1", "Menu");
    const leftNavMidBot = itemCreatorNC("h1", "Contact");
    const leftNavMid = itemCreatorNC("div", "");
    const leftNavTopH1 = itemCreatorNC("h1", "Aburrido de China");
    const leftNavBot = itemCreator("h1", "call-today-div", "Call Today");
    const leftNav = itemCreatorNC("div", "");


    leftNav.classList.add("left-nav");

    combinator(leftNav, leftNavTopH1, leftNavMid, leftNavBot)
    combinator(leftNavMid, leftNavMidTop, leftNavMidMid, leftNavMidBot)

    for (const child of leftNavMid.children) {
        child.addEventListener('mouseover', () => {
            child.textContent = `* ${child.textContent}`
            child.style.color = "gray";
        })
        child.addEventListener('mouseout', () => {
            child.textContent = `${child.textContent.substring(1)}`
            child.style.color = "white";
    
        })
    }

    document.body.appendChild(leftNav);
    
    leftNavMidTop.addEventListener("click", home);
    leftNavMidMid.addEventListener("click", menu);
    leftNavMidBot.addEventListener("click", contact);
}

initialization();
home();