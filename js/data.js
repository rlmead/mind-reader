// define an array of objects with the data to populate the element at each state
const content = [
    {
        "main_text": "I can read your mind!",
        "round_button": "fas fa-arrow-alt-circle-right"
    },
    {
        "main_text": "Pick a number from 01 to 99.",
        "rectangle_button": "Next",
        "extra_text": "Click \"next\" after you've chosen your number.",
        "round_button": "fa fa-redo-alt"
    },
    {
        "main_text": "Add both digits together to get a new number.",
        "rectangle_button": "Next",
        "extra_text": "For example, 14: 1 + 4 = 5\nClick \"next\" to proceed.",
        "round_button": "fa fa-redo-alt"
    },
    {
        "main_text": "Subtract your new number from your original number.",
        "rectangle_button": "Next",
        "extra_text": "For example: 14 - 5 = 9\nClick \"next\" to proceed.",
        "round_button": "fa fa-redo-alt"
    },
    {
        "rectangle_button": "Reveal",
        "extra_text": "Scroll to find your new number, and note the symbol beside it.",
        "round_button": "fa fa-redo-alt"
    },
    {
        "main_text": "&",
        "extra_text": "Your symbol is &",
        "round_button": "fa fa-redo-alt"
    }
]

// define object with html info for each of the 4 possible html elements per state?
// deciding against this, not sure how the js will parse the html stored as json