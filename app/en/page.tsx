import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrinityCards from "@/components/TrinityCards";
import CTA from "@/components/CTA";
import Carousel from "@/components/Carousel";
import FooterSection from "@/components/FooterSection";

export const metadata = {
    title: "Segue Yachts | Redefining Limits",
    description: "The New Era of Segue. Redefining the limits of naval design.",
};

export default function HomeEn() {
    return (
        <>
            <Navbar lang="en" />
            <Hero lang="en" />
            <TrinityCards lang="en" />
            <CTA lang="en" />
            <Carousel lang="en" />
            <FooterSection lang="en" />
        </>
    );
}
