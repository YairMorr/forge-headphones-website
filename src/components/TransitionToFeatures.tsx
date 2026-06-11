import Image from "next/image";

export default function TransitionToFeatures() {
  return (
    <section className="relative w-full aspect-[1444/1026] flex items-center justify-center bg-[#1c1c1e]">
      <div className="relative w-[45%] max-w-[654px] aspect-[653.56/574.38]">
        <Image
          src="/assets/headphone-transition.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
