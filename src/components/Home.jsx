import styles from "./css/home.module.css";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Bar from "./bar";
import Caraousel1 from "./caraousel1";
import Caraousel2 from "./caraousel2";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [bikes, setBikes] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDDate, setSelectedDDate] = useState("");
  const [selectedDTime, setSelectedDTime] = useState("");

  localStorage.setItem("date", JSON.stringify(selectedDate));
  localStorage.setItem("time", JSON.stringify(selectedTime));
  localStorage.setItem("ddate", JSON.stringify(selectedDDate));
  localStorage.setItem("dtime", JSON.stringify(selectedDTime));

  useState(() => {
    fetch("https://bikeapis.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => {
        // take ony 4 data
        setBikes(data.slice(0, 4));
      });
  });
  return (
    <div>
      <img
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg"
        alt="homeI"
      />
      <div className={styles.dateBox}>
        <Heading fontSize="26px" fontWeight="500" className={styles.dataH1}>
          Search your next ride
        </Heading>
        <p className={styles.pickUp}>Pickup</p>
        <div className={styles.datTi}>
          <input
            type="date"
            name="start"
            placeholder="Date"
            onChange={(date) => setSelectedDate(date.target.value)}
            selected={selectedDate}
          />
          <input
            type="time"
            name="end"
            className={styles.times}
            placeholder="Time"
            onChange={(date) => setSelectedTime(date.target.value)}
            selected={selectedTime}
          />
        </div>
        <p className={styles.dropOff}>Dropoff</p>
        <div className={styles.datTi}>
          <input
            type="date"
            name="start"
            placeholder="Date"
            onChange={(date) => setSelectedDDate(date.target.value)}
            selected={selectedDDate}
          />
          <input
            type="time"
            name="end"
            className={styles.times}
            placeholder="Time"
            onChange={(date) => setSelectedDTime(date.target.value)}
            selected={selectedDTime}
          />
        </div>
        <Button
          width="300px"
          marginTop="50px"
          marginLeft="15px"
          fontSize="20px"
          backgroundColor="#FDB605"
        >
          <Link to="/bookingPage">Search</Link>
        </Button>
        <div className={styles.infod}></div>
      </div>
      <Button
        position="absolute"
        zIndex="4"
        marginLeft="920px"
        marginTop="-300px"
        height="55px"
        width="188px"
        backgroundColor="#FDB605"
        fontSize="18px"
      >
        Shop Now
      </Button>
      <div className={styles.info}>
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_sanitized-a37325c03fb50fd9b2783d574ba67c40cb7b8a90d5951a85f72095904943e1d6.png"
          alt="img"
        ></img>
        <Heading fontSize="18px" fontWeight="200" as="h6" size="xs">
          Sanitized Vehicles
        </Heading>
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png"
          alt="img"
        ></img>
        <Heading fontSize="18px" fontWeight="200" as="h6" size="xs">
          Vehicle Insuarence
        </Heading>
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png"
          alt="img"
        ></img>
        <Heading fontSize="18px" fontWeight="200" as="h6" size="xs">
          24/7 Roadside Assistance
        </Heading>
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png"
          alt="img"
        ></img>
        <Heading fontSize="18px" fontWeight="200" as="h6" size="xs">
          Bike Maintainence
        </Heading>
      </div>
      <div className={styles.sep1}>
        <Heading as="h3" size="lg" fontWeight="600">
          OUR FLEET
        </Heading>
        <Bar />
      </div>
      <div className={styles.box}>
        {bikes.map((e, i) => (
          <div key={i} className={styles.boxes}>
            <Heading fontSize="16px" fontWeight="semibold">
              {e.name}
            </Heading>
            <img src={e.image} alt="images"></img>
            <div className={styles.boxesline}></div>
            <Heading fontSize="20px" marginTop="10px" fontWeight="500">
              {e.price}
            </Heading>
            <Button
              width="100%"
              marginTop="10px"
              fontSize="18px"
              backgroundColor="#FDB605"
              borderTopLeftRadius="0px"
              borderTopRightRadius="0px"
            >
              BOOK NOW
            </Button>
          </div>
        ))}
      </div>
      <div className={styles.excluding}>
        <Heading fontSize="18px" fontWeight="500">
          *Excluding of all taxes
        </Heading>
      </div>
      <div className={styles.quality}>
        <Heading as="h3" size="lg" fontWeight="600">
          WE BELIEVE IN QUALITY
        </Heading>
        <Bar />
      </div>
      <div className={styles.cra11}>
        <Caraousel1 />
      </div>
      <div className={styles.sep1}>
        <Heading as="h3" size="lg" fontWeight="600" marginTop="230px">
          FEATURED IN
        </Heading>
        <Bar />
        <div className={styles.cra2}>
          <Caraousel2 />
        </div>
      </div>
    </div>
  );
}
