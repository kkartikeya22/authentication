const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('your_db_link', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = { dbConnect };
