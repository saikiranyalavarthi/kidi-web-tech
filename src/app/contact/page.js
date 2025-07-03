export const metadata = {
  title: "Contact Us - KIDIWEBTECH",
  description:
    "Get in touch with KIDIWEBTECH for digital marketing, web and app development services.",
};

export default function ContactPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          We’re here to help your business grow. Reach out to us today!
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <form
            action="https://formsubmit.co/info@kidiwebtech.com"
            method="POST"
            className="grid gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* WhatsApp Button */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Or message us directly:</p>
            <a
              href="https://wa.me/919390627367?text=Hi%20KIDIWEBTECH,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
            >
              📱 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
