require('dotenv').config()
const transporter = require('../config/nodemailer')
const productQueries = require('../queries/productQueries')

const getAllProducts = async (req,res) => {
    try {
        const animals = await productQueries()
        res.json(animals)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const sendOrderConfirmationEmail = async (req, res) => {
    const { cart, user } = req.body;
  
    if (!user || !user.email) {
      return res.status(400).send('User email is required');
    }
  
    if (!cart || cart.length === 0) {
      return res.status(400).send('Cart is empty');
    }
  
    const items = cart.map(item => `
      <li>
        <img src="${item.image}" alt="${item.name}" style="width: 100px;" />
        <strong>${item.name}</strong> - ${item.price}
      </li>
    `).join('');
  
    const htmlContent = `
      <h2>Confirmación de Compra</h2>
      <p>Gracias por tu compra, ${user.name}. Aquí están los detalles:</p>
      <ul>${items}</ul>
      <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
    `;
  
    try {
      const info = await transporter.sendMail({
        from: `"Rescata Un Peludo" <${process.env.EMAIL_USER}>`, // Your email address
        to: user.email, // User's email
        subject: 'Confirmación de Compra',
        html: htmlContent,
      });
  
      console.log('Order confirmation sent:', info.messageId);
      res.send('Correo de confirmación enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el correo de confirmación:', error);
      res.status(500).send('Error al enviar el correo de confirmación');
    }
  };
  
  module.exports = sendOrderConfirmationEmail;


module.exports = { getAllProducts, sendOrderConfirmationEmail}
