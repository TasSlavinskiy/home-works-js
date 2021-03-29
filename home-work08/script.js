
        // the first task

        console.log(upperCase('regexp'))
        console.log(upperCase('RegExp'))

        function upperCase(word) {
            let t = "String's not starts with uppercase character";
            let f = "String's starts with uppercase character";
            let regexp = /^[A-Z]/;
            return (regexp.test(word)) ?  f : t 
        }

        // the second task

        function checkEmail(email) {
            let regexp = /\S+@\S+\.\S+/;
            return regexp.test(email);
        }

        console.log(checkEmail("Qmail2@gmail.com"));
        console.log(checkEmail("Qmai l2+gmail.com"));

        // the third task

        $(".head").css("background-color", "green").find(".inner").css("font-size", "35px");

        // the fourth task 

        var checkbox = $(".checkbox");
            checkbox.on("click", function() {
                if($(".checkbox:checked").length == 3) {
                    checkbox.attr("disabled", "true");
                }
            })

        // the fifth task

        function getChangeWordPosition(word) {
            let regexp = /(\w+)\s(\w+)/;
            return word.replace(regexp, "$2, $1");
        } 

        console.log(getChangeWordPosition("Java Script"))
        
        // the sixth task

        
