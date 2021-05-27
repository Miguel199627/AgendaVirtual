// Importamos modulos necesarios
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// Creación del esquema de colección
const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    telefono: String,
    user: String,
    password: String,
    date: { type: Date, default: Date.now() }
});

// Generación del jwt
userSchema.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        lastName: this.lastName,
        iat: moment().unix()
    },
    "Marc1996AV"
    );
};

// Informamos a MongoDB cual sera su esquema de colección
const User = mongoose.model("user", userSchema);

// Exportamos el modulo al backend
module.exports = User;