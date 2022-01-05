const translate = require('./piglatin');


test('words beginning with vowel a' , () => {

    expect(translate("about")).toBe("aboutway");
})

test('words beginning with vowel e' , () => {

    expect(translate("explore")).toBe("exploreway");
})

test('words beginning with vowel i' , () => {

    expect(translate("inner")).toBe("innerway");
})

test('words beginning with vowel o' , () => {

    expect(translate("oval")).toBe("ovalway");
})

test('words beginning with vowel u' , () => {

    expect(translate("up")).toBe("upway");
})

test('words beginning with uppercase' , () => {

    expect(translate("JaCoyia")).toBe("acoyiajay");
})

test('words beginning with consonant' , () => {

    expect(translate("berry")).toBe("errybay");
})

test('words beginning with consonant' , () => {

    expect(translate("barry")).toBe("arrybay");
})

test('words beginning with two consonant' , () => {

    expect(translate("black")).toBe("ackblay");
})

test('words beginning with three consonant' , () => {

    expect(translate("three")).toBe("eethray");
})


