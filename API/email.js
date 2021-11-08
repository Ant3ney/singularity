let emailAPI = {
   send: nameEmailMessageObect => {
      let emailServerAdress = process.env.NEXT_PUBLIC_EMAIL_SERVER_ADDRESS;
      let { name, email, message } = nameEmailMessageObect;
      let formatedMessage = `${name} whos email is ${email} compleated your form and said\n${message}`;
      let toEmail = 'anthonycavuoti@gmail.com';
      let subject = 'Singularity Mail!';

      let body = JSON.stringify({
         toEmail: toEmail,
         fromEmail: email,
         subject: subject,
         message: formatedMessage,
      });

      return new Promise((resolve, reject) => {
         fetch(`${emailServerAdress}/sendMail`, {
            method: 'post',
            body: body,
            headers: {
               'Content-Type': 'application/json',
            },
         })
            .then(res => {
               return res.json();
            })
            .then(status => {
               resolve(status);
            })
            .catch(err => {
               reject(err);
            });
      });
   },
};

export default emailAPI;
