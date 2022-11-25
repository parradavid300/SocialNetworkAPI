const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trimmed: true,
        },

        email: {
            type: String,
            required: true,
            match: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`,
            unique: true,

        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users',
        }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },


);

usersSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const Users = model('Users', usersSchema);

module.exports = Users;