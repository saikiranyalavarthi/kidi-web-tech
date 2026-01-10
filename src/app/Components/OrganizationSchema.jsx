export default function OrganizationSchema() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KIDIWEBTECH",
            url: "https://www.kidiwebtech.com",
            logo: "https://www.kidiwebtech.com/logo.png",
            sameAs: [
              "https://www.instagram.com/kidiwebtech",
              "https://www.linkedin.com/company/kidiwebtech"
            ]
          }),
        }}
      />
    );
  }
  