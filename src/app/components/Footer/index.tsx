import '../../../../styles/FooterStyles.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='footer-container'>
                <figure className="footer-logo">
                    <Link href="https://bit.ly/3WBt9Vt" target="_blank" rel="noopener noreferrer">
                        <img src="./luhs-cleaning-service-footer.svg" width={250} alt="Luh's Cleaning Service" />
                    </Link>
                </figure>

                <article className="footer-contact">
                    <p>Tel: +1 (732) 307-4333</p>
                    <Link href="https://bit.ly/3WBt9Vt" target="_blank" rel="noopener noreferrer"><p>Chat with us on <strong>WhatsApp!</strong></p></Link>
                    <p>contact@luhcleaningservice.com</p>
                </article>

                <figure className="footer-whatsapp">
                    <Link href="https://bit.ly/3WBt9Vt" target="_blank" rel="noopener noreferrer">
                        <img src="./icons/button-whatsapp-footer.svg" width="150px" alt="WhatsApp contact" />
                    </Link>
                </figure>

            </section>
            <section>
                <div className="footer-bottom">
                    © 2025 Luh&apos;s Cleaning Service. All rights reserved. | Website developed by <Link href="https://grupomais.tech" target="_blank" rel="noopener noreferrer"><strong>+Tech</strong></Link>.
                </div>
            </section>
        </footer>
    )
}