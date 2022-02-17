import styles from "./css/location.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../appContext/AppContextProvider";
import { Text } from "@chakra-ui/react"

export default function Location({ state }) {

    const [location, setlocation] = useState([]);
    useState(() => {
        fetch("https://bikeapis.herokuapp.com/locations")
            .then((res) => res.json())
            .then((data) => {
                setlocation(data);
            });
    });
    
    const { setLocation } = useContext(AppContext)
    function setName(data) {
        localStorage.setItem("loc", JSON.stringify(data))
        setLocation(data)
    }
    return (
        <div className={styles.main} >
            <div className={styles.locations}>
                <div className={styles.top}>
                    <div>
                        <img src="https://www.kindpng.com/picc/m/600-6000026_royal-brothers-logo-hd-png-download.png" alt="logo"></img>
                    </div>
                    <div className={styles.locaBar}>
                    </div>
                    <div>
                        <Text fontSize="18px" fontWeight="500">Bike Rentals</Text>
                    </div>
                </div>
                <div className={styles.search}>
                    <div className={styles.searchlogo}>
                        <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="search"></img>
                    </div>
                    <div className={styles.searchI}>
                        <input placeholder="Search or type city to select" />
                    </div>
                    <div className={styles.clear}>
                        <Text fontSize="18px" fontWeight="500">Clear</Text>
                    </div>
                </div>
                <div className={styles.tiles}>
                    {location.map((e, i) => <div key={i} className={styles.tile}>
                        <img onClick={() => { state(false); setName(e.location) }} src={e.image} alt="locatios"></img>
                        <Text className={styles.tilestext}>{e.location}</Text>
                    </div>)}
                </div>
                <div className={styles.select}>
                    <Text fontSize="18px" fontWeight="500" marginTop="20px">SELECT CITY TO CONTINUE</Text>
                </div>
            </div>
        </div>
    )
}