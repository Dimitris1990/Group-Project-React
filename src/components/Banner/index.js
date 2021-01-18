import React from 'react';
import {BannerContainer,BannerBg,VideoBg,BannerContent,BannerH1,BannerP,BannerBtnWrapper,BannerBtn} from './Elements.js';
import Video from './video.mp4';

function Banner() {
    return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </BannerBg>
            <BannerContent>
                <BannerH1>Stock Market Trading</BannerH1>
                <BannerH1>Platform</BannerH1>
                <BannerP>
                    Get into smart investing with the help of our experienced team with ease.
                    Choose a plan and join our platform to make your way into the stock market!
                </BannerP>
                <BannerBtnWrapper>
                    <BannerBtn to="signup">Join Now</BannerBtn>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
};

export default Banner;
