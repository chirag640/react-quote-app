# React Quote App

This is a simple React application that displays random quotes from the [Ron Swanson Quotes API](https://ron-swanson-quotes.herokuapp.com/v2/quotes). The app allows users to save their favorite quotes to a list.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches random quotes from the Ron Swanson Quotes API
- Displays quotes in styled cards
- Allows users to save quotes to a list
- Responsive design

## Project Structure

```bash
react-quote-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── QuoteCard.js
│ │ ├── QuoteList.js
│ │ └── ...
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/chirag640/react-quote-app.git
   cd react-quote-app
   ```
2.Install dependencies and start:
   ```bash
  npm install
  npm start

   ```


## Usage
- Open the app in your browser.
- Click the "Get Quote" button to fetch a random quote.
- Click the "Save" button to save the quote to your list.
- View your saved quotes by navigating to the "Saved Quotes" section.

## Technologies Used
- React.js
- Material-UI
- Axios
- CSS