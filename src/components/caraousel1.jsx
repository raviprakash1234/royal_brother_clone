import {Carousel} from "react-bootstrap"
import styles from "./css/craousel2.module.css"
export default function Caraousel1(){
    return(
    <Carousel className={styles.mainCra} indicators={true} variant="dark">
    <Carousel.Item interval={2000}>
    <div className={styles.divIaa}>
    <div className={styles.divIa1a}>
      <p>#Ready to serve in 40+ cities</p>
      <p>Think of a city we are almost there.The next time you plan on exploring a city transport is sorted with royalbrothers.</p>
    </div>
      <img
        className="d-block w-100 "
        style={{height:"650px"}}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg"
        alt="First slide"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <div className={styles.divIaa}>
    <div className={styles.divIa1a}>
      <p>Bikes Maintained So Good.</p>
      <p>We obsses on giving you the best possible experience.That is why we have well bikes 24/7.</p>
    </div>
      <img
        className="d-block w-100 "
        style={{height:"650px"}}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg"
        alt="Second slide"
      />
</div>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <div className={styles.divIa}>
    <div className={styles.divIa1}>
      <p>We’re socially celebrated</p>
      <p>Our customer centric approch has got us  amazing
reviews. Be it any platform, you will see many users 
recommending our service</p>
    </div>
      <img
        className="d-block w-60 "
        style={{height:"650px"}}
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg"
        alt="Third slide"
      />
        </div>
    </Carousel.Item>
  </Carousel>
  
    )
}