const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = "mongodb+srv://yahya:vortex_db@cluster0.5k8jl6j.mongodb.net/?retryWrites=true&w=majority";
const User = require("./User")


mongoose.connect(uri);


run()

async function run() {

    try {
        // Make a new Data for the Schema
        const user = await User.create({ name: "Yahya", age: 20, hobbies: ['Programming', 'Cycling', 'Movies'], address: { zip: "32432", Country: "Morocco" } , email : 'yahyabouhsine@ioacom'});

        ////////////// or/////////////////
        // const user = new User({name: "Yahya",age: 20})
        // Save user to the database
        // user.save();
        console.log(user)
    } catch (error) {
        console.log(error.message);
    }

}






app.listen(3001, () => {
    console.log('Server listening');
});