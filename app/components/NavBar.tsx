import { Marcellus } from "next/font/google";
import Link from 'next/link';

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
});

export default function NavBar() {
  return (
    <header className={`sticky top-0 left-0 z-50 w-full ${marcellus.className}`}>
      <div className="mx-auto max-w-screen-sm px-0 py-4">
        <div className="flex w-full items-center justify-between gap-y-2">
          <a href="/" className="text-neutral-800 hover:text-neutral-200">Poe Low Photography</a>

          <nav className="flex items-center gap-9 text-neutral-800 text-xs relative">
            <a href="/" className="text-[#6D3B07]">Home</a>

            {/* Dropdown Menu */}
            <div className="group relative">
              <div className="hover:text-neutral-200">
                Portfolio
              </div>

              <div className="absolute left-0 top-full hidden group-hover:block z-50">
                <div className="flex flex-col">
                  <Link href="/portraits" className="py-2 hover:underline hover:text-neutral-200">Portraits</Link>
                  <Link href="/chickii" className="py-2 hover:underline hover:text-neutral-200">Chickii</Link>
                  <Link href="/animals" className="py-2 hover:underline hover:text-neutral-200">Animals</Link>
                  <Link href="/landscapes" className="py-2 hover:underline hover:text-neutral-200">Landscapes</Link>
                </div>
              </div>
            </div>

            <a href="/contact" className="hover:underline hover:text-neutral-200 transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
