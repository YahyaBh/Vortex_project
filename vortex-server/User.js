const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    zip: String,
    Country: String

})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number, min: 13, max: 80, maxLenght: 2, minLenght: 2, validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} it's not an evan number !`
        }
    },
    email: { type: String, required: true, lowercase: true },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
    friend: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    hobbies: [String],
    // address : {
    //     zip : String,
    //     Country : String
    // }or
    address: addressSchema
})





// to save it in the modal with others Schemas
module.exports = mongoose.model("User", userSchema)