import { Outlet } from "react-router-dom";
import Header from "@/components/header/Main";
import Footer from "@/components/footer/Main";
import JoinForm from "@/components/header/JoinForm";
import LoginForm from "@/components/header/LoginForm";
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
  