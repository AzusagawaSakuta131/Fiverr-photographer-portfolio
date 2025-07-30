const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/alex_photo",
    description: "Follow my latest photo shoots and behind-the-scenes stories.",
    icon: "📸",
  },
  {
    name: "500px",
    url: "https://500px.com/alex_photo",
    description: "Explore my curated portfolio of high-quality photographs.",
    icon: "🌐",
  },
  {
    name: "Flickr",
    url: "https://flickr.com/photos/alex_photo",
    description: "A vast collection of my travel and landscape photography.",
    icon: "📷",
  },
  {
    name: "Behance",
    url: "https://behance.net/alex_photo",
    description: "Creative projects and collaborations showcased professionally.",
    icon: "🎨",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/alex_photo_channel",
    description: "Watch my tutorials and photo editing walkthroughs.",
    icon: "▶️",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alex_photo",
    description: "Connect professionally and explore my photography career.",
    icon: "💼",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="social-cards-container">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            <div className="social-icon">{social.icon}</div>
            <div className="social-info">
              <h3>{social.name}</h3>
              <p>{social.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
