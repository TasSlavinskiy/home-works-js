    // the first task

    let mentor = { 
        course: "JS fundamental", 
        duration: 3,
        direction: "web-development" 
    };

    function propsCount(obj) {
       let count = 0;
       for (const key in obj) {
           if (obj.hasOwnProperty(key)) {
               ++count;
           }
       }
       return count;
    }

    console.log(propsCount(mentor));

    // the second task

    let myObj = {
        firstName: "Alina",
        secondName: "Chehis",
        age: 30, 
        position: "Disigner",
        companyName: "Global Logic"
    }

    function showProps(obj) {
        let propsArray = [];

        for (const [key, value] of Object.entries(obj)) {
            propsArray.push(value);
        }
        return propsArray;
    }

    console.log(showProps(myObj));

    // the third task

    class Person {
        constructor(name, surename) {
            this.name = name;
            this.surename = surename;
        }

        showFullName() {
            return this.name + ' ' + this.surename;
        }
    }

    class Student extends Person {
        constructor(name, surename, year) {
            super(name, surename);
            this.year = year;
        }

        showFullName(midlename) {
            return super.showFullName() + ' ' + midlename;
        }

        showCourse() {
            let date = new Date().getFullYear();
            let course = date - this.year;
            if ( course > 6 ) course = "This student " + super.showFullName() + ", completed University!"
            return course;
        }
    }

    let student1 = new Student("Petro", "Petrenko", 2015);
    console.log(student1.showFullName("Petrovych"))
    console.log("Current course: " +student1.showCourse());

    // the fourth task

    class Worker {
        
        #experience = 1.2;

        set experience(experience) {
            this.#experience = experience;
        }

        get experience() {
            return this.#experience;
        }

        constructor(fullName, dayRate, workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
        }

        showSalary() {
            return console.log(this.fullName + ' salary: ' + (this.dayRate * this.workingDays));
        }

        showSalaryWithExperience() {
            return console.log(this.fullName + ' salary: ' + ((this.dayRate * this.workingDays) * this.#experience));
        }

    }

    let worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);                 
    worker1.showSalary();
    console.log("New experience: " + worker1.experience);
    worker1.showSalaryWithExperience();
    worker1.experience = 1.5;
    console.log("New experience: " + worker1.experience);
    worker1.showSalaryWithExperience();

    let worker2 = new Worker("Tom Tomson", 48, 22);
    console.log(worker2.fullName);                 
    worker2.showSalary();
    console.log("New experience: " + worker2.experience);
    worker2.showSalaryWithExperience();
    worker2.experience = 1.5;
    console.log("New experience: " + worker2.experience);
    worker2.showSalaryWithExperience();

    let worker3 = new Worker("Andy Ander", 29, 23);
    console.log(worker3.fullName);                 
    worker3.showSalary();
    console.log("New experience: " + worker3.experience);
    worker3.showSalaryWithExperience();
    worker3.experience = 1.5;
    console.log("New experience: " + worker3.experience);
    worker3.showSalaryWithExperience();

    // the fifth task

    class GeometricFigure {

        constructor(name) {
            this.name = name;
        }
    
        getArea() {
            return 0;
        }

        toString() {
            return this.name;
        }
    }

    class Triangle extends GeometricFigure {
        constructor(sideA, sideB, sideC) {
            super('Triangle');
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
        }

        getArea() {
            let s = (this.sideA + this.sideB + this.sideC) / 2;
            return Math.sqrt( s * ( s - this.sideA ) * ( s - this.sideB ) * ( s - this.sideC ));
        }
    }

    class Square extends GeometricFigure {
        constructor(side) {
            super('Square');
            this.side = side;
        }

        getArea() {
            return this.side *= this.side;
        }
    }

    class Circle extends GeometricFigure {
        constructor(diameter) {
            super('Circle');
            this.diameter = diameter;
        }

        getArea() {
            let r = this.diameter / 2;
            return Math.PI * (r * r);
        }
    }

    const figures = [new Triangle(4, 5, 5), new Square(7), new Circle(5)];

    function handleFigures(figures) {
        let totalArea = 0;
        figures.reduce( (total, currentValue) => {
            totalArea = total + currentValue.getArea();
            if (currentValue instanceof GeometricFigure) {
                return console.log("Geometric figure: " + currentValue.toString() + " - area: " + currentValue.getArea());
            }
        });
        return console.log("Total area: " + totalArea);
    }

    console.log(handleFigures(figures));
