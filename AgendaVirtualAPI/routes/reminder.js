// Importamos modulos
const express = require("express");
const router = express.Router();
const Reminder = require("../models/reminder");
const User = require("../models/user");
const Auth = require("../middleware/auth");

// Registrar un recordatorio - async await POST
// Ruta completa: http://localhost:3001/api/reminder/saveReminder
router.post("/saveReminder", Auth, async (req, res) => {
    // Buscamos el usuario de la petición
    const user = User.findById(req.user._id);
    // Si no se encuentra el usuario
    if (!user) return res.status(400).send("Usuario no autenticado");
    // Si el usuario existe procedemos a registrar
    const reminder = new Reminder({
        idUsuario: req.user._id,
        nombreActividad: req.body.nombreActividad,
        descripcion: req.body.descripcion
    });
    // Guardamos en MongoDB
    const result = await reminder.save();
    return res.status(200).send({ result });
});

// Exportamos el modulo
module.exports = router;