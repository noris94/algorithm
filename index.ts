/*
    Given an input string: aaaabbccc, 
    return true if it is shorter than its smashed string a4b2c3, 
    and false otherwise. 
    Example 1: Input: ab Output: true 
    ////////////////////////////// 
    Example 2: Input: aabbcccd Output: false.
*/

const validateInput = (input:string):boolean=>{
    let previousLetter = input[0];
    let count=0;
    let finalString='';
    for (let i = 0; i < input.length; i++) {
        const currentLetter = input[i];
        if(currentLetter===previousLetter){
            count++;
        }else{
            finalString+=`${previousLetter}${count}`
            count=1;
        }
        previousLetter=currentLetter;
    }

    finalString+=`${previousLetter}${count}`

    console.log({input,finalString})

    return input.length<finalString.length;
}


const inputs = [
    'aaaabbccc',
    'ab',
    'aabbcccd'
];

inputs.forEach(input=>{
    const result = validateInput(input);
    console.log({result});
})
