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
        passwordConfirmation: {
            type: String,
            required: [true, "Password confirmation is required."],
            validate: {
                validator: function (value) {
                    return value === this.password
                },
                message: "Password confirmation does not match.",
            },
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
