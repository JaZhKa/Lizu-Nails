const transporter = require('../../modules/emailer');
const emitter = require('../../modules/events');
require('dotenv').config();

const appointmentNotice = async (data) => {
  await transporter.sendMail({
    from: process.env.EMAILER_TRANSPORTER_FROM,
    to: process.env.EMAILER_TRANSPORTER_TO,
    subject: 'Новая запись!',
    text: 'The new appointment!',
    html: `<h1>У Вас новая запись!</h1>
            <p><b>${new Date(
              data?.scheduleId?.start
            ).toLocaleDateString()} ${new Date(
      data?.scheduleId?.start
    ).toLocaleTimeString()}.</b></p>
            <p><b>Клиент:</b> ${data?.name}</p>
            <p><b>Телефон:</b> ${data?.contacts?.phoneNumber}</p>
            <p><b>Instagram:</b> ${data?.contacts?.instagramNickname}</p>
            <p><b>Услуга:</b> ${data?.service?.title}</p>
    `,
  });
};

emitter.on('appointmentNotice', appointmentNotice);

module.exports = appointmentNotice;
