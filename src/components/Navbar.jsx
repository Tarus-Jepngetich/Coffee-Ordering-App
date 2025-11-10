
import { useState, useEffect } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 10); // hides navbar after 10px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#Hero", label: "Home" },
    { href: "#About", label: "About Us" },
    { href: "#Menu", label: "Our Menu" },
    { href: "#Testimonials", label: "Testimonials" },
    { href: "#Gallery", label: "Gallery" },
    { href: "#Contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-coffee-cream/90 backdrop-blur-sm border-b border-coffee-dark/40">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-sm font-semibold tracking-wide text-coffee-dark">
            Brew &amp; Byte
          </div>

          {/* Links */}
          <ul className="hidden sm:flex gap-4 text-xs font-medium text-coffee-dark/80">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-coffee-dark hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
