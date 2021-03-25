
    // the first task

    const elemTestFirst = document.getElementById("test");
    const elemTestSec = document.querySelector("#test");

    elemTestFirst.innerHTML = "Last";
    elemTestSec.innerHTML = "Last"

    // the second task

    const imageForChange = document.querySelector(".image");

    imageForChange.src = "./img/cat.jpeg";
    alert(imageForChange.outerHTML);

    // the third task

    const paragraphs = document.querySelectorAll("#text>p");
    let count = 0;

    paragraphs.forEach(element => {
        document.write("Selector text " + count + ": " + element.textContent + "</br>");
        ++count;
    });

    // the fourth task  

    const listF = document.querySelector("#list");
    const listS = document.getElementById("list");
    const arrayListSec = listF.children;

    
    document.write(listS.firstElementChild.innerHTML + "</br>" + listS.lastElementChild.innerHTML + "</br>" + listS.firstElementChild.nextElementSibling.innerHTML + "</br>" + 
                listS.lastElementChild.previousElementSibling.innerHTML + "</br>" + listS.firstElementChild.nextElementSibling.nextElementSibling.innerHTML + "</br>");
    
    document.write(arrayListSec[0].textContent + "</br>" + 
        arrayListSec[4].textContent + "</br>" +
        arrayListSec[1].textContent + "</br>" +
        arrayListSec[3].textContent + "</br>" +
        arrayListSec[2].textContent + "</br>");

    // the fifth task

    const heading = document.getElementsByTagName("h1");
    const myDiv = document.getElementById("myDiv");
    const myList = document.querySelectorAll("#myList > li");
    const invisibleText = document.getElementsByTagName("span");

    function changeBackgroundColor(elem, color) {
        elem.style.background = color;
    }

    function changeStyleText(element, weightStyle, fontStyle, fontColor, fontDecoration) {
        element.style.fontWeight = weightStyle;
        element.style.fontStyle = fontStyle;
        element.style.color = fontColor;
        element.style.textDecoration = fontDecoration;
    }
    changeBackgroundColor(heading[0], "#90ee90");
    changeStyleText(myDiv.firstElementChild, "bold");
    changeStyleText(myDiv.firstElementChild.nextElementSibling, "normal", "normal", "red");
    changeStyleText(myDiv.lastElementChild.previousElementSibling, "normal", "normal", "normal", "underline");
    changeStyleText(myDiv.lastElementChild, "normal", "italic", "#9a9ca3");

    let horizontalText = myList[0].textContent + myList[1].textContent + myList[2].textContent;

    myList.forEach(element => {
        element.remove();
    });

    document.getElementById("myList").innerHTML += ('<p>'+horizontalText+'</p>');

    // the sixth task

    const firstInput = document.getElementById("input1"),
          secondInput = document.getElementById("input2");

    let userTextForFrInput = prompt("Enter any text", ""),
        userTextForScInput = prompt("Enter any text", "");

    firstInput.value = userTextForFrInput;
    secondInput.value = userTextForScInput;
    firstInput.value = secondInput.value;
    secondInput.value = userTextForFrInput;

        
    //  the seventh task
    
    const section = document.getElementById("seventh_task");

    let mainElement = document.createElement("main");
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");

    section.appendChild(mainElement);
    mainElement.appendChild(divElement);
    divElement.appendChild(pElement);

    mainElement.className = "mainClass check item";
    divElement.id = "myDiv";
    pElement.innerText = "First paragraph";

    
