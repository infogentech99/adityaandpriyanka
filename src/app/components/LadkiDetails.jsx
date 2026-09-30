'use client';
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import LadkiEvents from "../components/LadkiEvents";
import Wardrobe from "../components/Wardrobe";
import  PhotoGallery from "../components/PhotoGallery";
import Weather from "../components/Weather";
import Venues from "../components/Venues";

export default function LadkiDetails (){
    return (
        <div className="mx-auto w-full max-w-4xl p-6 text-center md:p-2">

      <p className="text-[17px] md:text-2xl text-[#B35800] font-cormorant-garamond">
        With the blessing of Smt. Pushpa Devi Dwarkani & Late Kishan Lal Ji Dwarkani
      </p> <br/>
 <p className="text-[17px] md:text-2xl text-[#B35800] font-cormorant-garamond">
        We cordially invite you to the wedding ceremony of their Grandson
      </p>

         <div className="mt-8 text-center">
          
            <h2
              className="text-[#B35800] font-pinyon-script text-center mt-14
            md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold"
            >
          Priyanka Dwarkani
            </h2>

            <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              (D/o Smt. Rakhi Dwarkani & Shri Kamal Dwarkani)
            </p>

            <h2
              className="text-[#B35800] font-pinyon-script text-center
            text-[38px] sm:text-7xl lg:text-[60px] leading-tight font-bold"
            >
              <span
                className="text-[#B35800] font-cormorant-garamond  text-center
            md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium"
              >
               With
              </span>
              <br />
             Aditya Tawri
            </h2>

            <p className="text-[#B35800] font-cormorant-garamond lg:text-[30px] md:text-2xl mt-2 text-[16px]">
             (S/o Smt. Kusum Lata Tawri & Shri Kishan Kumar Tawri)
            </p>

            <ScratchText/>
            <MarriageCountdown/>
            <LadkiEvents/>
            <Wardrobe/>
            <PhotoGallery/>
            <Weather/>
            <Venues/>
          </div>

    </div>
    )
}