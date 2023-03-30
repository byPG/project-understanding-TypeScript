function combine(input1: number | string, input2: number | string) { //union types - pozwolenie na dwa typy danych
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

    const combinedAges = combine(30, 23);
    console.log(combinedAges);

    const combineNames = combine('Max', 'Anna');
    console.log(combineNames);
