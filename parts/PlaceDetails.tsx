import React from "react";
import {
  Typography,
  Card,
  Box,
  Button,
  CardMedia,
  CardContent,
  CardAction,
  Chip,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
// import LocationOnIcon,phoneIcon from '@heroicons/react';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="flex items-center justify-between m-10">
      <h1 className="m-5">{place.name}</h1>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : "./11.jpg"}
          title={place.name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {place.name}
          </Typography>

          <Box className="flex justify-between">
            <Rating name={read - only} value={Number(place.rating)} readOnly />
            <Typography component="legend" gutterBottom>
              {" "}
              Out of {place.num_reviews} reviews {place.num_reviews > 1 && "s"}
            </Typography>
          </Box>
          <Box className="flex justify-between">
            <Typography> Price </Typography>
            <Typography gutterBottom> {place.price_level} </Typography>
          </Box>
          <Box className="flex justify-between">
            <Typography> Ranking </Typography>
            <Typography gutterBottom> {place.ranking} </Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box className="flex justify-between items-center my-1">
              <img src={award.images.small} />
              <Typography> {award.display_name} </Typography>
            </Box>
          ))}

          {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className="m-5" />
          ))}

          {place?.address && (
            <Typography gutterBottom className="">
              {" "}
              {/* <LocationIcon /> */}
              {place.address}{" "}
            </Typography>
          )}

          {place?.phone && (
            <Typography gutterBottom className="">
              {" "}
              {/* <PhoneIcon /> */}
              {place.phone}{" "}
            </Typography>
          )}
        </CardContent>
        <CardAction>
          <Button
            className="font-small"
            onClick={() => window.open(place.web_url, "_blank")}
          ></Button>
        </CardAction>
      </Card>
    </div>
  );
};

export default PlaceDetails;
