import Link from "next/link";

interface CarouselProps {
  pic: string;
  pic2: string;
  pic3: string;
  pic4: string;
  pic5: string;
  pic6: string;
  pic7: string;
  pic8: string;
  id: number,
}

export default function Carousel({pic, pic2, pic3, pic4, pic5, pic6, pic7, pic8, id}: CarouselProps){
    return(
<div className="carousel md:h-full md:w-full">
  <div id={`slide${id}1`} className="carousel-item relative w-full">
    <img
      src={pic}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}8`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}2`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}2`} className="carousel-item relative w-full">
    <img
      src={pic2}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}1`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}3`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}3`} className="carousel-item relative w-full">
    <img
      src={pic3}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}2`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}4`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}4`} className="carousel-item relative w-full">
    <img
      src={pic4}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}3`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}5`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}5`} className="carousel-item relative w-full">
    <img
      src={pic5}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}4`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}6`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}6`} className="carousel-item relative w-full">
    <img
      src={pic6}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}5`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}7`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}7`} className="carousel-item relative w-full">
    <img
      src={pic7}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}6`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}8`} className="btn btn-circle">❯</Link>
    </div>
    </div>
  <div id={`slide${id}8`} className="carousel-item relative w-full">
    <img
      src={pic8}
      className="w-full aspect-video object-cover" />
    <div className="absolute left-5 right-5 top-1/2 hidden md:flex -translate-y-1/2 transform justify-between">
      <Link href={`#slide${id}7`} className="btn btn-circle">❮</Link>
      <Link href={`#slide${id}1`} className="btn btn-circle">❯</Link>
    </div>
    </div>
</div>
    )
};