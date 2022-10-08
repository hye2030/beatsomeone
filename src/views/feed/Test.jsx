import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";

const RandomDog = () => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(1);
    const preventRef = useRef(true);
    const obsRef = useRef(null);

    useEffect(()=> {
        getDog();
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.5 });
        if(obsRef.current) observer.observe(obsRef.current);
        return () => { observer.disconnect(); }
    }, [])
    
    useEffect(()=> {
        getDog();
    }, [page])

    const obsHandler = ((entries) => {
        const target = entries[0];
        if(target.isIntersecting && preventRef.current){ 
            preventRef.current = false;
            setPage(prev => prev+1 );
        }
    })

    const getDog = useCallback(async() => { //글 불러오기  
        setLoad(true); //로딩 시작
        const res = await axios({method : 'GET', url : `https://beats-admin.codeidea.io/api/v1/feed/feedList?sorting=1`});
        if(res.data.response){
            setList(prev=> [...prev, {...res.data.response[0]} ]); //리스트 추가
            preventRef.current = true;
        }else{
          console.log(res); //에러
        }
        setLoad(false); //로딩 종료
    }, [page]);

    return(
    <>
        <div>
            {
                list &&
                <>
                    {
                        list.map((li)=> 
                            <img key={li.idx} className="opacity-100 mx-auto mb-6" src={`https://beatsomeone.codeidea.io${li.file_url}${li.feed_source}`} width={'500px'} height={'300px'} />
                        )
                    }
                </>
                
            }
            {
                load ?
                <div>로딩 중</div>
                    :
                <></>
            }
            <div ref={obsRef}>옵저버 Element</div>
        </div>
    </>
    )
}

export default RandomDog