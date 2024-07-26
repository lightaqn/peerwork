import { createSlice } from "@reduxjs/toolkit";

// interface MapState {
//   name: string;
// }

export const mapSlice = createSlice({
  name: "map",
  initialState: { mapIsOpen: false },
  reducers: {
    openMap: (state) => {
      state.mapIsOpen = true;
    },
    closeMap: (state) => {
      state.mapIsOpen = false;
    },
  },
});

export const { openMap, closeMap } = mapSlice.actions;
export const selectMapIsOpen = (state) => state.map.mapIsOpen;

export default mapSlice.reducer;
