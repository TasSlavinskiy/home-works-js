
    // the first task

    console.log(upperCase('regexp'))
    console.log(upperCase('RegExp'))

    function dis(word, regexp) {
        return regexp.test(word); 
    }

    function upperCase(word) {
        let t = "String's not starts with uppercase character";
        let f = "String's starts with uppercase character";

        return (dis(word) === true) ?  t : f 
    }

     // the second task