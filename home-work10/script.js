    
    // the first task

    // function getPromise(message, delay) {
    //     return new Promise( function(resolve, reject) {
    //        try {
    //            setTimeout( ()=> resolve(message), delay)
    //        } catch (error) {
    //            reject(error)
    //        }
    //     })
    // }

    function getPromise(message, delay) {
        return new Promise(resolve => setTimeout(resolve(message), delay))
    }

    getPromise("test promise", 2000).then( (data) => {
        console.log(data);	
    });

    // the second task

    function checkArray(array) {
        return array.every(elem => typeof elem === 'number')
    }

    function culcArra(array) {
        let result = 1;
        array.every(elem => result *= elem)
        return result
    }


    function calcArrProduct(array) {
        return new Promise( (resolve, reject) => {
          if (checkArray(array) === true) {
              resolve(culcArra(array))
          } else {
              reject(new Error("Error! Incorrect array!"))
          }
        })
    }

    calcArrProduct([3,4,5]).then(result => console.log(result)); 
    calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

    // the third task

    

    const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

    function showNumbers() {
        for (let i = 0; i < 10; i++) {
            console.log(i)
        }
    }