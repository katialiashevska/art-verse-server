const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required."],
        },
        favourites: [
            {
                type: Schema.Types.ObjectId,
                ref: "Favourite",
            },
        ],
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
