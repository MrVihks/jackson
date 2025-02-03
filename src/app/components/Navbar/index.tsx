import Link from "next/link";
import "../../../../styles/NavbarStyles.css";

export default function Navbar() {
  return (
    <header>
      <nav className="container, navbar">
        <img
          src="navbar-luhs-cleaning-service.svg"
          width={300}
          height={70}
          alt="Luh&apos;s Cleaning Service Logo"
        />
        <Link
          href="https://api.whatsapp.com/send?phone=17323074333&text=Hello!+I+am+contacting+you+via+Luh%27s+Cleaning+Service+website.+I+would+like+to+know+more+about+your+cleaning+service."
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
