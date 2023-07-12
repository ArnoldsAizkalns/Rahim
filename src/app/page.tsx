import Image from "next/image";
import lion from "../../public/lion.svg";
import rah from "../../public/rah.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Raleway } from "next/font/google";
import { Tulpen_One } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: "400",
});
const tulpen = Tulpen_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inika",
});

export default function Home() {
  return (
    <div className="w-full bg-white h-auto">
      <div className="h-16 bg-black flex justify-center p-2">
        <Image width={70} alt="/" src={lion} />
        <Image width={130} alt="/" src={rah} />
      </div>
      <div></div>
      <div className="w-full h-auto min-h-screen grid grid-cols-1 md:grid-cols-3">
        <div className="bg-1 flex-col md:mb-0 pb-10 justify-center items-center text-center">
          <h2
            className={`text-[400px] 2xl:text-[500px] pt-20 leading-[450px] ${tulpen.className}`}
          >
            1
          </h2>
          <h3 className="text-2xl">VEHICLE RENTAL</h3>
          <p className="text-[16px] 2xl:text-[20px] px-5 lg:px-10 pt-10 md:pt-20">
            We offer long-term vehicle rental services for business and private
            needs. With our expertise and tailored solutions, we provide
            convenient and customized financial options to meet your specific
            requirements.
          </p>
        </div>
        <div className="bg-2 flex-col md:mb-0 pb-10 justify-center items-center text-center">
          <h2
            className={`text-[400px] 2xl:text-[500px] pt-20 leading-[450px] ${tulpen.className}`}
          >
            2
          </h2>
          <h3 className="text-2xl">WEB DESIGN</h3>
          <p className="text-[16px] 2xl:text-[20px] hover px-5 lg:px-10 md:pt-20 pt-10">
            We provide specialized web design consulting services to help
            businesses create compelling online experiences. With our expertise
            and industry experience, we offer valuable insights, strategic
            guidance, and customized solutions to achieve your web design goals.
          </p>
        </div>
        <div className="bg-3 flex-col md:mb-0 pb-10 justify-center items-center text-center">
          <h2
            className={`text-[400px] 2xl:text-[500px] pt-20 leading-[450px] ${tulpen.className}`}
          >
            3
          </h2>
          <h3 className="text-2xl">CONSULTING</h3>
          <p className="text-[16px] 2xl:text-[20px] px-5 lg:px-10 md:pt-20 pt-10">
            We offer specialized consulting services to help businesses overcome
            challenges, make informed decisions, and achieve their goals. With
            our deep industry knowledge and extensive experience, we provide
            valuable insights, strategic guidance, and tailored solutions.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="h-44 items-center px-7 flex text-lg max-w-screen-lg mx-auto text-center ">
          <p className="text-[16px] 2xl:text-[20px]">
            Rahim is a multi-service company specializing in vehicle rental, web
            design, and consulting. With a focus on quality and customer
            satisfaction, we provide flexible long-term vehicle options,
            professional website development, and strategic guidance to help
            businesses succeed.
          </p>
        </div>
      </div>

      <div className="h-auto pb-10 pt-20 text-black bg-white">
        <div className="flex-col px-7 max-w-screen-lg mx-auto text-center">
          <h2 className="md:text-5xl text-3xl font-semibold">
            LET`S WORK TOGETHER
          </h2>
          <p className="pt-10 text-[16px] 2xl:text-[20px]">
            We welcome the opportunity to engage in meaningful discussions.
            Reach out to us to explore how we can assist you in overcoming
            challenges, making informed decisions, and achieving your goals.
            Let`s start a conversation today.
          </p>
          <div className="md:flex  pt-10 text-[16px] 2xl:text-[20px] gap-10 justify-center">
            <ul className="flex-col  md:text-left">
              <li className="p-1">Rahim, UAB</li>
              <li className="p-1">Registration code: 306128942</li>
              <li className="p-1">VAT: LT100015224519</li>
            </ul>
            <div className="flex-col">
              <div className="flex items-center md:justify-start justify-center gap-3 md:gap-2 p-1">
                <Phone />
                <Link href="tel:+370 606 07144">+370 606 07144</Link>
              </div>
              <div className="flex items-center md:justify-start justify-center gap-3 md:gap-2 p-1">
                <Mail />
                <Link href="mailto:info@rahim.lt">info@rahim.lt</Link>
              </div>
              <div className="flex md:justify-start justify-center gap-3 md:gap-2 p-1">
                <MapPin />
                <Link
                  href="https://www.google.com/maps/place/F.+Bogu%C5%A1evi%C4%8Diaus+g.+37,+13180+Savi%C4%8Di%C5%ABnai,+%D0%9B%D0%B8%D1%82%D0%B2%D0%B0/@54.5786924,25.5855769,17z/data=!3m1!4b1!4m5!3m4!1s0x46ddb8497749430f:0xe932addfc843f29!8m2!3d54.5786924!4d25.5855769?entry=ttu"
                  className="text-left"
                >
                  F. Boguševičiaus g. 37,
                  <br /> Savičiūnų k.,
                  <br /> LT-13180 Vilniaus r.
                </Link>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mx-auto pt-10">
            @ Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
