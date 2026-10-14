
import Link from "next/link";

export const metadata = {
  title: "404 Page Not Found | KidiWebTech",
  description:
    "The page you are looking for could not be found. Explore KidiWebTech website development and SEO services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-black px-6 py-20 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* KidiWebTech Logo */}
        <Link href="/" aria-label="KidiWebTech Home">
          <img
            src="/kidiwebtech-logo.png"
            alt="KidiWebTech Logo"
            className="mx-auto mb-8 h-16 w-auto object-contain"
          />
        </Link>

        {/* 404 Number */}
        <h1 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
          Sorry, the page you are looking for does not exist
          or may have been moved. Let&apos;s get you back
          to the right place.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-purple-700"
          >
            ← Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-purple-400 hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          KidiWebTech — Website Development &amp; SEO Services
        </p>
      </div>
    </main>
  );
}
