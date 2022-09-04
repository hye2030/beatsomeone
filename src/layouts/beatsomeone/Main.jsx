import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Main";
import Footer from "@/components/Footer/Main";

function Main() {
    return (
      <>
        <div id="wrap">
            {/* 헤더 */}
            <Header />

            <div id="wrap_content" className="main_page">
                <div className="top_deco"></div>
                <Outlet />
            </div>

            {/* 푸터 */}
            <Footer />
        </div>
        
        {/* 모달 */}
      </>
    );
  }
  
  export default Main;
  