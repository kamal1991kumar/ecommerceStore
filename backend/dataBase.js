const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect( process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded On', process.env.MONGODB_URL );
    } else {
        console.log('Error in DB connection');
    }
});
