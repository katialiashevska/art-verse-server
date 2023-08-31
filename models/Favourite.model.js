const { Schema, model } = require("mongoose")

const favouriteSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
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
        note: {
            type: String,
            trim: true,
            default: "",
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

favouriteSchema.index({ id: 1, user: 1 }, { unique: true })

const Favourite = model("Favourite", favouriteSchema)

module.exports = Favourite
