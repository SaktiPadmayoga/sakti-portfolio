
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Cobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 200 * 2,
      height: 150 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Lokasi di Bali: [latitude, longitude]
        { location: [-8.6705, 115.2126], size: 0.07 }, // Denpasar  // Ubud
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="App">
      <h1>Bali, Indonesia</h1>
     
      <canvas
        ref={canvasRef}
        style={{
          width: 300,
          height: 150,
          maxWidth: "100%",
          aspectRatio: 1,
          display: "block",
          margin: "auto"
        }}
      />
    </div>
  );
}
