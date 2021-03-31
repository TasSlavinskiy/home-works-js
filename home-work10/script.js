    
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
        return new Promise((resolve) => {
            let promise = Promise.resolve(0)
            for (let i = 1; i <= 10; i+=1) {
                promise = promise.then((result) => {
                    console.log(result)
                    return delay(i, Math.floor(Math.random() * 10001))
                })
            }
            resolve(promise)
        });
    }

    showNumbers()

    // the fourth task 

    async function showNumbersWithAsync() {
        for (let i = 0; i <= 10; i++) {
            await delay(i, Math.floor(Math.random() * 10001))
            console.log(i)
        }
    }

    showNumbersWithAsync()

