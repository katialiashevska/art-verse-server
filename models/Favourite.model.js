const { Schema, model } = require("mongoose")

const favouriteSchema = new Schema(
    {
        artist: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: String,
            required: true,
            trim: true,
        },
        medium: {
            type: String,
            required: true,
            trim: true,
        },
        dimensions: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            trim: true,
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const Favourite = model("Favourite", favouriteSchema)

module.exports = Favourite