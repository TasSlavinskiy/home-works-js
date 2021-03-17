// the first task

    function calcRectangleArea(x, y) {
        let s;
        try {
            s = x * y;
            if (isNaN(x) || isNaN(y) || x === 0 || y === 0 || x === null || y === null || x === undefined || y === undefined)  
            throw new TypeError("Error passed parameters! The function accepts only numeric parameters!");

            return s;
        } catch (exception) {
            console.log(exception.name);
            console.log(exception.message);
        }
    }

    console.log(calcRectangleArea(3, 5));
    console.log(calcRectangleArea(5));
    console.log(calcRectangleArea("asdasd", 5));


// the second task

    function checkAge() {
        let age;
        try {
            age = Number(prompt("Pleas, set your age!", ));

            if (isNaN(age))
            throw new TypeError("You entered not a number value. Please, try again later.");

            if (age === '' || age === undefined || age === null || age <= 0)
            throw new SyntaxError("The field is empty! Please enter your age.");

            if (age <= 14)
            throw new RangeError("Age is not allowed!");

            return "You have access to watch the movie";

        } catch (exception) {
            console.log(exception.name);
            console.log(exception.message);
        }
    }

    console.log(checkAge());

// the third task

    class MonthException {

        constructor(message) {
            this.name = 'MonthException';
            this.message = message;
        }
    }

    function showMonthName(month) {
        const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let resultMonth;
        try {
            resultMonth = allMonths[month - 1];

            if (isNaN(month) || month === undefined || month === null)
            throw new TypeError("Invalid type.")

            if (month <= 0 || month >= (allMonths.length - 1))
            throw new MonthException("Incorrect month number");
            
            return resultMonth;
        } catch (exeption) {
            console.log(exeption.name + ' ' + exeption.message)
        }
    }

    console.log(showMonthName(5));
    console.log(showMonthName(14));

// the fourth task

    class NegativeId {

        constructor(message) {
            this.name = 'NegativeId';
            this.message = message;
        }
    }

    function showUser(id) {
        let user = {
            id: ''
        }
        try {
            user.id = id;
            if (id < 0) throw new NegativeId('Error: ID must not be negative: ' + id);
            return user;
        } catch (exeption) {
            console.log(exeption.name + ' ' + exeption.message);
        }
    }

    console.log(showUser(12));
    console.log(showUser(-12));

    function showUsers(ids) {
        let users = [];
        for (let i = 0; i < ids.length; i++) {
            users.push(showUser(ids[i]));
        }
        users = users.filter(function(x) {
            return x !== undefined && x !== null; 
        });
        return users;
    }

    console.log(showUsers([7, -12, 44, 22]));

