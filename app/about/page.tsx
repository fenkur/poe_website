import { Marcellus } from "next/font/google";

const MarcellusFont = Marcellus({
    subsets: ["latin"],
    weight: "400",
});

export default function AboutPage() {
    return (
        <>
            <div className={MarcellusFont.className}>
                <div className="text-center my-30">
                    <h1 className="text-5xl"> Bio/Contact Information</h1>
                </div>
            </div>
        </>
    )
}