export default function About() {
  const cards = [
    {
      title: "🎨 Photography Philosophy",
      content:
        "I believe every photograph tells a silent story. My creative inspiration comes from capturing genuine emotions and moments, freezing them in time through the lens to share with future selves and others.",
    },
    {
      title: "📸 Experience & Portfolio",
      content:
        "Since starting photography in 2018, I have documented important moments for hundreds of clients. I've worked as a visual consultant for local music festivals and indie brands, with my work exhibited in the 'City Lights' photography show.",
    },
    {
      title: "🚀 Why Photography",
      content:
        "Initially, it was just to document my travels, but the moment I pressed the shutter, I found a new way to express the world. Since then, photography became my profession and passion.",
    },
    {
      title: "🤝 Client Story",
      content:
        "I once discreetly photographed a proposal for a couple. When she turned around and saw the ring, tears welled up in her eyes. That photo later appeared on their wedding invitations.",
    },
    {
      title: "🔧 Gear & Technical Preferences",
      content:
        "I primarily use the Sony α7 IV with Sigma Art lenses. I prefer natural light photography and excel at Lightroom color grading and simple post-processing, with a style that emphasizes natural, clean storytelling.",
    },
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-cards-container">
        {cards.map((card, idx) => (
          <div key={idx} className="about-card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
