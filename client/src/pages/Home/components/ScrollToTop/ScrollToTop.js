import React, { useState, useEffect } from "react";

import { TopButtonContainer, TopButtonIcon } from '../../style'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1600) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <TopButtonContainer onClick={handleToTop}>
            {showTopBtn && <TopButtonIcon/>}
        </TopButtonContainer>
    );
};

export default ScrollToTop;