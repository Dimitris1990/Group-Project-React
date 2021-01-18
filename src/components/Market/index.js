import React from 'react'
import {MarketContainer,MarketH1,MarketWrapper,MarketCards,MarketIcon,MarketH2,MarketP} from './Elements';
import Icon1 from './images/svg-1.svg';
import Icon2 from './images/svg-1.svg';
import Icon3 from './images/svg-1.svg';

function Market() {
    return (
        <MarketContainer id="about">
            <MarketH1>Stock Market</MarketH1>
            <MarketWrapper>
                <MarketCards>
                    <MarketIcon src={Icon1}/>
                    <MarketH2>Reduce expenses</MarketH2>
                    <MarketP>ASd sdasSA adaDECA asedaAS ASceAE CEAaasd ASU NUNUIC NUcoicnn</MarketP>
                </MarketCards>
                <MarketCards>
                    <MarketIcon src={Icon2}/>
                    <MarketH2>Reduce expenses</MarketH2>
                    <MarketP>ASd sdasSA adaDECA asedaAS ASceAE CEAaasd ASU NUNUIC NUcoicnn</MarketP>
                </MarketCards>
                <MarketCards>
                    <MarketIcon src={Icon3}/>
                    <MarketH2>Reduce expenses</MarketH2>
                    <MarketP>ASd sdasSA adaDECA asedaAS ASceAE CEAaasd ASU NUNUIC NUcoicnn</MarketP>
                </MarketCards>
            </MarketWrapper>
        </MarketContainer>
    )
}

export default Market;
