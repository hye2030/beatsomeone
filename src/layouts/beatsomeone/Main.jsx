import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Main";
import Footer from "@/components/Footer/Main";
import JoinForm from "@/components/Header/JoinForm";
import LoginForm from "@/components/Header/LoginForm";
import LoginJoin from "../../components/header/LoginJoinForm";

function Main() {
    return (
      <>
        <div id="wrap">
            {/* 헤더 */}
            <Header />

            <Outlet />

            {/* 푸터 */}
            <Footer />
        </div>
        
        {/* 모달 */}
        {/* <JoinForm />
        <LoginForm /> */}
        <LoginJoin />
      </>
    );
  }
  
  export default Main;
  