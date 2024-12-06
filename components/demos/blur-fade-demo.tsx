import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/1.jpg",
    title: "StarkBridge",
    link: "https://starkbridge.vercel.app",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/2.jpg",
    title: "Etherea",
    link: "https://main.d1yk7p3bc2fser.amplifyapp.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/3.jpg",
    title: "Rannq Studios",
    link: "https://rannq.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/4.jpg",
    title: "BNSHub",
    link: "https://main.dis8057g81z5j.amplifyapp.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/5.jpg",
    title: "Esamale Farms",
    link: "esamale-farms.site123.me",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/6.jpg",
    title: "Enetworks Jobs",
    link: "enetworksjobs-com-ng.vercel.app",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/7.jpg",
    title: "Felojef Innovations",
    link: "felojefinnovation.com.ng",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/8.jpg",
    title: "Astora",
    link: "astora-finance.vercel.app",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
