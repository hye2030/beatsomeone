import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";

const RandomDog = () => {
    const [randomImageList, setRandomImageList] = useState([]);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    console.log('스크롤 이벤트 발생');

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('페이지 끝에 스크롤이 닿았음');
      setPage((prev) => prev + 1);
    }
  };

  const getRandomImageThenSet = async () => {
    console.log('fetching 함수 호출됨');
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=7`
      );
      setRandomImageList(randomImageList.concat(data));
    } catch {
      console.error('fetching error');
    }
  };

  useEffect(() => {
    console.log('page ? ', page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {randomImageList?.map((randomImage) => (
        <img key={randomImage.id} src={randomImage.download_url} alt="random" />
      ))}
    </>
  );
}

export default RandomDog