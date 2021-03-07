// the first task

    let arr = [2, 3, 4, 5];

    let resultFor = 1;

    for (let i = 0; i < arr.length; i++) {
        resultFor *= arr[i];
    }
    console.log(resultFor);

    let resultWhile = 1;
    let x = 0;

    while(x < arr.length) {
        resultWhile *= arr[x];
        x++;
    }
    console.log(resultWhile);

// the second task

    for (let y = 0; y <= 15; y++) {
        if (y % 2 == 0) {
            console.log(y + " is even.")
        } else {
            console.log(y + " is odd.")
        }
    }

// the third task

    function randArray(k) {
        let arr = new Array(k);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(Math.random() * 500);
        }
        return arr;
    }

    console.log(randArray(5));

// the fourth task 

    function raiseToDegree(a,b) {
        let pow = a;
        for (let i = 1; i < b; i++) {
            pow *= a;
        }
        return pow;
    }

    function checkNum() {
        let num = Number(prompt("Enter any number.", ));
        while(isNaN(num) || num === 0 || num < 1 || !((num ^ 0) === num)) {
            num = Number(prompt("Value not supported, use natural number", ));
        }
        return num;
    }

    console.log(raiseToDegree(checkNum(), checkNum()));

// the fifth task

    function findUnique() {
        let minValue = Math.min.apply(Math, arguments);
        return minValue;
    }

    console.log(findUnique(12, 14, 4, -4, 0.2));

// the sixth task

    function findUnique(array) {
        let result = new Set(array).size !== array.length;
        (result === true) ? result = false : result = true;  
        return result;
    }

    console.log(findUnique([1, 2, 3, 5, 3]));
    console.log(findUnique([1, 2, 3, 5, 11]));

//  the seventh task

    function lastElem(array, numOfElem) {
        let newArray = [];
        let sliceArray = array.slice(-numOfElem);
        for (const key in sliceArray) {
            newArray.push(key);
        }
        newArray.push(array[array.length - 1]);
        return newArray;
    }

    console.log(lastElem([3, 4, 10, -5]));     
    console.log(lastElem([3, 4, 10, -5],2));   
    console.log(lastElem([3, 4, 10, -5],8));

//  the eighth task

    function toUpperCase(str) {
        return str.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
    }

    console.log(toUpperCase("i love java script"));

    

    