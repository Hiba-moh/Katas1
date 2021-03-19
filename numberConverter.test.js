const convert = require('./numberConverter')

describe('Numbers',()=>{
    test('0 converted to zero',()=>{
expect(convert(0)).toBe('zero')
    })
})