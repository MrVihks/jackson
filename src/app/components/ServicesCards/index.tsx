import '../../../../styles/ServiceCardStyles.css';

export default function ServicesCards() {
return (
    <section className="services-wrapper">
        <section className="services">
            <article className="container">
                <article className="services-grid">
                    <ServiceCard
                        icon="icons/cleaning-services-icon.svg"
                        title="Cleaning Services"
                        description="Tailored cleaning solutions for residential and commercial spaces, ensuring spotless results every time."
                    />
                    <ServiceCard2
                        icon="icons/housekeeping-icon.svg"
                        title="Housekeeping"
                        description="Comprehensive housekeeping services to keep your home organized, clean, and stress-free."
                    />
                    <ServiceCard
                        icon="icons/professional-cleaning-icon.svg"
                        title="Professional Cleaning"
                        description="Expert cleaning services delivered with professionalism and precision, for a space that truly shines."
                    />
                    <ServiceCard2
                        icon="icons/janitorial-icon.svg"
                        title="Janitorial"
                        description="Reliable janitorial services for offices and businesses, maintaining a clean and professional environment."
                    />
                    <ServiceCard
                        icon="icons/deep-cleaning-icon.svg"
                        title="Deep Cleaning"
                        description="Thorough deep cleaning services that reach every nook and cranny, perfect for seasonal refreshes or special occasions."
                    />
                    <ServiceCard2
                        icon="icons/maid-service-icon.svg"
                        title="Maid Service"
                        description="Personalized maid services designed to fit your daily cleaning needs with care and attention to detail."
                    />
                </article>
            </article>
        </section>
    </section>
);

}

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string; 
}

function ServiceCard({ title, description, icon }: ServiceCardProps ) {
    return (
        <div className="service-card">
            <img src={icon} alt={`${title} icon`} className="service-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
function ServiceCard2({ title, description, icon }: ServiceCardProps ) {
    return (
        <div className="service-card-2">
            <img src={icon} alt={`${title} icon`} className="service-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}