import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";

import { useScript } from "@/utils/useScript";
import { useEffect } from "react";

function App() {
  const status = useScript("/assets/js/common.js");
  useEffect(() => {
      if(status === "ready"){
        // sdk 초기화하기
        window.SomeThingSDK();
  }
  }, [])

  const scriptSwiper = document.createElement("script");
  scriptSwiper.src = "/assets/js/swiper-bundle.min.js";
  scriptSwiper.async = true;
  document.body.appendChild(scriptSwiper);
  
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
