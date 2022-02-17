import { GET_DATA } from "./actionTypes";
import axios from "axios";
// import { GET_DATA } from "./actionTypes";

const getData = () => async (dispatch) => {
  try {
    const res = await axios.get("https://bikeapis.herokuapp.com/bikes");
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }

  //   const { data } = await fetch("http://localhost:3001/bikes");
  //   console.log("data", data);
  //   dispatch({ type: GET_DATA, payload: data });
};

export { getData };
