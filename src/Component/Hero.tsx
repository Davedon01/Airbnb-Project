import React, { useState } from "react";
import img1 from "../assets/Untitled1.jpg";
import img2 from "../assets/Untitled2.jpg";
import img3 from "../assets/Untitled3.jpg";
import img4 from "../assets/Untitled4.jpg";
import img5 from "../assets/Untitled5.jpg";
import img6 from "../assets/Untitled6.jpg";
import img7 from "../assets/Untitled7.jpg";
import img8 from "../assets/Untitled8.jpg";
import img9 from "../assets/Untitled9.jpg";
import img10 from "../assets/Untitled10.jpg";
import img11 from "../assets/images11.jpg";
import img12 from "../assets/images12.jpg";
import img13 from "../assets/images13.jpg";
import img14 from "../assets/images14.jpg";
import img15 from "../assets/images15.jpg";
import img16 from "../assets/images16.jpg";
import img17 from "../assets/images17.jpg";
import img18 from "../assets/images18.jpg";
import img19 from "../assets/images19.jpg";
import img20 from "../assets/images20.jpg";
import img21 from "../assets/images21.jpg";
import img22 from "../assets/images22.jpg";
import img23 from "../assets/images23.jpg";
import img24 from "../assets/images24.jpg";
import img25 from "../assets/images25.jpg";
import img26 from "../assets/images26.jpg";
import img27 from "../assets/images27.jpg";
import img28 from "../assets/images28.jpg";
import img29 from "../assets/images29.jpg";
import img30 from "../assets/images30.jpg";
import img31 from "../assets/images31.jpg";
import img32 from "../assets/images32.jpg";
import img33 from "../assets/images33.jpg";
import img34 from "../assets/images34.jpg";
import img35 from "../assets/images35.jpg";
import img36 from "../assets/images36.jpg";
import img37 from "../assets/images37.jpg";
import img38 from "../assets/images38.jpg";
import img39 from "../assets/images39.jpg";
import img40 from "../assets/images40.jpg";
import img41 from "../assets/images41.jpg";
import img42 from "../assets/images42.jpg";
import img43 from "../assets/images43.jpg";
import img44 from "../assets/images44.jpg";
import img45 from "../assets/images45.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Pause } from "lucide-react";

function chunkArray(array: any, size: any) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function Hero() {
  const [showAll, setShowAll] = React.useState(false);
  const [data, setData] = React.useState([
    { aptImg: img1, aptName: "Apt 1", aptPrice: "$1,000" },
    { aptImg: img2, aptName: "Apt 2", aptPrice: "$1,000" },
    { aptImg: img3, aptName: "Apt 3", aptPrice: "$1,000" },
    { aptImg: img4, aptName: "Apt 4", aptPrice: "$1,000" },
    { aptImg: img5, aptName: "Apt 5", aptPrice: "$1,000" },
    { aptImg: img6, aptName: "Apt 6", aptPrice: "$1,000" },
    { aptImg: img7, aptName: "Apt 7", aptPrice: "$1,000" },
    { aptImg: img8, aptName: "Apt 8", aptPrice: "$1,000" },
    { aptImg: img9, aptName: "Apt 9", aptPrice: "$1,000" },
    { aptImg: img10, aptName: "Apt 10", aptPrice: "$1,000" },
    { aptImg: img11, aptName: "Apt 11", aptPrice: "$1,000" },
    { aptImg: img12, aptName: "Apt 12", aptPrice: "$1,000" },
    { aptImg: img13, aptName: "Apt 13", aptPrice: "$1,000" },
    { aptImg: img14, aptName: "Apt 14", aptPrice: "$1,000" },
    { aptImg: img15, aptName: "Apt 15", aptPrice: "$1,000" },
    { aptImg: img16, aptName: "Apt 16", aptPrice: "$1,000" },
    { aptImg: img17, aptName: "Apt 17", aptPrice: "$1,000" },
    { aptImg: img18, aptName: "Apt 18", aptPrice: "$1,000" },
    { aptImg: img19, aptName: "Apt 19", aptPrice: "$1,000" },
    { aptImg: img20, aptName: "Apt 20", aptPrice: "$1,000" },
    { aptImg: img21, aptName: "Apt 21", aptPrice: "$1,000" },
    { aptImg: img22, aptName: "Apt 22", aptPrice: "$1,000" },
    { aptImg: img23, aptName: "Apt 23", aptPrice: "$1,000" },
    { aptImg: img24, aptName: "Apt 24", aptPrice: "$1,000" },
    { aptImg: img25, aptName: "Apt 25", aptPrice: "$1,000" },
    { aptImg: img26, aptName: "Apt 26", aptPrice: "$1,000" },
    { aptImg: img27, aptName: "Apt 27", aptPrice: "$1,000" },
    { aptImg: img28, aptName: "Apt 28", aptPrice: "$1,000" },
    { aptImg: img29, aptName: "Apt 29", aptPrice: "$1,000" },
    { aptImg: img30, aptName: "Apt 30", aptPrice: "$1,000" },
    { aptImg: img31, aptName: "Apt 31", aptPrice: "$1,000" },
    { aptImg: img32, aptName: "Apt 32", aptPrice: "$1,000" },
    { aptImg: img33, aptName: "Apt 33", aptPrice: "$1,000" },
    { aptImg: img34, aptName: "Apt 34", aptPrice: "$1,000" },
    { aptImg: img35, aptName: "Apt 35", aptPrice: "$1,000" },
    { aptImg: img36, aptName: "Apt 36", aptPrice: "$1,000" },
    { aptImg: img37, aptName: "Apt 37", aptPrice: "$1,000" },
    { aptImg: img38, aptName: "Apt 38", aptPrice: "$1,000" },
    { aptImg: img39, aptName: "Apt 39", aptPrice: "$1,000" },
    { aptImg: img40, aptName: "Apt 40", aptPrice: "$1,000" },
    { aptImg: img41, aptName: "Apt 41", aptPrice: "$1,000" },
    { aptImg: img42, aptName: "Apt 42", aptPrice: "$1,000" },
    { aptImg: img43, aptName: "Apt 43", aptPrice: "$1,000" },
    { aptImg: img44, aptName: "Apt 44", aptPrice: "$1,000" },
    { aptImg: img45, aptName: "Apt 45", aptPrice: "$1,000" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  

  const groupedData = chunkArray(data, 10); // Chunks of 10

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    PauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="space-y-8 px-6 py-4 overflow-hidden">
      {(showAll ? groupedData : groupedData.slice(0, 2)).map((group, idx) => (
        <div key={idx}>
          <Slider {...settings}>
            {group.map((apt: any, i: any) => (
              <div key={i} className="px-2 cursor-pointer">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <img
                    src={apt.aptImg}
                    alt={apt.aptName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <p className="font-semibold text-lg">{apt.aptName}</p>
                    <p className="text-gray-600 underline">{apt.aptPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}

      <div className="text-center">
        <p className="font-semibold">Continue exploring amaizing views</p>
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
}

export default Hero;
