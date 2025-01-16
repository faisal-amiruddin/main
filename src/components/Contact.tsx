import { FormEvent, useState } from 'react';
import './Contact.css';
import ReCAPTCHA from 'react-google-recaptcha';
 
interface ContactProps {
    user: string;
}

export const Contact: React.FC<ContactProps> = ({ user }) => {
  const apiKey = import.meta.env.VITE_EMAIL_API_KEY;
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [userInput, setUserInput] = useState(user);
  const [capVal, setCapVal] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleBack = () => {
    setShowSuccess(false); 
  }

  const renderSuccess = () => {
    return (
        <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <p>Message sent successfully!</p>
            <p style={{color: "#888", cursor: "pointer"}} onClick={handleBack}>Back</p>
        </div> 
    )
  }

  const renderDefault = () => {
    return (
        <>
            <input type="hidden" name="access_key" value={apiKey} />
            <input 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              required 
              value={userInput} 
              onChange={handleInputChange} 
            />
            <input type="email" placeholder="Your Email" name="email" required />
            <textarea rows={5} placeholder="Your Message" name="message" required />
            <div className='recaptcha'>
              <ReCAPTCHA sitekey="6LfjVbkqAAAAAPUajzZE-Tim0XuJy_onbRU9h143"
              onChange={(val) => setCapVal(val)}
              />
            </div>
            <button 
              data-aos="fade" 
              data-aos-delay="1000" 
              data-aos-duration="1000" 
              type="submit" 
              disabled={isSending || !capVal}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
        </>
    )
  }

  const onSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setShowSuccess(true);
        event.currentTarget.reset();
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
        <div className='contact-scroll'></div>
        <section className="form">
          <div className="form-content">
              <h1 data-aos="fade" data-aos-duration="3000">Get In Touch</h1>
              <p data-aos="fade-up" data-aos-duration="2000">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <div className="form-icon">
                <a data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000" href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000" href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
          </div>
          <form onSubmit={onSend} className="form-input" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
              {showSuccess ? renderSuccess() : renderDefault()}
          </form>
        </section>
    </>
  );
};