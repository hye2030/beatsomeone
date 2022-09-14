import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";

import { useScript } from "@/utils/useScript";
import { useEffect } from "react";

function App() {
  const status = useScript("/src/assets/js/common.js");
  useEffect(() => {
      if(status === "ready"){
        // sdk 초기화하기
        window.SomeThingSDK();
  }
  }, [])
  
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
