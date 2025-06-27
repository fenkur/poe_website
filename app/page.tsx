import NavBar from "./components/NavBar";
import { Marcellus } from "next/font/google";
import Image from 'next/image';
import Portraits from './images/portraits/1.jpg';
import Chickii from './images/chickii/1.jpg';
import Animals from './images/animals/1.jpg';
import Landscapes from './images/landscape/1.jpg';
import Images from './images/carousel/1.jpg'
import Link from 'next/link';

const MarcellusFont = Marcellus({
    subsets: ["latin"],
    weight: "400",
});


export default function Home() {
  return (
    <>
      <NavBar />

      {/* Carousel Section */}
      <section>
        <div className="w-screen h-screen">
          <Image src={Images} fill priority className="px-12 py-15" alt="Carousel-Image" quality={100} />
        </div>
      </section>

      {/* Portfolio Section */}
      <section>
        
      </section>
    </>
  );
}
