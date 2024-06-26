const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://kartikeyakatiyarkk29:kartikeya@cluster0.inmbkko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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
