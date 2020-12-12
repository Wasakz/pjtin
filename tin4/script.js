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
    let number_of_cols = x+3;
    let row = '';
    for (let i = 0; i < number_of_cols; i++){
        row += '*';
    }
    console.log(row);

    row = '';
    for (let i = 0; i < number_of_cols; i++){
        if (i > number_of_cols/2) {
            row+='*';
        }
        if (i === number_of_cols/2) {
            row += ' ';
        }
        if (i < number_of_cols/2){
            row += '*';
        }
        console.log(row)
    }
}

szesc(6)