import { Marcellus } from "next/font/google";

const MarcellusFont = Marcellus({
    subsets: ["latin"],
    weight: "400",
});


export default function NavBar () {
    return (
        <div className={MarcellusFont.className}>
            <header className="bg-[#1f1f1f] backdrop-blur-sm">
                <div className="mx-auto max-w-screen-sm px-5 py-4">
                    <div className="flex flex-wrap gap-y-2 justify-between">
                        <a href="/" target="_self" className="inline-block">
                            <div className="text-white"> Poe Reh </div>
                        </a>
                        <nav className="flex gap-1">
                            <a href="/about" target="_self" className="inline-block">
                                <div className="text-white"> About </div>
                            </a>
                            <span className="text-white"> / </span>
                            <a href="/projects" target="_self" className="inline-block">
                                <div className="text-white"> Projects </div>
                            </a>
                            <span className="text-white"> / </span>
                            <a href="/contact" target="_self" className="inline-block">
                                <div className="text-white"> Contact </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}