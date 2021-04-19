
    // the fifth task

    const { filterFoodPrice } = require('../food')

    const food = [
        { kind: 'potato', price: 10 },
        { kind: 'bred', price: 16 },
        { kind: 'pepper', price: 27 },
        { kind: 'banana', price: 32 },
        { kind: 'lemon', price: 50 }
    ];

    test('Testing function filterFoodPrice', ()=> {
        let min = 12,
            max = 40,
            filtered = filterFoodPrice(food, min, max)

        expect(filtered).toHaveLength(3)
        expect(filtered).toContainEqual({kind: 'pepper', price: 27})
        expect(filtered).toContain(food[2], food[3], food[4])
        expect(filtered[0].price).toBeGreaterThanOrEqual(min)
        expect(filtered[2].price).toBeLessThanOrEqual(max)
        expect(filtered).not.toContainEqual({kind: 'lemon', price: 50})


    })

    