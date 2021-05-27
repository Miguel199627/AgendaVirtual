// Importamos modulos necesarios
const mongoose = require("mongoose");

// Colección de tablero
const reminderSchema = new mongoose.Schema({
    idUsuario: String,
    nombreActividad: String,
    descripcion: String,
    fechaInicio: { type: Date, default: Date.now() },
    date: { type: Date, default: Date.now() }
});

// Coleccion board
const Reminder = mongoose.model("reminder", reminderSchema);

// Export the module
module.exports = Reminder;