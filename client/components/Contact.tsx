import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <section id="contact">
        <h2>Contact Me</h2>
      </section>
      <section className="contact">
        <h3>Send me an Email</h3>
        <a href="mailto:milogpalmer@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#6beFFF"
            style={{ width: '50px', height: '50px' }}
          />
        </a>
        <h3>Download my CV</h3>
        <a href="/images/MiloCV.pdf" download>
          <FontAwesomeIcon
            icon={faPaperclip}
            color="#6beFFF"
            style={{ width: '50px', height: '50px' }}
          />
        </a>
      </section>
    </>
  )
}

export default Contact
