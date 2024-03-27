import { configureStore } from "@reduxjs/toolkit";
import xiNgau from "../Ex_Redux/slice/xiNgau";
export const store = configureStore({
  reducer: {
    // nguoiDung: () => {
    //   return "Kim Bình Lâm";
    // },
    xiNgau,
  },
});
