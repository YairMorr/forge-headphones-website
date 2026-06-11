import Image from "next/image";

export default function VideoPromo() {
  return (
    <section className="relative w-full aspect-[1440/894] overflow-hidden">
      <Image
        src="/assets/video-promo-placeholder.png"
        alt=""
        fill
        className="object-cover object-top"
      />
    </section>
  );
}
