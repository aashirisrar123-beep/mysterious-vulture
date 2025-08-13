
import Link from "next/link";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-primary">
            [PLACEHOLDER: Restaurant Name]
          </h3>
          <p className="text-gray-300">
            [PLACEHOLDER: Short restaurant description for footer. e.g., Experience the best of London's culinary scene with us.]
          </p>
          <div className="flex space-x-4">
            {/* Placeholder Social Media Icons */}
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">Insta</a>
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">FB</a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">TW</a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-medium text-primary">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <Link href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
            <Link href="#menu" className="text-gray-300 hover:text-primary transition-colors">Menu</Link>
            <Link href="#reservations" className="text-gray-300 hover:text-primary transition-colors">Reservations</Link>
            <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-medium text-primary">Contact Info</h4>
          <p className="text-gray-300">[PLACEHOLDER: Restaurant Address]</p>
          <p className="text-gray-300">[PLACEHOLDER: Phone Number]</p>
          <p className="text-gray-300">
            <a href="mailto:[PLACEHOLDER:Email]" className="hover:text-primary transition-colors">[PLACEHOLDER:Email]</a>
          </p>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>
          &copy; {currentYear} [PLACEHOLDER: Restaurant Name]. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
