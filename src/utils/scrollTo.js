import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 새로운 주소로 옮겨짐을 감지하면 화면을 맨위로 올려주는 메소드 --> 모든 페이지에 관여하고 있는 main에 연동
const ScrollTo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}

export default ScrollTo;