import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

import "@/assets/css/components/notice.css";
import Pagination from '../../components/body/pagination';

function Main() {
    const navigate = useNavigate();

    const [Searchtxt,setSearchtxt] = useState("");
    const searchBtn = () => {
        setPage(1);
        axios.get("https://beats-admin.codeidea.io/api/v1/noticeList", {
            params: {
                "searchText" :Searchtxt
            }
        })
        .then(function (response) {
            setPosts(response.data.response.data)
        });
    }

    let maintain_page = 1;
    let maintain_search = "";
    if (sessionStorage.getItem("notice_page") === null) {
        maintain_page = 1;
        maintain_search = "";
    }else{
        maintain_page = sessionStorage.getItem("notice_page");
        // maintain_search = sessionStorage.getItem("notice_search");
    }

    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(maintain_page);
    const offset = (page - 1) * limit;
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/noticeList", {
            params: {
                "searchText" :Searchtxt
            }
        })
        .then(function (response) {
            setPosts(response.data.response.data);
        });
    }, [])

    const maintain = () => {
        sessionStorage.setItem("notice_page", page);
        // sessionStorage.setItem("notice_search", Searchtxt);
    }

    return (
        <>
        <div id="wrap_content" className="notice notice_list">
            <section className="banner">
                <div className="inner">
                    {/* <!-- 임시 이미지 입니다 --> */}
                    {/* <!-- <div className="banner_text">
                        <h2>지금, 당장 글로벌 <br>
                            뮤지션에 도전하세요.
                        </h2>
                        <p>비트썸원이 모든 것을 도와드립니다, 한 번의 음원<br>
                            등록으로 빠르고 정확한 판매와 정산을 경험하세요.</p>
                    </div>
                    <div className="banner_image">
                        <img src="/assets/images/dummy/banner_img_02.jpg" alt="banner" />
                    </div> --> */}
                    <img src="/assets/images/dummy/banner_img_02.jpg" alt="banner" />
                </div>
            </section>
            <div className="wrap_inner">

                <section className="">
                    <h2 className="title_text">공지사항</h2>

                    <ul className="list_wrap">
                        {posts.slice(offset, offset + limit).map(({ idx, wr_title, created_at }) => (
                        <Link to={`/common/notice_detail/${idx}`} key={idx} onClick={maintain}>
                        <li>
                            <p className="list_title">{wr_title}</p>
                            <p className="date">{created_at}</p>
                        </li>
                        </Link>
                        ))}
                        {posts.length === 0 ? 
                        <li>검색된 목록이 없습니다.</li>
                        : null}
                    </ul>

                    {/* <!-- 페이지네이션 --> */}
                    <div className="pagination_wrap">
                        <Pagination 
                        total={posts.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}/>
                    </div>

                    <div className="search_area">
                        <div className="input_wrap">
                            <input type="search" name="" id="" placeholder="검색어를 입력해주세요." defaultValue={sessionStorage.getItem("notice_search") === null ? null : sessionStorage.getItem("notice_search")} onChange={(e)=>{setSearchtxt(e.target.value);}}/>
                        </div>
                        <button type="button" className="basic_btn_red" onClick={() => searchBtn()}>검색</button>
                    </div>
                </section>

            </div>
        </div>
        </>
    );
}

export default Main;
