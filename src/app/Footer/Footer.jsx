import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white pt-14 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">KIDIWEBTECH</h2>
          <p className="text-sm leading-relaxed">
            Digital Marketing & Development Agency. We help your business grow
            with SEO, ads, web, and mobile apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch CTA */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Let’s Connect</h3>
          <p className="text-sm mb-4 leading-relaxed">
            We'd love to hear from you! Whether you're starting a new project,
            improving your current presence, or just exploring ideas — let's
            build something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 font-medium px-5 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-indigo-400 mt-10 mb-4"></div>

      {/* Contact and Copyright */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-200 gap-4">
        <div>
          <p>
            Email:{" "}
            <a
              href="mailto:info@kidiwebtech.com"
              className="underline hover:text-white"
            >
              info@kidiwebtech.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/919390627367"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              +91 93906 27367
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          © {new Date().getFullYear()} KIDIWEBTECH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
