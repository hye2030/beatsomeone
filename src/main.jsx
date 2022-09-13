import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/css/app.css";

import "@/assets/js/jquery-3.6.0.js";
import "@/assets/js/common.js";
import "@/assets/js/swiper-bundle.min.js";

import { Provider } from "react-redux";
import { createStore } from "redux";
import userSlice from "@/stores/userSlice"

const store = createStore(userSlice);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Provider store={store}><App /></Provider>);
