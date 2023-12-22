import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface scrollbarState {
  mustScroll: boolean;
  scrollYPosition: number;
}

const initialState: scrollbarState = {
  mustScroll: false,
  scrollYPosition: 0,
};

export const scrollbarSlice = createSlice({
  name: "scrollbar",
  initialState,
  reducers: {
    setScrollYPosition: (state, action: PayloadAction<number>) => {
      state.scrollYPosition = action.payload;
      state.mustScroll = true;
    },
    shouldNotScroll: (state) => {
      state.mustScroll = false;
    },
  },
});

export const { setScrollYPosition, shouldNotScroll } = scrollbarSlice.actions;
