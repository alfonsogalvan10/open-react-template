import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo-white.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f1c1c] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
            <Image src={logo} alt="Cruip Logo" width={350} height={350} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex justify-center gap-8 text-sm font-medium text-white">
            <li>
              <a href="#0" className="hover:text-green-200 transition">
                Homepage
              </a>
            </li>
            <li>
              <a href="#0" className="hover:text-green-200 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#0" className="hover:text-green-200 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#0" className="hover:text-green-200 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#0" className="hover:text-green-200 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="#0"
            aria-label="Facebook"
            className="text-white hover:text-green-200 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#0"
            aria-label="X (Twitter)"
            className="text-white hover:text-green-200 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#0"
            aria-label="Instagram"
            className="text-white hover:text-green-200 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#0"
            aria-label="LinkedIn"
            className="text-white hover:text-green-200 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
