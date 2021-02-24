
    
        // the second task
    console.log("Slavinskiy");

        // the third task
        //  a    
    let first;
    let second;
        //  b
    first = "first";
    second = "second";
        //  c
    document.write(first + "<br \/>" + second + "<br \/>");
        //  d
    second = first;
        //  e
        document.write(first + "<br \/>" + second + "<br \/>");

        // the fourth task
    const myObject = {
        "String": "some string",
        "Number": 1,
        "Boolean": true,
        "Undefined": undefined,
        "Null": null
    }

        // the fifth task
    let isAdult = confirm("Are you over 18 years old?");
    
    console.log(isAdult);

        // the sixth task
    const firstName = "Taras",
          secondName = "Slavinskiy",
          studyGroup = "JavaScript for TA [retraining]",
          yearOfBirth = 1993,
          maritalStatus = false;
          
    console.log(typeof yearOfBirth);
    console.log(typeof maritalStatus);
    console.log(typeof firstName, typeof secondName, typeof studyGroup);

    const arbitraryVariableNull = null,
          arbitraryVariableUndefined = undefined;

    console.log(typeof arbitraryVariableNull);
    console.log(typeof arbitraryVariableUndefined);


        //  the seventh task
    let login = prompt("Please enter your login", "");
    let email = prompt("Please enter your email", "");
    let password = prompt("Please enter your password", "");

    document.write("Dear User, your login is " + login + "<br \/>" + "your email is " + email + "<br \/>" + "your password is " + password + "<br \/>");

        //  the eighth task
    const secondsPerHour = 60 * 60;
    const secondsPerDay = secondsPerHour * 24;
    const secondsPerMonth = secondsPerDay * 30;

    document.write("Seconds per hour: " + secondsPerHour + "<br \/>" + 
                    "Second per day: " + secondsPerDay + "<br \/>" + 
                    "Second per month: " + secondsPerMonth);


