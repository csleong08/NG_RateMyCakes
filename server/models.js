const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/RateMyCakes", {useNewUrlParser:true}, 
(errs)=>console.log(errs?errs:"db gucci"));

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number, 
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        minlength: [1, "Comment is required for submission"]
    }
}, {timestamps:true});

const CakeSchema = new mongoose.Schema({
    baker: {
        type: String, 
        required: true,
        minlength: [2, "Your name is too short, a minimum of two characters are required"]
    },
    url: {
        type: String,
        required: true, 
        minlength: [1, "Please enter an image url"]
    },
    reviews: [ReviewSchema]
}, {timestamps:true});

const Cake = mongoose.model('Cake', CakeSchema);
const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = {Cake, Reviews};
