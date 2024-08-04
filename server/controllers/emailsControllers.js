require('dotenv').config()
const transporter = require('../config/nodemailer')

const sendEmail = async (req,res) => {
        const { name, surname, mobile, email, location, animal_type, animal_name } = req.body

        async function main() {
          const info = await transporter.sendMail({
            from: `"${name} ${surname}" <${email}>`,
            to: process.env.email,
            subject: "Formulario de Adopción",
            text: `
              Nombre: ${name}
              Apellido: ${surname}
              Teléfono: ${mobile}
              Email: ${email}
              Provincia: ${location}
              Tipo de Animal: ${animal_type}
              Nombre del Animal: ${animal_name || 'Ninguno'}
            `
          })
      
          console.log("Message sent", info.messageId)
          res.send('Correo enviado exitosamente')
        }
          main().catch(error => {
            console.error(error)
            res.status(500).send(error.toString())
          })
}

module.exports = sendEmail