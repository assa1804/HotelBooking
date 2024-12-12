const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/Hotel_Manager', 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
            },
        );
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
