import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import validator from 'validator';
import './styles.css';

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry');
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');

  function verifyEmail(email) {
    setValidEmail(validator.isEmail(email));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="containerSuccess">
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </div>
    );
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="container">
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
          className="inputField"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className="textareaField"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message}
          className={`submitButton ${
            message ? "activeButton" : "inactiveButton"
          }`}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}