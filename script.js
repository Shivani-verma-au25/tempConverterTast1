function TempratureCalc() {
    let inputTem = document.querySelector('#c').value;
    // console.log(inputTem);
    let selctTemp = document.querySelector('#scl')
    let valOfselct = scl.options[selctTemp.selectedIndex].value
    // console.log(valOfselct);


    function celsiTofarh(celsi){
        let fah = parseFloat((celsi*9/5)+32).toFixed(2)
        // console.log(`${fah} farh`);
        // document.querySelector('cl').innerHTML = `${ans}°C`
        return fah
    }
    function farhTcels(farh){
        let cls = parseFloat((farh-32)*5/9).toFixed(2)
        // console.log(`${cls} cels`);
        return cls
    }

    function kaltocel(kal){
        let kl = parseFloat(kal - 273.15).toFixed(2)
        // console.log(`${cls} cels`);
        return kl
    }
    
    let ans;
   

    if (valOfselct == 'cel') {
        ans = celsiTofarh(inputTem)
        document.querySelector('#n').innerHTML = `${ans}°F`
        document.querySelector('p').innerHTML = `Celsius to Fahrenheit`
    } else if( valOfselct == 'Fah') {
        ans = farhTcels(inputTem)
        document.querySelector('#n').innerHTML = `${ans}°c`
        document.querySelector('p').innerHTML = ` Fahrenheit to Celsius`

        // console.log();
    }else{
        ans = kaltocel(inputTem)
        document.querySelector('#n').innerHTML = `${ans}°c`
        document.querySelector('p').innerHTML = ` Kalvin to Celsius`

    }

    
    
}

document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault()
    TempratureCalc()
})