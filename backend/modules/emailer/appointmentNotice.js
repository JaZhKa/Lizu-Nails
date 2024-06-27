const transporter = require('../../modules/emailer');
const emitter = require('../../modules/events');
const AppointmentService = require('../../services/appointmentService');

const appointmentNotice = async (data) => {
  await transporter.sendMail({
    from: 'LizuNails <lizunails@rambler.ru>',
    to: 'yakov1995@yandex.ru',
    subject: 'Новая запись!',
    text: 'The new appointment!',
    html: `У Вас новая запись! ${data?.scheduleId?.start}. Клиент ${data?.name} | ${data?.contacts?.phoneNumber} | ${data?.contacts?.instagramNickname} на услугу ${data?.service?.title}.`,
  });
};

emitter.on('appointmentNotice', appointmentNotice);

module.exports = appointmentNotice;