require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail', // Usa el servicio de correo que prefieras
    auth: {
      user: process.env.EMAIL, // Tu correo
      pass: process.env.PASSWORD   // Tu contraseña
    }
  })

module.exports = transporter