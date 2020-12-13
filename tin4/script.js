function pitagoras(a, b, c) {
  let numbers = [a, b, c];
  numbers.sort();
  if (Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) === Math.pow(numbers[2], 2)) {
    return true;
  }
  return false;
}

function dwa(a, b, c) {
  for (let i = a; i <= b; i++) {
    if (i % c == 0) {
      console.log(i)
    }
  }
}

function trzy(x) {
  for (let i = 1; i < 10; i++) {
    console.log(x * i);
  }
}

function cztery(x) {
  if (x <= 1) return 1;
  returm
  cztery(x - 1) + cztery(x - 2);
}

function piec(x) {
  row = '';
  for (let i = 0; i < x; i++) {
    row += '*'
    console.log(row)
  }
}

function szesc(x) {
  let number_of_cols = x + 3;
  let row = '';
  for (let i = 0; i < number_of_cols; i++) {
    row += '*';
  }
  console.log(row);

  row = '';
  for (let i = 0; i < number_of_cols; i++) {
    if (i > number_of_cols / 2) {
      row += '*';
    }
    if (i === number_of_cols / 2) {
      row += ' ';
    }
    if (i < number_of_cols / 2) {
      row += '*';
    }
    console.log(row)
  }
}


function siedem(figura) {
  switch (expression) {
    case 'Trojkat':
      trojkat(a, h);
      break;
    case 'Prostokat':
      prostokat(a, b)
      break;
    case 'Rownoleglobok':
      rownoleglobok(a, h)
      break;
    case 'Trapez':
      trapez(a, b, h)
      break;
    default:
  }

  function trojkat(a, h) {
    return (a * h) / 2
  }

  function prostokat(a, b) {
    return a * b

  }

  function rownoleglobok(a, h) {
    return a * h
  }

  function trapez(a, b, h) {
    return ((a + b) * h) / 2
  }
}


function dziewiec(x) {
  var triangle = [];

  if (x == 0) {
    return triangle
  }

  for (var i = 0; i < x; i++) {

    triangle[i] = [];

    triangle[i][0] = 1;

    for (var j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
    }

    triangle[i][i] = 1;
  }
  return triangle;
}

class Auto {
  constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
    this.rok = rok;
    this.przebieg = przebieg;
    this.cena_wyjsciowa = cena_wyjsciowa;
    this.cena_koncowa = cena_koncowa;
  }
};

let auto = new Auto(2010, 180000, 100000, 50000);