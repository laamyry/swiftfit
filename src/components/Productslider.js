import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Data/products.json";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        background: "var(--second-color)",
        borderRadius: "2rem",
        padding: "0.8rem",
        right: "0",
        zIndex: "5",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        background: "var(--second-color)",
        borderRadius: "2rem",
        padding: "0.8rem",
        marginRight: "0.6rem",
        left: "0",
        zIndex: "5",
      }}
      onClick={onClick}
    />
  );
}

export default function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mb-7">
      <div className="w-60 m-auto bg-[var(--primary-color)] rounded-br-3xl rounded-tl-3xl">
        <h3 className="text-3xl text-center self-center uppercase font-bold text-[var(--second-color)] overflow-hidden py-3 mt-8 mb-5 ">
          Top Deal
        </h3>
      </div>
      <Slider className="" {...settings}>
        {data.productSlider.map((product, index) => (
          <div
            key={index}
            className="flex justify-center m-auto z-50 "
          >
            <div className="productSlider-container w-64 flex flex-col bg-[var(--third-color)] p-3 rounded-2xl relative h-[28rem] mb-4 m-auto mt-3">
              <div>
                <img
                  className="bg-white w-52 h-72 object-contain"
                  src={product.image}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl mt-3">
                  {product.name}
                </h1>
                <h2 className="text-base">
                  {product.category}
                </h2>
                <h4>
                  {product.percent !== undefined
                    ? product.price -
                      (product.price * product.sale) / 100
                    : product.price -
                      (product.price * product.sale) / 100}
                  $
                </h4>
              </div>
              <div className="relative">
                <h3>{product.price}$</h3>
                <div className="absolute bg-orange-700 h-[0.07rem] w-8 top-[0.7rem] -left-[0.1rem]" />
              </div>
              <div className="bg-[#ffaebc] text-[#f8284b] absolute p-1 px-2 rounded-tl-xl rounded-br-xl top-2 right-2">
                -{product.sale}%
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
