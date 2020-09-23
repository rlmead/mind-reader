// define an array of objects with the data to populate the element at each state
const states = [
    {
        "main_text": "I can read your mind!",
        "round_button": "Go"
    },
    {
        "main_text": "Pick a number from 01 to 99.",
        "rectangle_button": "Next",
        "extra_text": "Click \"next\" after you've chosen your number.",
        "round_button": "Start Over"
    },
    {
        "main_text": "Add both digits together to get a new number.",
        "rectangle_button": "Next",
        "extra_text": "For example, 14: 1 + 4 = 5\nClick \"next\" to proceed.",
        "round_button": "Start Over"
    },
    {
        "main_text": "Subtract your new number from your original number.",
        "rectangle_button": "Next",
        "extra_text": "For example: 14 - 5 = 9\nClick \"next\" to proceed.",
        "round_button": "Start Over"
    },
    {
        "rectangle_button": "Reveal",
        "extra_text": "Scroll to find your new number, and note the symbol beside it.",
        "round_button": "Start Over"
    },
    {
        "main_text": "&",
        "extra_text": "Your symbol is &",
        "round_button": "Start Over"
    }
]

// define object with html info for each of the 4 possible html elements per state?