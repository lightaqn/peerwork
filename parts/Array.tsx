import React, { useState, useEffect, createRef } from "react";
import {
  Typography,
  Grid,
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "./PlaceDetails";
// import members from "parts/Members";

function Array({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}: any) {
  const [elRefs, setElRefs] = useState([]);
  // const [type, setType] = useState("restaurant");
  // const [member, setMember] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div>
      <Typography variant="h3">
        Co-work Nodes, Attractions, Hotels & Restaurant in your vicinity
      </Typography>
      {isLoading ? (
        <div className="text-lime-500 bg-white white-glassmorphism">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className="">
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="co-work">Co-work Node</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
              <MenuItem value="restaurant">Restaurant</MenuItem>
              <MenuItem value="hotel">Hotel</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="">
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setType(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={3.5}>Above 3.5</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          {/* // Member
      <FormControl>
      <InputLabel>Member</InputLabel>
      <Select value={} onChange={() =>()} >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={3.5}>Above 3.5</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl> */}

          <Grid container spacing={3} className="">
            {places?.map((place) => (
              <Grid item ref={elRefs[i]} key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default Array;
