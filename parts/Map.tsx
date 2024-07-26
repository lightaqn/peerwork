import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { MapIcon } from "@heroicons/react/outline";
// import members from "parts/Members"

interface Props {
  Map: any;
}

export default function Map({
  setCoords,
  setBounds,
  coords,
  places,
  setChildClicked,
  weatherData,
}: any) {
  const isMobDev = useMediaQuery("(max-width:600px)");
  // const google = window.google;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqDPi6-zuSoVPqffrZC2xolvx6KF4bFlw" }}
        defaultCenter={defaultProps.center}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places.length &&
          places?.map((place, i) => (
            <div
              className=""
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isMobDev ? (
                <MapIcon className="font-md text-black" />
              ) : (
                <div className="bg-gray-100 shadow- p-2 flex flex-col hover:bg-white hover:text-2xl hover:transition-duration-200">
                  <Typography
                    gutterBottom
                    className="font-bold hover:scale-1.5"
                  >
                    {place.name}
                  </Typography>
                  <img
                    className="w-10 h-10 rounded-2xl object-contain hover:hidden"
                    src={
                      place.photo ? place.photo.images.large.url : "./11.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                  {/* membership component */}
                </div>
              )}
            </div>
          ))}

        {/* {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                height="90px"
                src={`https://openweatherapp.org/img/w/${data.weather[0].icon}.png`}
              />
            </div>
          ))}  */}
      </GoogleMapReact>
    </div>
  );
}

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const defaultProps = {
//   center: {
//     lat: 10.99835602,
//     lng: 77.01502627,
//   },
//   zoom: 11,
// };
// { setCoordinates, setBounds, coordinates, places }

{
  /* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqDPi6-zuSoVPqffrZC2xolvx6KF4bFlw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact> */
}
