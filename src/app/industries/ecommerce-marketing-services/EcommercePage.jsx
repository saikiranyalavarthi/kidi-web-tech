"use client";

import Link from "next/link";

export default function EcommercePage() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Ecommerce Marketing Services in India
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Scale your online store with powerful ecommerce marketing strategies including SEO, paid ads, and conversion optimization.
        </p>
      </section>

      {/* LONG SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8 text-gray-300 leading-relaxed">

        <h2 className="text-3xl font-bold text-white">
          Complete Ecommerce Marketing Guide
        </h2>

        <p>
          Ecommerce marketing is the process of promoting online stores using digital channels such as search engines, social media, and paid advertising. With the rapid growth of online shopping in India, businesses must adopt strong marketing strategies to stay competitive.
        </p>

        <p>
          Today, customers compare products across multiple platforms before making a purchase. This makes it essential for ecommerce businesses to maintain strong visibility across Google, Instagram, and marketplaces.
        </p>

        <h2 className="text-2xl font-bold text-white">
          Why Ecommerce Marketing is Important
        </h2>

        <p>
          Ecommerce businesses face intense competition. Without proper marketing, even high-quality products fail to generate sales.
        </p>

        <p>
          Ecommerce marketing helps:
          - Increase website traffic  
          - Improve conversion rates  
          - Build brand awareness  
          - Generate consistent revenue  
        </p>

        <h2 className="text-2xl font-bold text-white">
          Ecommerce SEO Strategy
        </h2>

        <p>
          SEO helps your store rank on Google. When customers search for products, your website must appear on top results.
        </p>

        <p>
          SEO includes:
          - Product page optimization  
          - Category page SEO  
          - Technical SEO  
          - Blog content  
        </p>

        <h2 className="text-2xl font-bold text-white">
          Google Ads for Ecommerce
        </h2>

        <p>
          Google Ads allows ecommerce businesses to target customers actively searching for products. Shopping ads and search ads are highly effective for driving conversions.
        </p>

        <h2 className="text-2xl font-bold text-white">
          Social Media Marketing for Ecommerce
        </h2>

        <p>
          Platforms like Instagram and Facebook help showcase products visually. Influencer marketing also plays a major role in increasing sales.
        </p>

        <h2 className="text-2xl font-bold text-white">
          Conversion Rate Optimization
        </h2>

        <p>
          Increasing traffic is not enough. Optimizing your website for conversions ensures more visitors turn into customers.
        </p>

        <h2 className="text-2xl font-bold text-white">
          Content Marketing for Ecommerce
        </h2>

        <p>
          Blogs, guides, and videos help attract customers and improve SEO rankings.
        </p>

        <h2 className="text-2xl font-bold text-white">
          Why Choose KidiWebTech
        </h2>

        <p>
          We help ecommerce businesses grow using data-driven strategies and proven marketing techniques.
        </p>

        <h2 className="text-2xl font-bold text-white">
          Conclusion
        </h2>

        <p>
          Ecommerce marketing is essential for success in today’s digital world. Businesses that invest in marketing achieve higher growth and profitability.
        </p>

      </section>

      {/* CTA */}
      <div className="text-center py-16">
        <Link href="/contact" className="bg-teal-500 px-8 py-3 rounded-full">
          Get Free Ecommerce Strategy
        </Link>
      </div>

    </div>
  );
}