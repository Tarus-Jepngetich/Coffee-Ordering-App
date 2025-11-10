// src/components/Footer.jsx
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <footer className="border-t border-coffee-dark/40 bg-coffee-cream/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-coffee-dark">
        {/* Left: Date */}
        <span className="font-medium">{today}</span>

        {/* Middle: Social icons */}
        <div className="flex items-center gap-3 text-coffee-dark">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-coffee-dark/40 flex items-center justify-center hover:bg-coffee-dark hover:text-coffee-cream transition"
            aria-label="Instagram"
          >
            <FaInstagram size={12} />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-coffee-dark/40 flex items-center justify-center hover:bg-coffee-dark hover:text-coffee-cream transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={12} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-coffee-dark/40 flex items-center justify-center hover:bg-coffee-dark hover:text-coffee-cream transition"
            aria-label="Twitter"
          >
            <FaXTwitter size={12} />
          </a>
        </div>

        {/* Right: Privacy link */}
        <a
          href="#privacy"
          className="hover:underline underline-offset-4 text-coffee-dark/80 font-medium"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
