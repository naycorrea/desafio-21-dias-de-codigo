var input = document.getElementById("display");
var historic = document.getElementById("historic");

let historicInput = "";

function add_operator(tecla) {
  input.value = input.value + tecla;

  historicInput = input.value;

  if (input.value.length === 6) {
    input.className = "numberMedium";
  }

  if (input.value.length > 6) {
    input.className = "numberSmall";
  }
}

function calcular() {
  if (input.value === "") {
    return;
  }

  let calc = eval(input.value);

  input.value = calc;

  historic.value = historicInput;

  if (input.value.length === 6) {
    input.className = "numberMedium";
  }

  if (input.value.length > 6) {
    input.className = "numberSmall";
  }
}

function clearVisor() {
  input.value = "";
  historic.value = "";
}

function erase() {
  let result2 = input.value;
  input.value = result2.substring(0, result2.length - 1);
}
