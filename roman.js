const numerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

document.getElementById('calculate').addEventListener('click',convertToRoman)
function convertToRoman(){
    let num=parseInt(document.getElementById('numberinput').value);
    if(num<1){
        alert("Enter a valid number")
    }
    else{
    let romanconvert = '';
    const dkeys = Object.keys(numerals).reverse();
    dkeys.forEach(function(key){
        while (key <= num) {
            romanconvert += numerals[key];
            num -= key;
        }
    });
    console.log(romanconvert);
    document.getElementById('result').value=romanconvert;
}
}
function clr(){
    document.getElementById('numberinput').value=''
    document.getElementById('result').value=''

}