
    // the first task

    let arr = ["Tom", "Sam", "Ray", "Bob"];

    let [x, y, , ...z] = arr;

    console.log(x);
    console.log(y);
    console.log(z);

    // the second task

    let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
    };

    let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

    console.log(name2);
    console.log(age2);
    console.log(name4);
    console.log(age4);

    // the third task

    function mul(...rest) {
        let tmp = 1
        let count = 0

        for (let i = 0; i <= rest.length; i++) {
            if (typeof rest[i] === 'number') {
                tmp *= rest[i]
                count++
            }
        }

        return (count === 0) ? count : tmp

    }
    
    console.log(mul(1, "str", 2, 3, true)); // 6
    console.log(mul(null, "str", false, true)); // 0

    // the fourth task 

    let server = {
        data: 0,
        convertToString: (callback) => {
            callback(( () => {
                return server.data + "";
            }));
        }
    };
    let client = {
        server: server,
        result: "",
        calc: (data) => {
            client.server.data = data;
            client.server.convertToString(client.notification());
        },
        notification: () => {
            return ( (callback) => {
                client.result = callback();
            });
        }
    };
    client.calc(123);
    console.log(client.result);
    console.log(typeof client.result); 

    // the fifth task

    let keys = [1, 2, 3, 4];
    let values = ["div", "span", "b", "i"];
    let map = mapBuilder(keys, values);

    function mapBuilder(keys, values) {
        let map = new Map();
        let count = 0;
        keys.forEach(element => {
            console.log(element + " : " + values[count])
            map.set(element, values[count])
            count++;
        });
        return map
    }

    console.log(map.size); // 4
    
	console.log(map.get(2)); // "span"