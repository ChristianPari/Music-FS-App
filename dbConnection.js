const mongoose = require('mongoose'),
    mongoURI = process.env.MONGO_URI,
    depObj = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };

function dbConnect() {

    mongoose.connect(mongoURI, depObj, err => {

        if (err) {

            console.log(`\nSomething went worng, error: ${err}\n`);

        } else {

            console.log("\Established Connection to Database\n");

        }

    });

    mongoose.connection.on('error', err => {

        console.log(`\nAn error while connecting to database, error: ${err}\n`);

    });

    mongoose.connection.on('connected', () => {

        console.log(`\nConnecting to:\n${mongoURI}\n`);

    });

};

module.exports = dbConnect;