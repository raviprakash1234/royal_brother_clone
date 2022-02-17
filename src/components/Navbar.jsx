import { Text, Button } from "@chakra-ui/react";
import DrawerExample from "./Drawer";
import Location from "../components/Location";
import { Link, useParams } from "react-router-dom";

let location = JSON.parse(localStorage.getItem('loc'));
// let name = JSON.parse(localStorage.getItem("data.user.firstName"));
// console.log('name:', name)


export default function Nav() {
const {user} = useParams()
// console.log('user:', user)

  function handleClick() {
    return <Location />
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "row",
              marginLeft: "10px",
            }}
          >
            <DrawerExample />
            <Link to="/">
              <img
                style={{ height: "50px" }}
                src="https://www.kindpng.com/picc/m/600-6000026_royal-brothers-logo-hd-png-download.png"
                alt="logo"
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "55%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {/* applying media quesy as display hidden */}
            <div>
              <Link to="/bikes">
                <Text fontSize="16px" fontWeight="700">
                  Tariff
                </Text>
              </Link>
            </div>
            <div></div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "140px" }}
            >
              <Text fontSize="16px" fontWeight="700">
                What's New?
              </Text>
              <img
                style={{ height: "8px", marginTop: "11px", marginLeft: "20px" }}
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png"
                alt="arrow"
              ></img>
            </div>
            <div>
              <Text fontSize="16px" fontWeight="700">
                Carrers
              </Text>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "200px" }}
            >
              <Text fontSize="16px" fontWeight="700">
                Partner With Us
              </Text>
              <img
                style={{ height: "8px", marginTop: "11px", marginLeft: "20px" }}
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(1).png"
                alt="arrow"
              ></img>
            </div>
          </div>
          <div>
            <div
              style={{
                height: "40px",
                width: "200px",
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
                border: "1px solid black",
                marginTop: "10px",
                borderRadius: "4px",
                borderColor: "#FDB605",
              }}
            >
              <img
                style={{ height: "80%", marginLeft: "10px", marginTop: "4px" }}
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/location-71f31ec08c06cf6736a1d12d6381dfc5786c237acdb690006334bd670e011904.png"
                alt="location"
              ></img>
              <Text
                fontSize="13px"
                fontWeight="500"
                marginTop="10px"
                marginLeft="18px"
                onClick={handleClick}
              >{location}
              </Text>
              <img
                style={{
                  height: "8px",
                  marginTop: "15px",
                  position: "absolute",
                  zIndex: "-100",
                  marginLeft: "13%",
                }}
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/arrow-down-3548e3549fe7bc5cef0875b187abda4f7ab493450041e3d6f0d54e1158798ec0.png"
                alt="arrow"
              ></img>
            </div>
          </div>
          <div
            style={{
              marginLeft: "30px",
              marginRight: "10px",
              width: "200px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >

            <Button height="50px" width="80px" backgroundColor="transparent">
              <Link to="/login">Login</Link>
            </Button>
            <Button height="50px" width="80px" backgroundColor="#FDB605">
              {" "}
              <Link to="/signin">Sign up</Link>
            </Button>

          </div>
        </div>
      </div>
    </>
  );
}
