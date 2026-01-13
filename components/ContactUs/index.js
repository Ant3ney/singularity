import { useState, useEffect } from "react";
import emailAPI from "../../API/email";
import addContactFormEntry from '../../API/addContactFormEntry';

export default function ContactUs({ mt }) {
  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [initalMessage, setInitalMessage] = useState(null);

  useEffect(() => {
    if (initalMessage) return;
    const params = new URLSearchParams(window.location.search);
    let defaultMessage = params.get("pluginmessage");
    if (defaultMessage) {
      setInitalMessage(defaultMessage);
    }
  }, [initalMessage]);

  return (
    <section
      className={`contact-us-container service-one ${mt ? "mt-20" : ""}`}
      id="features"
    >
      <div id="contact_us_singularity" className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Lets Build your <br />
            dream <span>Website</span>
          </h2>
        </div>
        <div className="contact-us-description-text">
          <p>
            How do you want your site made? Are you trying to track reported
            whale sightings or maybe integrate payment solutions? This is your
            opportunity to describe the issue your site needs to remedy.
          </p>
        </div>

        <form className="reply-form" onSubmit={submitedForm}>
          <div className="row">
            <div className="col-lg-6">
              <input
                type="text"
                placeholder="Name"
                className="reply-form__field"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                placeholder="Email"
                className="reply-form__field"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12">
              <textarea
                placeholder="Message"
                className="reply-form__field"
                id="message-form-textarea"
                defaultValue={initalMessage}
              ></textarea>
              <button className="reply-form__btn thm-btn" type="submit">
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

  async function submitedForm(e) {
    let messageTextarea = document.querySelector("#message-form-textarea");
    let message = messageTextarea.value;
    e.preventDefault();

    if (!message || !email) {
      alert(
        "Both the message and email input must be compleated inorder to send message"
      );
      return;
    }
    if (!isEmailValid(email)) {
      alert("The email you enterd is invalid");
      return;
    }

	  const res = await addContactFormEntry(name, email, message)
	  if(res.fail) {
		  alert("Faild to record response. Please contact us directly at anthonycavuoti@gmail.com");
		  return;
	  } else {
		  window.top.location.href = "https://singularity-thank-you.netlify.app/";
		  //window.location.replace("singularity-thank-you.netlify.app");
		  //window.location.replace("https://thankyou.singularityplanet.com");
		//alert(`Thank you ${name}! You message has gone through and we will be in contact with you shortly!`);
		  return;
	  }
/*
    emailAPI
      .send({ name: name, email: email, message: message })
      .then(() => {
        alert("Email sent successfully");

        //#region Reporting conversion
        var callback = function () {
          if (typeof url != "undefined") {
            window.location = url;
          }
        };
        gtag("event", "conversion", {
          send_to: "AW-1005517184/vOV5CM_89bIDEIDzu98D",
          event_callback: callback,
        });
        return false;
        //#endregion
      })
      .catch((err) => {
        alert("Email failed to send");
      });
	  */
  }
}

function isEmailValid(email) {
  if (email.indexOf("@") < 0) return false;
  let emailSideNames = email.split("@");
  if (!emailSideNames) return false;
  for (let i = 0; i < emailSideNames.length; i++) {
    let currentEmailSide = emailSideNames[i];
    if (currentEmailSide === "") {
      return false;
    }
  }

  return true;
}
