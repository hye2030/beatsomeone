import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";

import BeatLayout from "../layouts/beatsomeone/Main"
import BeatIndex from "../views/index"
import SignUp from "../views/signup/sign_up"
import IntegratedSignUpTerms from "../views/signup/integrated_signup_terms"
import IntegratedSignUpGuide from "../views/signup/integrated_signup_guide"
import IntegratedSignUpComplete from "../views/signup/integrated_signup_complete"

import FeedAdd from "../views/feed/feed_add"
import FeedDetailCover from "../views/feed/feed_detail_cover"
import FeedDetailDaily from "../views/feed/feed_detail_daily"
import FeedDetailSelf from "../views/feed/feed_detail_self"
import FeedList from "../views/feed/feed_list"
import RandomDog from "../views/feed/Test"
import FeedEdit from "../views/feed/feed_edit"

import Event from "../views/mypage/event"
import EventDetail from "../views/mypage/event_detail"

import Kakao from "../views/auth/kakao"
import Naver from "../views/auth/naver"

import NoticeList from "../views/common/notice_list"
import NoticeDetail from "../views/common/notice_detail"

import LoginCheck from "../views/signup/login"

import Toss from "../views/payment/toss"

function Router() {
  const routes = [
    {
      path: "/",
      element: <BeatLayout />,
      children: [
        {
          path: "/",
          element: <BeatIndex />,
        },
        {
          path: "/signinup/sign_up",
          element: <SignUp />,
        },
        {
          path: "/signinup/integrated_signup_terms",
          element: <IntegratedSignUpTerms />,
        },
        {
          path: "/signinup/integrated_signup_guide",
          element: <IntegratedSignUpGuide />,
        },
        {
          path: "/signinup/integrated_signup_complete",
          element: <IntegratedSignUpComplete />,
        },
        {
          path: "/feed/feed_add",
          element: <FeedAdd />,
        },
        {
          path: "/feed/feed_detail_cover",
          element: <FeedDetailCover />,
        },
        {
          path: "/feed/feed_detail_daily/:idx",
          element: <FeedDetailDaily />,
        },
        {
          path: "/feed/feed_detail_self",
          element: <FeedDetailSelf />,
        },
        {
          path: "/feed/feed_list",
          element: <FeedList />,
        },
        {
          path: "/mypage/event",
          element: <Event />,
        },
        {
          path: "/mypage/event_detail/:idx",
          element: <EventDetail />,
        },
        {
          path: "/common/notice_list",
          element: <NoticeList />,
        },
        {
          path: "/common/notice_detail/:idx",
          element: <NoticeDetail />,
        },
        {
          path: "/feed/Test",
          element: <RandomDog />,
        },
        {
          path: "/feed/feed_edit/:idx",
          element: <FeedEdit />,
        },
        {
          path: "/payment/toss",
          element: <Toss />,
        },
      ],
    },
    {
      path: "/auth/kakao",
      element: <Kakao />
    },
    {
      path: "/auth/naver",
      element: <Naver />
    },
    {
			path: "/login",
			element: <LoginCheck />,
		}
  ];

  return useRoutes(routes);
}

export default Router;
