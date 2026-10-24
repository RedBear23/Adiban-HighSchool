import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full">
        <HeroSlider />

        {/* Preview of the next section */}
        <div/>
      </div>
    </section>
  );
}