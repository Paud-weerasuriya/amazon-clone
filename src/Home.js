import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="1"
          title="JEAPKA 24 Inch Monitor Privacy Screen for 16:9-1 Pack Privacy Screen for Computer Monitor"
          price={21.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61KFaZ1KoxL._AC_SX679_.jpg"
        />
        <Product
          id="2"
          title="AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor"
          price={340.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller"
          price={43.7}
          rating={5}
          image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg"
        />
        <Product
          id="4"
          title="SD Card Reader for iPhone iPad, USB 3.0 Micro SD Card Reader"
          price={24.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81PlNuGt2eL._AC_SX679_.jpg"
        />
        <Product
          id="5"
          title="Large Mouse Pad,Elegant Gold Mandala Extended Computer Keyboard Mouse Pads"
          price={18.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/81+eN84eucS._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="GAOMON PD156PRO 15.6 Inch Pen Display 125% sRGB Full-Laminated Drawing Tablet"
          price={359.0}
          rating={2}
          image="https://m.media-amazon.com/images/I/71osUIDmBTL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
