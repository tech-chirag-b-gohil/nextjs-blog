import { useState, useEffect, use } from 'react';
import classes from './styles.module.css';
import Notification from '@/components/Notification';

async function sendContactFormData(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function Contact() {
  const [requestStatus, setRequestStatus] = useState('');
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (requestStatus === 'pending') {
      setNotification({
        title: 'Sending message...',
        message: 'Your message is being sent.',
        status: 'pending',
      });
    }
    if (requestStatus === 'success') {
      setNotification({
        title: 'Message sent!',
        message: 'Your message has been sent successfully.',
        status: 'success',
      });
    }
    if (requestStatus === 'error') {
      setNotification({
        title: 'Error!',
        message: error?.message || 'Something went wrong!',
        status: 'error',
      });
    }
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setNotification(null);
        setRequestStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function handleSubmit(event) {
    event.preventDefault();
    
    const email = event.target.email.value?.trim();
    const name = event.target.name.value?.trim();
    const message = event.target.message.value?.trim();

    setRequestStatus('pending');

    try {
      await sendContactFormData({ email, name, message });
      setRequestStatus('success');
      event.target.reset();
    } catch (error) {
      setRequestStatus('error');
      setError(error);
    }
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>

        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>

        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
}

export default Contact;
