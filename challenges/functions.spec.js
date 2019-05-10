const { consume, add, multiply, greeting } = require('./functions')

describe('functions.js', () => {
    describe('consume add callback function', () => {
        it('can add two numbers', () => {
            const expectedOutput = 19
            const actualOutput = consume(18, 1, add)
            expect(actualOutput).toBe(expectedOutput)
        })
    })
})

describe('functions.js', () => {
    describe('consume multiply callback function', () => {
        it('can multiply two numbers', () => {
            const expectedOutput = 12
            const actualOutput = consume(2, 6, multiply)
            expect(actualOutput).toBe(expectedOutput)
        })
    })
})

describe('functions.js', () => {
    describe('consume greeting callback function', () => {
        it('takes in a first and last name, then outputs a greeting', () => {
            const expectedOutput = 'Hello Andrew Brudnak, nice to meet you!'
            const actualOutput = consume('Andrew', 'Brudnak', greeting)
            expect(actualOutput).toBe(expectedOutput)
        })
    })
})