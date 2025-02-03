import "../../../../styles/AboutStyles.css"

export default function About() {
    return (
        <section className="about-wrapper">
            <section className="about">
                <article className="container">
                    <img src="luhs-cleaning-service-about.svg" width={550} height={100} alt="About Luh's Cleaning Service" />
                    <p>We prioritize building strong client relationships, delivering exceptional service quality, and maintaining flexibility as one of our core values. Flexibility to discuss pricing, scheduling, and the specific needs of each cleaning task. Whether you need light cleaning, deep cleaning, or regular maintenance, we adapt to your requirements.</p>
                    <p>Our services are available any time, any day of the week, with schedules tailored to fit your needs. While we offer flexibility, we never compromise on punctuality or professionalism, ensuring commitment, detailed planning, and precise results.</p>
                    <p>With extensive experience, ongoing training, and a dedication to excellence, I deliver top-notch cleaning services for any type of space. Additionally, our carefully selected products and equipment prioritize the safety and comfort of our clients and staff. We also take every precaution to protect your furniture, floors, windows, and finishes during the cleaning process.</p>
                </article>
            </section>
            <div className="about-background-logo">
                <img src="LC-logomarca.svg" width={650} alt="luhs cleaning logo-marca" />
            </div>
        </section>
    );
}
