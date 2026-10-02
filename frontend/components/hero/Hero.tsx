import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="">
      <div className="mx-auto w-full">
        <HeroSlider />

        {/* Preview of the next section */}
        <div className="h-16 sm:h-20" />
      </div>
    </section>
  );
}