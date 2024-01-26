const call = async (name) => {
    const promise = await fetch('https://allforonehosting.azurewebsites.net/controller/SayHell/' + name);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p2Text = document.getElementById("p2Text")
let p2Enter = document.getElementById("p2Enter")
let p2Input = document.getElementById("p2Input")
if (p2Text) {
    p2Input.addEventListener('keydown', async (event) => {
        if (p2Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            if (event.key === 'Enter') {
                let word = await call(event.target.value)
                p2Text.textContent = word;
                p2Input.value = "";
            }
        }


    })
    p2Enter.addEventListener('click', async () => {
        if (p2Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            let word = await call(p2Input.value)
            p2Text.textContent = word;
            p2Input.value = "";
        }

    })
}


// -------------------------------------------------------

let p3Text = document.getElementById("p3Text")
let p3Enter = document.getElementById("p3Enter")
let p3Input1 = document.getElementById("p3Input1")
let p3Input2 = document.getElementById("p3Input2")

const call3 = async (number1, number2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Add2Numbers/Adding2Num/${number1}/${number2}`);
    const data = await promise.text();

    console.log(data)
    return data;

}
if (p3Text) {
    p3Enter.addEventListener('click', async () => {
        if (p3Input1.value === '' || p3Input2.value === "") {
            console.log("fsdfsfdsfd")
        } else {
            console.log("Sf")
            let word = await call3(p3Input1.value, p3Input2.value)
            p3Text.textContent = word;
            p3Input1.value = "";
            p3Input2.value = "";
        }

    })
}
//-----------------------------------------------------------

let p4Text = document.getElementById("p4Text")
let p4Enter = document.getElementById("p4Enter")
let p4Input1 = document.getElementById("p4Input1")
let p4Input2 = document.getElementById("p4Input2")

const call4 = async (number1, number2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Ask2Questions/Ask2Questions/${number1}/${number2}`);
    const data = await promise.text();

    console.log(data)
    return data;

}
if (p4Text) {
    p4Enter.addEventListener('click', async () => {
        if (p4Input1.value === '' || p4Input2.value === "") {
            console.log("fsdfsfdsfd")
        } else {
            console.log("Sf")
            let word = await call4(p4Input1.value, p4Input2.value)
            p4Text.textContent = word;
            p4Input1.value = "";
            p4Input2.value = "";
        }

    })
}
//-----------------------------------------------------------
let p5Text = document.getElementById("p5Text")
let p5Enter = document.getElementById("p5Enter")
let p5Input1 = document.getElementById("p5Input1")
let p5Input2 = document.getElementById("p5Input2")

const call5 = async (number1, number2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${number1}/${number2}`);
    const data = await promise.text();

    console.log(data)
    return data;

}
if (p5Text) {
    p5Enter.addEventListener('click', async () => {
        if (p5Input1.value === '' || p5Input2.value === "") {
            console.log("fsdfsfdsfd")
        } else {
            console.log("Sf")
            let word = await call5(p5Input1.value, p5Input2.value)
            p5Text.textContent = word;
            p5Input1.value = "";
            p5Input2.value = "";
        }

    })
}
//----------------------------------


const call6 = async (gender, name, age, color, pronoun, food, job, adjective1, adjective2, noun) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/MadLib/MadLib/${gender}/${name}/${age}/${color}/${pronoun}/${food}/${job}/${adjective1}/${adjective2}/${noun}`);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p6Text = document.getElementById("p6Text")
let p6Enter = document.getElementById("p6Enter")
let p6Input1 = document.getElementById("p6Input1")
let p6Input2 = document.getElementById("p6Input2")

let p6Input3 = document.getElementById("p6Input3")
let p6Input4 = document.getElementById("p6Input4")
let p6Input5 = document.getElementById("p6Input5")
let p6Input6 = document.getElementById("p6Input6")
let p6Input7 = document.getElementById("p6Input7")
let p6Input8 = document.getElementById("p6Input8")
let p6Input9 = document.getElementById("p6Input9")
let p6Input10 = document.getElementById("p6Input10")

if (p6Text) {
    p6Enter.addEventListener('click', async () => {
        if (p6Input1.value === '' || p6Input2.value === "" || p6Input2.value === "" || p6Input3.value === "" || p6Input4.value === "" || p6Input5.value === "" || p6Input6.value === "" || p6Input7.value === "" || p6Input8.value === "" || p6Input9.value === "" || p6Input10.value === "") {
            console.log("fsdfsfdsfd")
        } else {
            console.log("Sf")
            let word = await call6(p6Input1.value, p6Input2.value, p6Input3.value, p6Input4.value, p6Input5.value, p6Input6.value, p6Input7.value, p6Input8.value, p6Input9.value, p6Input10.value)
            p6Text.textContent = word;
            p6Input1.value = "";
            p6Input2.value = "";

            p6Input3.value = "";
            p6Input4.value = "";
            p6Input5.value = "";
            p6Input6.value = "";
            p6Input7.value = "";
            p6Input8.value = "";
            p6Input9.value = "";
            p6Input10.value = "";
        }

    })
}












































//----------------------------------

const call7 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${name}`);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p7Text = document.getElementById("p7Text")
let p7Enter = document.getElementById("p7Enter")
let p7Input = document.getElementById("p7Input")

if (p7Text) {



    p7Input.addEventListener('keydown', async (event) => {


        if (p7Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            if (event.key === 'Enter') {
                let word = await call7(event.target.value)
                p7Text.textContent = word;
                p7Input.value = "";
            }
        }



    })
    p7Enter.addEventListener('click', async () => {
        if (p7Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            let word = await call7(p7Input.value)
            p7Text.textContent = word;
            p7Input.value = "";
        }

    })
}


//----------------------------------
const call8 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItNumbersOnly/ReverseItNumbersOnly/${name}`);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p8Text = document.getElementById("p8Text")
let p8Enter = document.getElementById("p8Enter")
let p8Input = document.getElementById("p8Input")

if (p8Text) {

    p8Input.addEventListener('keydown', async (event) => {

        if (p8Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            if (event.key === 'Enter') {
                let word = await call8(event.target.value)
                p8Text.textContent = word;
                p8Input.value = "";
            }
        }
    })
    p8Enter.addEventListener('click', async () => {
        if (p8Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            let word = await call8(p8Input.value)
            p8Text.textContent = word;
            p8Input.value = "";
        }
    })
}
//---------------

const call9 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${name}`);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p9Text = document.getElementById("p9Text")
let p9Enter = document.getElementById("p9Enter")
let p9Input = document.getElementById("p9Input")

if (p9Text) {

    p9Input.addEventListener('keydown', async (event) => {

        if (p9Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            if (event.key === 'Enter') {
                let word = await call9(event.target.value)
                p9Text.textContent = word;
                p9Input.value = "";
            }
        }
    })
    p9Enter.addEventListener('click', async () => {
        if (p9Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            let word = await call9(p9Input.value)
            p9Text.textContent = word;
            p9Input.value = "";
        }
    })
}

//---------------


const call10 = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p10Text = document.getElementById("p10Text")
let p10Enter = document.getElementById("p10Enter")
let p10Input = document.getElementById("p10Input")

if (p10Text) {

    p10Input.addEventListener('keydown', async (event) => {

        if (p10Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            if (event.key === 'Enter') {
                let word = await call10(event.target.value)
                p10Text.textContent = word;
                p10Input.value = "";
            }
        }
    })
    p10Enter.addEventListener('click', async () => {
        if (p10Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            let word = await call10(p10Input.value)
            p10Text.textContent = word;
            p10Input.value = "";
        }
    })
}

//---------------

const call11 = async (name) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/OddOrEven/OddOrEven/${name}`);
    const data = await promise.text();

    console.log(data)
    return data;

}

let p11Text = document.getElementById("p11Text")
let p11Enter = document.getElementById("p11Enter")
let p11Input = document.getElementById("p11Input")

if (p11Text) {

    p11Input.addEventListener('keydown', async (event) => {

        if (p11Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            if (event.key === 'Enter') {
                let word = await call11(event.target.value)
                p11Text.textContent = word;
                p11Input.value = "";
            }
        }
    })
    p11Enter.addEventListener('click', async () => {
        if (p11Input.value === '') {
            console.log("fsdfsfdsfd")
        } else {
            let word = await call11(p11Input.value)
            p11Text.textContent = word;
            p11Input.value = "";
        }
    })
}
//---------------

