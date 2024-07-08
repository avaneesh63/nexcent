import Carousel from "@/src/components/Carousel/Carousel";
import Client from "@/src/components/Clients/Client";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Client />
      <Footer />
    </div>
  );
}
