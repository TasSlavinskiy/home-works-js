
        // the third task

        const { getCircleLength } = require('../calcCircle')
        const { getCircleArea } = require('../calcCircle')

        test('Testing the length circle', ()=> {
            expect(getCircleLength(22)).toBeCloseTo(138.2, 1)
            expect(getCircleLength()).toBeNaN()
        });

        test('Testing the area circle', ()=> {
            expect(getCircleArea(9)).toBeCloseTo(254.47)
            expect(getCircleArea()).toBeNaN()
        });

        