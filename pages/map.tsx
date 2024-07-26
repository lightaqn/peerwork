import React, { useState, useEffect } from "react";
import Map from "../parts/Map";
// import Array from "../parts/Array";
// import MapHeader from "../parts/MapHeader";
// import map from "../typings";
import { getLocationsData, getWeatherData } from "./api";
import { Grid, CssBaseline } from "@material-ui/core";

import { useSelector } from "react-redux";
import { selectMapIsOpen } from "../store/slices/mapSlice";
// const google = window.google;

export default function map() {
  // const mapIsOpen = useSelector(selectMapIsOpen);
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [coords, setCoords] = useState({ lat: 10.99835602, lng: 77.01502627 });
  const [type, setType] = useState("restaurants");
  // const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState("");
  // const [autoComplete, setAutoComplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      //     getWeatherData(coords.lat, coords.lng).then((data) =>
      //       setWeatherData(data)
      //     );

      getLocationsData(type, bounds.ne, bounds.sw).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
        setRating("");
      });
    }
  }, [type, bounds]);

  // const onLoad = (autoC) => setAutoComplete(autoC);

  // doublecheck with documentation
  // const onPlaceChanged = () => {
  //   const lat = autoComplete.getPlace().geometry.location.lat();
  //   const lng = autoComplete.getPlace().geometry.location.lng();
  //   setCoords({ lat, lng });
  // };

  return (
    <>
      {/* <CssBaseline />
      <MapHeader onPlaceChanged={onPlaceChanged} onLoad={onLoad} /> */}

      <div className="flex flex-row w-full h-full mx-auto mr-20 mb-0 mt-5 p-20 ">
        <div className="flex-none w-14 h-14">Sidebar</div>

        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid xs={12} md={8}>
            <Map
              setCoords={setCoords}
              setBounds={setBounds}
              coords={coords}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>

          {/* <Grid xs={12} md={4}>
            <Array
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

// declare global {
//   interface Window {
//     map: () => void;
//   }
// }

// </div> <div className="flex-auto w-64">
//             <div className="flex-auto w-32"></div>

{
  /* <Map
            
            weatherData={weatherData}
            
            /> */
}
