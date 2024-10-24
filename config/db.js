const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        console.log("Mongo URI:", 'mongodb+srv://rinezkhouloud:k20101049@cluster0.kcykgao.mongodb.net/eduzen?retryWrites=true&w=majority&appName=Cluster0'); // Add this line
        mongoose.connect('mongodb+srv://rinezkhouloud:k20101049@cluster0.kcykgao.mongodb.net/eduzen?retryWrites=true&w=majority&appName=Cluster0', connectionParams)
            .then(() => {
                console.log("Connected to database successfully");
            })
            .catch((error) => {
                console.error("Error connecting to database:", error);
            });
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database!");
    }
};


