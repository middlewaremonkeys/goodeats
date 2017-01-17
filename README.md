# # ![GoodEats](/client/assets/goodEatsthumbnail.png)

##Description: 
GoodEats is a food seeking app which allows the user to search for their favourite food preferences with an intuitive and elegant UI.

[Live link](https://goodeats-dev.herokuapp.com/)

## Team
Product Owner - Svetlin Mladenov

Scrum Master - Sam Phillips

Development Team - Sean Ho, John Packel, Sam Phillips, Svetlin Mladenov 

## Our Tech Stack

!['tech stack'](/client/assets/tech_stack.png)

## Installation
Copy and paste this into the terminal

`git clone https://github.com/middlewaremonkeys/goodeats && cd goodeats && git checkout develop && npm i && cp .env.example .env`

Setup the .env file, it should be copied from the .env.example using the commands above, however you still need to get a Yelp v3 (Fusion) ID and Secret

## Local dev server
`npm run start:dev`


## Heroku server setup
Just push to a heroku dyno, no external apps required nor a Procfile
`npm start` is already setup so it will run based off that
