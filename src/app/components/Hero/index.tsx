import "../../../../styles/HeroStyles.css";

export default function Hero() {
  return (
    <section className="bg-hero">
      <section className="hero">
        <article className="hero-logo">
          <img
            src="hero-luhs-cleaning-service.svg"
            width={500}
            alt="Luh's Cleaning Service"
            className="hero-logo"
          />
        </article>
        <article className="hero-blob">
          <img
            src="blob.svg"
            alt="hero blob"
            className="hero-element"
          />
        </article>
        <article className="hero-text">
          <p>
            Hi, I&apos;m Luh! At Luh&apos;s Cleaning Service, I take pride in delivering
            exceptional cleaning solutions tailored to your needs. Every corner
            shines, every surface sparkles, because your space deserves the
            best. Let me help you create a clean and welcoming environment!
          </p>
        </article>
      </section>
    </section>
  );
}
