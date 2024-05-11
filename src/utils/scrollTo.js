import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollTo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}

export default ScrollTo;    

// 페이지 변환 시 화면 위치는 top에 고정