import '../restaurant-bg.jpg';

const rightSide = itemCreator("div", "bg-img", "");
const rightBackDiv = itemCreator("div", "helper", "");
const rightBackDivH1 = itemCreatorNC("h1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, diam fermentum vulputate dictum, nisl nisl faucibus sem, sed blandit eros leo a mauris. Quisque id fermentum felis, in varius justo. ");
const rightBackDivP = itemCreatorNC("p", " -Paul More, Head Food Critic at the Scenery ");


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

function initializeHome() {
    const rightDiv = document.querySelector(".bg-img")

    if (document.querySelector(".helper") !== null) {
        rightDiv.removeChild(document.querySelector(".helper"));
    }
    combinator(rightBackDiv, rightBackDivH1, rightBackDivP);
    combinator(rightSide ,rightBackDiv)  
    
    document.body.appendChild(rightSide);
    

}

export default initializeHome;