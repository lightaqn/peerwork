import React, { useState, useEffect } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { SearchIcon } from "@heroicons/react/outline";
import { Typography } from "@material-ui/core";

const MapHeader = ({ onPlaceChanged, onLoad }: any) => {
  return (
    <div>
      <Typography variant="h5">Navigate to your node</Typography>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className=" items-center shadow border px-2 py-3 ring-amber outline-none focus:ring form-input mt-1 block w-full rounded-xl bg-gray-200 sm:hidden">
          <div className="w-1/5 flex-1 bg=gray-200">
            <SearchIcon />
          </div>
          <div className="flex-auto">
            <label className="block mb-3">
              <input
                placeholder="Search ..."
                className="bg-grey-glassmorphism w-4/5 border-none p-8 outline-none"
              />
            </label>
          </div>
        </div>
      </Autocomplete>
    </div>
  );
};

export default MapHeader;
