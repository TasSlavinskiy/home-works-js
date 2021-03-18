
    // the first task

    const elemTestFirst = document.getElementById("test");
    const elemTestSec = document.querySelector("#test");

    elemTestFirst.innerHTML = "Last";
    elemTestSec.innerHTML = "Last"

    // the second task

    const imageForChange = document.querySelector(".image");

    imageForChange.src = "./img/cat.jpeg";
    alert(imageForChange.src);

    // the third task

    const paragraphs = document.querySelectorAll("#text>p");
    let count = 0;

    paragraphs.forEach(element => {
        document.write("Selector text " + count + ": " + element.textContent + "</br>");
        ++count;
    });
