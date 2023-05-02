let celcius = document.getElementById("celcius");
let fahrenhit = document.getElementById("fahrenhit");
let Kelvin = document.getElementById("Kelvin");

celcius.oninput = () => {
    let output = (parseFloat(celcius.value) * 9) / 5 + 32;
    fahrenhit.value = parseFloat(output.toFixed(2));

};
fahrenhit.oninput = () => {
    let output = (parseFloat(fahrenhit.value) * 9) / 5 + 32;
    celcius.value = parseFloat(output.toFixed(2));
};
Kelvin.oninput = () => {
    let output = (parseFloat(Kelvin.value) * 9) / 5 + 32;
    fahrenhit.value = parseFloat(output.toFixed(2));
};
Kelvin.oninput = () => {
    let output = (parseFloat(Kelvin.value) * 9) / 5 + 32;
    celcius.value = parseFloat(output.toFixed(2));
};