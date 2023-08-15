

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

function imageCreator(typeOfObj, imgSrc) {
    const newItem = document.createElement(typeOfObj);
    newItem.src = imgSrc;

    return newItem;
}

function combinator(obj1, ...args) {
    for (let arg of args) {
        obj1.appendChild(arg);
    }
}

function initializeHome() {
    const rightDiv = document.querySelector(".bg-img");
    const removeDiv = document.querySelector(".helper");
    rightDiv.removeChild(removeDiv);

    const rightBackDiv = itemCreator("div", "helper", "");

    const rightBackDivTop = itemCreator("div", "helper-content", "");

    const rightBackDivTop1 = imageCreator("img", "/Users/liangquanwu/odin-project/restaurant-js/src/images/pexels-cook-eat-772518.jpg");
    const rightBackDivTop2 = itemCreator("div", "helper-content-children", "Hong Shui (运水): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet consectetur odio, sodales tristique ligula. Cras eget finibus dui. Vestibulum a orci rhoncus.");

    const rightBackDivTop3 = imageCreator("img", "/Users/liangquanwu/odin-project/restaurant-js/src/images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg");
    const rightBackDivTop4 = itemCreator("div", "helper-content-children", "Xia Mian (虾面): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet consectetur odio, sodales tristique ligula. Cras eget finibus dui. Vestibulum a orci rhoncus.");

    const rightBackDivTop5 = imageCreator("img", "/Users/liangquanwu/odin-project/restaurant-js/src/images/pexels-keegan-evans-105588.jpg");
    const rightBackDivTop6 = itemCreator("div", "helper-content-children", "Chao Fan (炒饭): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet consectetur odio, sodales tristique ligula. Cras eget finibus dui. Vestibulum a orci rhoncus.");

    combinator(rightDiv, rightBackDiv)
    combinator(rightBackDiv, rightBackDivTop);
    combinator(rightBackDivTop, rightBackDivTop1, rightBackDivTop2, rightBackDivTop3, rightBackDivTop4, rightBackDivTop5, rightBackDivTop6);

}


export default initializeHome;