import React from 'react'

export default function VideoEmbed() {
  return (
    <section className="section bg-[#111010] text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Watch Our Mission in Action</h2>
      <p className="max-w-xl mx-auto text-lg mb-8">
        A glimpse into how Aegis Research Group proactively blends cyber intelligence with physical protection.
      </p>
      <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Aegis Research Group Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
