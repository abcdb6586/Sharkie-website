import React from 'react';
import Icon1 from '../../images/social.svg';
import Icon2 from '../../images/nature.svg';
import Icon3 from '../../images/ship.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Social Media Advocacy</ServicesH2>
          <ServicesP>
            We promote shark conservation knowledge on social media.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Environmental Protection</ServicesH2>
          <ServicesP>
            Every cent you donate will be used for marine environmental
            conservation.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Marine Ecological Journey</ServicesH2>
          <ServicesP>
            Our members enjoy a monthly discount on the ocean cleaning
            ecological trip.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
