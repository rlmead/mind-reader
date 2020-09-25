// constants for accessing document elements
const main_text = document.getElementById('main_text');
const symbol_col = document.getElementById('symbol_col');
const header_col = document.getElementById('header_col');
const rectangle_button = document.getElementById('rectangle_button');
const extra_text = document.getElementById('extra_text');
// const round_button = document.getElementById('round_button');
const icon = document.getElementById('icon');

// variable to keep track of current state to determine what data gets used
let state = 0;

// function to change state
function change_state(x) {
    // ensure the number stays between 0 and 5 for indices of content object
    if (state === 0 && x === -1) {
        state = 0;
    } else if (state === 5 && x === 1) {
        state = 0;
    } else {
        state += x;
    }
    populate_html();
}

// function to generate main_text content for slide 5
function random_symbol() {
    let symbols = ["!", "@", "#", "$", "%", "^", "*", "{", "?"];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

let fixed_symbol;

// function to populate html elements according to data in content object at state index
// or (mostly) randomly pair numbers with symbols (slide 5)
function populate_html() {
    if (content[state].main_text) {
        symbol_col.classList.add("d-none");
        header_col.classList.remove("d-none");
        main_text.textContent = content[state].main_text.replace("&",fixed_symbol);
    } else {
        header_col.classList.add("d-none");
        symbol_col.classList.remove("d-none");
        main_text.textContent = "";
        fixed_symbol = random_symbol();
        for (i = 0; i <= 99; i++) {
            let next_line = document.createElement('h2');
            if (i % 9 === 0) {
                next_line.textContent = i.toString() + " - " + fixed_symbol;
            } else {
                next_line.textContent = i.toString() + " - " + random_symbol();
            }
            symbol_col.appendChild(next_line);
        }
    }
    if (content[state].rectangle_button) {
        rectangle_button.textContent = content[state].rectangle_button;
        rectangle_button.classList.remove("d-none");
    } else {
        rectangle_button.classList.add("d-none");
    }
    if (content[state].extra_text) {
        extra_text.innerHTML = content[state].extra_text.replace("&",fixed_symbol);
    } else {
        extra_text.innerHTML = "";
    }
   icon.setAttribute("class", "fa fa-2x text-dark " + content[state].icon);
}

populate_html();

// trigger state change and update html elements according to arrow keypress
let key_press = function (event) {
    if (event.keyCode === 37) {
        change_state(-1);
    } else if (event.keyCode === 39) {
        change_state(1);
    }
}

document.addEventListener("keydown", event => key_press(event));

// trigger state change and update html elements according to rectangle button press
rectangle_button.addEventListener("click", function () { change_state(1) });

// trigger state change and update html elements according to round button press
icon.addEventListener("click", function () {
    if (state === 0) {
        state = 1;
    } else {
        state = 0;
    }
    populate_html();
})
