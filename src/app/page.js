import { Open_Sans, Roboto_Serif,  } from "next/font/google";
import Image from "next/image";

const open_sans = Open_Sans({
  subsets: ["cyrillic"],
  variable: "--font-open_sans",
});

const roboto = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">\
    <Image src={'/logo_white.png'} width={500} height={250} className="z-10 object-contain mt-32" />
     <video autoPlay muted loop className="object-contain w-full h-full fixed">
     <source src={'/coming_soon.mp4'} type="video/mp4"/>
      </video>
    </main>
  );
}
