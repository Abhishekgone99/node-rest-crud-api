const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mensSchema = new Schema({
    event: {
        type: String,
        default: "100m"
    },
    ranking: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
}, { timestamps: true })

const MensRanking = mongoose.model("MensRanking", mensSchema)
module.exports = MensRanking