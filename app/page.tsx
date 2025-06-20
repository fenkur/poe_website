import NavBar from "./components/NavBar";
import { Marcellus } from "next/font/google";
import Image from 'next/image';
import Portraits from './images/portraits/1.jpg';
import Chickii from './images/chickii/1.jpg';

const MarcellusFont = Marcellus({
    subsets: ["latin"],
    weight: "400",
});


export default function Home() {
  return (
    <>
      <NavBar />
      
      {/* Introduction Section */}
      <section>
        <div className={MarcellusFont.className}>
          <div className="text-center my-30">
            <h1 className="text-5xl"> Hi, I&apos;m Poe Reh!</h1>
            <p className="text-2xl my-2">Scroll down to see some of my work</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex justify-center">
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          <div className="flex justify-center">
            <Image src={Portraits} height={500} width={500} alt="Portrait-Projects" />
          </div>
          <div className="flex justify-center">
            <Image src={Chickii} height={500} width={500} style={{objectFit: 'contain'}} alt="Chickii-Project" />
          </div>
        </div>
      </section>

    </>
  );
}
