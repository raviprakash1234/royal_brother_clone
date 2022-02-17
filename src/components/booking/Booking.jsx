import React from "react";
import "./Booking.css";
import styles from "../css/home.module.css";
// import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../redux/action";
import { Link } from "react-router-dom";


export const Booking = () => {
  let date = JSON.parse(localStorage.getItem("date"));
  let time = JSON.parse(localStorage.getItem("time"));
  let ddate = JSON.parse(localStorage.getItem("ddate"));
  let dtime = JSON.parse(localStorage.getItem("dtime"));
 
  
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state.bikes);
  // console.log('bikes:', bikes)


 let  x = Date.parse(date);
 
 let y = Date.parse(ddate);
 




let hour1 = time;
let hour2 = dtime;
// change into minutes
let hour1Min = hour1.split(":")[0];
let hour2Min = hour2.split(":")[0];
let ans = Math.abs(hour1Min - hour2Min);
if (hour1Min !== hour2Min && hour1.split(":")[1] === hour2.split(":")[1]) {
  ans = ans + 1;
 
}



let t = Math.abs((x - y)/3600000)+ans







  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="main">
    
      <div className="main-container">
        <div className="left-container">
          <h1>Filter</h1>
          <div className="filter">
            <h2 fontSize="15px" fontWeight="bold">
              Select date and time
            </h2>

            <p className={styles.pickUp}>Pickup date and time</p>
            <div className={styles.datTi}>
              {date ? (
                <input name="start" placeholder={date} />
              ) : (
                <input type="date" name="start" placeholder={date} />
              )}

              {time ? (
                <input name="end" className={styles.times} placeholder={time} />
              ) : (
                <input
                  type="time"
                  name="end"
                  className={styles.times}
                  placeholder={time}
                />
              )}
            </div>

            <p className={styles.dropOff}>Dropoff date and time</p>
            <div className={styles.datTi}>
              {ddate ? (
                <input name="start" placeholder={ddate} />
              ) : (
                <input type="date" name="start" placeholder={ddate} />
              )}

              {dtime ? (
                <input
                  name="end"
                  className={styles.times}
                  placeholder={dtime}
                />
              ) : (
                <input
                  type="time"
                  name="end"
                  className={styles.times}
                  placeholder={dtime}
                />
              )}
            </div>

            <div style={{ marginLeft: "1.5em", marginTop: "20px" }}>
              <p style={{ fontWeight: "bold" }}>Search Duration</p>
              <p>1 day 2 hours</p>
            </div>
            <Button
              width="300px"
              marginTop="50px"
              marginLeft="15px"
              fontSize="20px"
              backgroundColor="#FDB605"
              onClick={() => {}}
            >
              Apply Filter
            </Button>
          </div>
        </div>
        <div className="right-container">
          <div className="main-heading">
            <p style={{ color: "black", fontWeight: "bold" }}>Sort by</p>
            <p>Relevance</p>
            <p>Price-Low to High</p>
            <p>Price-High to low</p>
          </div>
          <div className="filtered-data">
            {bikes.map((bike) => (
              <div className="data-div">
                <p style={{ fontWeight: "bold" }}>{bike.name} </p>
                <img
                  width="200px"
                  height="200px"
                  src={bike.image}
                  alt={bike.image}
                ></img>
                <div className="medium-div">
                  <div>
                    <p>{time}</p>
                    <p>{date}</p>
                  </div>
                  <div>
                    <p
                      style={{
                        background: "black",
                        borderRadius: "50%",
                        padding: "3px 6px ",
                        fontSize: "0.8rem",
                        color: "white",
                      }}
                    >
                      to
                    </p>
                  </div>
                  <div>
                    <p>{dtime}</p>
                    <p>{ddate}</p>
                  </div>
                </div>
                <div className="bottom-div">
                  <p>₹ {bike.hourPrice*t}</p>
                  <Link to={`/checkout/${bike._id}`}>
                    <button
                      style={{
                        background: "rgb(254,210,80)",
                        padding: "8px 2.5em",
                        borderRadius: "4px",
                      }}
                    >
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};
