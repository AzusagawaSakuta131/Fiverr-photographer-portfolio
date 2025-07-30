const photos = [
  "./photo1.jpg",
  "./photo2.jpg",
  "./photo3.jpg",
  "./photo4.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>My Work</h2>
      <div className="photo-grid">
        {photos.map((src, idx) => (
          <div key={idx} className="photo-item">
            <img src={src} alt={`photo-${idx}`} />
          </div>
        ))}
      </div>
    </section>
  );
}