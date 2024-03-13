import { Contact } from "@/interfaces/contact";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { currencyFormat } from "./currenyFormat";
import { dateFormat } from ".";

export const createContactEmail = (contact: Contact) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contacto BellArte Joyería</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              text-align: center;
              padding: 20px;
          }
  
          .container {
              max-width: 800px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h2, h3 {
              color: #333;
          }
  
          p {
              color: #666;
          }
  
          .contact-info, .message {
              text-align: left;
              margin-top: 20px;
          }
  
          .contact-info div, .message p {
              margin-bottom: 10px;
              line-height: 1.6;
          }
  
          .logo-img {
              width: 200px;
              margin-bottom: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <img class="logo-img" src="https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/bellarte-icono.png?t=2024-03-13T20%3A05%3A15.227Z" alt="BellArte Joyería" />
          <h2>¡Hola!</h2>
          <p>Hemos recibido un nuevo mensaje de contacto. Aquí están los detalles:</p>
  
          <div class="contact-info">
              <div><strong>Nombre:</strong> ${contact.name}</div>
              <div><strong>Email:</strong> ${contact.email}</div>
              <div><strong>Teléfono:</strong> ${contact.phone}</div>
              <div><strong>Asunto:</strong> ${contact.subject}</div>
          </div>
  
          <div class="message">
              <h3>Mensaje:</h3>
              <p>${contact.message}</p>
          </div>
  
          <p>¡Gracias por ponerte en contacto con BellArte Joyería!</p>
      </div>
  </body>
  </html>
    `.trim();
};

export const createOrderEmail = (order: OrderCheckout) => {
  const productLines = order.items
    .map(
      (item) => `
      <tr>
        <td>${item.product?.name || "Producto"}</td>
        <td>${item.quantity}</td>
        <td>${currencyFormat(item.price)}</td>
        <td>${currencyFormat(item.quantity * item.price)}</td>
      </tr>
    `
    )
    .join("");

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de Pedido</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              text-align: center;
              padding: 20px;
          }
  
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h2, h3 {
              color: #333;
          }
  
          p, td, th {
              color: #666;
          }
  
          .info, .shipping-address, .products {
              text-align: left;
              margin-top: 20px;
          }
  
          table {
              width: 100%;
              border-collapse: collapse;
          }
  
          th, td {
              border: 1px solid #ddd;
              padding: 8px;
          }
  
          th {
              background-color: #f2f2f2;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Confirmación de Pedido</h2>
          <p>Gracias por tu compra. Aquí están los detalles de tu pedido:</p>
  
          <div class="info">
              <h3>Información General</h3>
              <p><strong>Número de Pedido:</strong> ${order.id}</p>
              <p><strong>Fecha de Pedido:</strong> ${dateFormat(
                order.createdAt,
                "es"
              )}</p>
              <p><strong>Estado del Pedido:</strong> ${order.status}</p>
              <p><strong>Método de Pago:</strong> ${order.paymentMethod}</p>
              <p><strong>Total:</strong> ${currencyFormat(order.total)}</p>
          </div>
  
          <div class="shipping-address">
              <h3>Dirección de Envío</h3>
              <p><strong>Email:</strong> ${order.address.email}</p>
              <p><strong>Teléfono:</strong> ${order.address.phone}</p>
              <p><strong>Dirección:</strong> ${
                order.address.address?.address
              }, ${order.address.address?.additional}, ${
    order.address.address?.department
  } , ${order.address.address?.city}</p>
          </div>
  
          <div class="products">
              <h3>Productos Comprados</h3>
              <table>
                  <thead>
                      <tr>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Precio Unitario</th>
                          <th>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${productLines}
                  </tbody>
              </table>
          </div>
  
          <p>Si tienes alguna pregunta sobre tu pedido, por favor, no dudes en contactarnos.</p>
      </div>
  </body>
  </html>
    `.trim();
};
