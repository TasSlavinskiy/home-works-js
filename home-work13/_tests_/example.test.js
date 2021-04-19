
    // the first task

    test('Expect result suming 0.1 + 0.2', ()=> {
        const summNumber = 0.1 + 0.2
        expect(summNumber).toBeCloseTo(0.3)
    })

    // the second task

    const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

    test('Expect specific users from array', ()=> {
        expect(userList).toContain('admin')
        expect(userList[0]).toBe('Nick')
        expect(userList[userList.length - 1]).toBe('new_user_2')
        expect(userList).toHaveLength(5)
        expect(typeof userList[3] === 'string').toBeTruthy()
        expect(userList[8] === undefined).toBeTruthy()
    })



