# goodeats
[Heroku App](https://goodeats-dev.herokuapp.com/)

## Installation
Copy and paste this into the terminal

`git clone https://github.com/middlewaremonkeys/goodeats && cd goodeats && git checkout develop && npm i && cp .env.example .env`

Setup the .env file, it should be copied from the .env.example using the commands above, however you still need to get a Yelp v3 (Fusion) ID and Secret

## Local dev server
`npm run start:dev`


## Heroku server setup
Just push to a heroku dyno, no external apps required nor a Procfile
`npm start` is already setup so it will run based off that
