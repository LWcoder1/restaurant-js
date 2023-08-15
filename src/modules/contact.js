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

function contactInformation() {
    const rightDiv = document.querySelector(".bg-img");
    const removeDiv = document.querySelector(".helper");
    rightDiv.removeChild(removeDiv);

    const rightBackDiv = itemCreator("div", "helper", "");
    const address = itemCreatorNC("p", "Address: 410 North Chinatown Ave, Lorex, IN, 24135");
    const phone = itemCreatorNC("p", "Phone Number: 645-341-0091");
    const socialMedia1 = itemCreatorNC("p", "Instagram: @Carburrido");
    const socialMedia2 = itemCreatorNC("p", "Twitter: @Carburrido");
    const socialMedia3 = itemCreatorNC("p", "TikTok: @Carburrido");

    combinator(rightBackDiv, address, phone, socialMedia1, socialMedia2, socialMedia3);
    combinator(rightDiv, rightBackDiv);
}

export default contactInformation;