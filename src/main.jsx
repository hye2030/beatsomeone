import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/css/app.css";

import "@/assets/js/jquery-3.6.0.js";
import "@/assets/js/common.js";
import "@/assets/js/swiper-bundle.min.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
