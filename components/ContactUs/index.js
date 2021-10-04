import { useState } from 'react';
import './contact-us.scss';
import emailAPI from '../../API/email';

export default function ContactUs({ mt }) {
   let [name, setName] = useState(null);
   let [email, setEmail] = useState(null);
   let [message, setMessage] = useState(null);
   return (
      <section
         className={`contact-us-container service-one ${mt ? 'mt-20' : ''}`}
         id='features'
      >
         <div className='container'>
            <div className='block-title text-center'>
               <h2 className='block-title__title'>
                  Lets Build your <br />
                  dream <span>Website</span>
               </h2>
            </div>
            <div className='contact-us-description-text'>
               <p>
                  How do you want your site made? Are you trying to track
                  reported whale sightings or maybe integrate payment solutions?
                  This is your opportunity to describe the issue your site needs
                  to remedy.
               </p>
            </div>

            <form className='reply-form' onSubmit={submitedForm}>
               <div className='row'>
                  <div className='col-lg-6'>
                     <input
                        type='text'
                        placeholder='Your name'
                        className='reply-form__field'
                        onChange={e => {
                           setName(e.target.value);
                        }}
                     />
                  </div>
                  <div className='col-lg-6'>
                     <input
                        type='text'
                        placeholder='Enter email'
                        className='reply-form__field'
                        onChange={e => {
                           setEmail(e.target.value);
                        }}
                     />
                  </div>
                  <div className='col-lg-12'>
                     <textarea
                        placeholder='Write message'
                        className='reply-form__field'
                        onChange={e => {
                           setMessage(e.target.value);
                        }}
                     ></textarea>
                     <button className='reply-form__btn thm-btn' type='submit'>
                        <span>Submit Comment</span>
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   );

   function submitedForm(e) {
      e.preventDefault();
      emailAPI
         .send({ name: name, email: email, message: message })
         .then(() => {
            alert('Email sent successfully');
         })
         .catch(err => {
            alert('Email failed to send');
         });
   }
}
