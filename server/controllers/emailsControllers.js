require('dotenv').config()
const transporter = require('../config/nodemailer')

const sendEmail = async (req,res) => {
    try {
        const { name, surname, mobile, email, location, animal_type, animal_name } = req.body

        const emailOptions = {
          from: email,
          to: process.env.EMAIL_DESTINATION,
          subject: 'Nuevo Formulario de Adopción',
          text: `
            Nombre: ${name}
            Apellido: ${surname}
            Teléfono: ${mobile}
            Email: ${email}
            Provincia: ${location}
            Tipo de Animal: ${animal_type}
            Nombre del Animal: ${animal_name}
          `
        }
      
        transporter.sendMail(emailOptions, (error, info) => {
          if (error) {
            console.error('Error:', error)
            res.status(500).send('Hubo un error al enviar el formulario')
          } else {
            console.log('Success:', info.response);
            res.status(200).send('Formulario enviado exitosamente')
          }
        })
    } catch (err) {
      res.status(500).send(err.message)
    }
}


module.exports = sendEmail