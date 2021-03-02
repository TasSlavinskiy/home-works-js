
// the first task

    let x = 1;
    let y = 2;

    let res1 = 1 + "" + 2;

    console.log(res1); 
    console.log(typeof res1);

    let res2 = (x == true) + "" + y;

    console.log(res2); 
    console.log(typeof res2);
    
    let res3 = x != y;
    
    console.log(res3); 
    console.log(typeof res3); 

    let res4 = x + y + NaN;

    console.log(res4);
    console.log(typeof res4);

// the second task

    let num = Number(prompt("Enter please any number", ));

     (num % 2 == 0 && num > 0) ? console.log("Your number " + num + " is even and positive.") : console.log("Your number " + num + " is not even or positive.");
     (num % 7 == 0 && num != 0) ? console.log("Your number " + num + " multiple to 7.") : console.log("Your number " + num + " not multiple to 7.");

// the third task

    let arr = [];

    arr.push(1, "string", true, null);
    alert(arr.length);

    let userValue = prompt("Enter eny value.", );
    arr.push(userValue);
    alert(arr[4]);

    arr.splice(0, 1);
    alert(arr);

// the fourth task    

    let cities = ["Rome", "Lviv", "Warsaw"];

    console.log(cities.join("*"));

// the fifth task

    let isAdult = Number(prompt("Please enter your age.", ));

    if(isNaN(isAdult) || isAdult === 0) {
        alert("You didn't enter numbers.");
    } else if(isAdult >= 18) {
        alert("You have reached age majority.");
    } else if(isAdult <= 10) {
        alert("You are too much young.");
    } else {
        alert("You are a teenager");
    }

// the sixth task

    let triangleSideA = Number(prompt("Please enter the length of a triangle of side A", )),
        triangleSideB = Number(prompt("Please enter the length of a triangle of side B", )),
        triangleSideC = Number(prompt("Please enter the length of a triangle of side C", ));

    if (isNaN(triangleSideA) || triangleSideA <= 0 || isNaN(triangleSideB) || triangleSideB <= 0 || isNaN(triangleSideC) || triangleSideC <= 0 ) {
        alert("Incorrect data");
    } else {
        if (triangleSideA == triangleSideB && triangleSideB == triangleSideC) {
            console.log("Triangle is equilateral");
        } else if (triangleSideA === triangleSideB || triangleSideA === triangleSideC || triangleSideB === triangleSideC) {
            console.log("Triangle is isosceles");
        } else {
            console.log("Triangle is scalene");
        }

        let p = (triangleSideA + triangleSideB + triangleSideC) / 2;
        console.log("Area of a triangle - " + Math.sqrt(p*(p-triangleSideA)*(p-triangleSideB)*(p-triangleSideC)));
    }

//  the seventh task

    let currentTime = new Date().getHours();

    console.log(currentTime);
    
    if (currentTime <= 5) {
        console.log("Good night");
    } else if (currentTime <= 11) {
        console.log("Good morning");
    } else if (currentTime <= 17) {
        console.log("Good day");
    } else if (currentTime <= 23) {
        console.log("Good evening");
    }

