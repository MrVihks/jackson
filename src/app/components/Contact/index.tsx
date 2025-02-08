import "../../../../styles/ContactStyles.css";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact">
      <section className="contact-container">
        <article className="contact-info">
          <h3>Contact Us Now!</h3>
          <p>Do you have questions or would like to schedule a service?</p>
          <p>We are ready to help!</p>
          <p>
            {" "}
            Contact us via WhatsApp or your preferred channel and receive fast
            and personalized service.
          </p>
          <div>
                <img 
                  src="LC-logomarca.svg" 
                  width={360} 
                  alt="luhs cleaning logo-marca" 
                  className="contact-info-background"/>
          </div>
        </article>
        <article className="contact-qr">
          <h3>Don&apos;t waste time!</h3>
          <p>
            Scan the QR code with your phone to contact us instantly, or reach
            out via WhatsApp.
          </p>
          <Link
            href="https://bit.ly/3WBt9Vt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Whatsapp-QR-Code.svg"
              width={250}
              alt="Whatsapp QR Code"
            />
          </Link>
          <Link
            href="https://bit.ly/3WBt9Vt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./icons/whatsapp-icon.svg"
              width={175}
              alt="Contact button"
            />
          </Link>
          <p className="availability">
            Available every day, from 8 AM to 8 PM.
          </p>
        </article>
      </section>
    </section>
  );
}
