import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import heroImage from "./assets/images/illustration-working.svg";
import urlShortenerBackground from "./assets/images/bg-shorten-mobile.svg";
import brandRecognition from "./assets/images/icon-brand-recognition.svg";
import detailedRecords from "./assets/images/icon-detailed-records.svg";
import fullyCustomizable from "./assets/images/icon-fully-customizable.svg";
import boostBackgroundMobile from "./assets/images/bg-boost-mobile.svg";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

const Hero = styled.div`
  overflow-x: hidden;
`;

const HeroImage = styled.img`
  width: 150%;
  margin-bottom: 2.25rem;
`;

const HeroText = styled.p`
  font-weight: bold;
  font-size: 42px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -1.05px;
  color: #34313d;
  margin: 0 1.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtext = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.122727px;
  color: #9e9aa8;
  margin: 0 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  display: block;
  background: #2bd0d0;
  border-radius: 28px;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: white;
  border: none;
  padding: 14px 40px 12px 40px;
  margin: 0 auto 6.25rem auto;
`;

const ShortenerContainer = styled.div`
  background: url(${urlShortenerBackground});
  padding: 1.5rem;
  margin: 1.5rem;
  margin-top: 0;
`;

const Urls = styled.ul`
  margin: 0 1.5rem;
  margin-bottom: 5rem;
`;

const DetailsHeader = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.7px;
  color: #34313d;
`;

const DetailsCopy = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.109091px;
  color: #9e9aa8;
  margin-bottom: 92px;
`;

const DetailsContainer = styled.div`
  position: relative;
  padding: 0 2rem 2.5rem 2rem;
  background: white;
  border-radius: 5px;
`;

const LastDetailsContainer = styled(DetailsContainer)`
  margin-bottom: 80px;
`;

const DetailsSubHeader = styled.h3`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #34313d;
`;

const DetailsSubCopy = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  color: #9e9aa8;
`;

const DetailsImageContainer = styled.div`
  margin: 0 auto;
  width: 5.5rem;
  height: 5.5rem;
  background: #3a3054;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -33px;
`;

const DetailsDivider = styled.div`
  width: 0.5rem;
  height: 3rem;
  background: #2bd0d0;
  margin: 0 auto 2rem auto;
`;

const Main = styled.main`
  background: #f2f2f2;
  /* padding: 0 1.5rem; */
`;

const BottomCTAContainer = styled.div`
  padding: 90px 36px;
  background: url(${boostBackgroundMobile}) #3a3054;
`;

const BottomCTAButton = styled(HeroButton)`
  margin: 0 auto;
`;

const BottomCTAHeader = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.7px;
  color: #ffffff;
`;

const Details = styled.div`
  margin: 0 1.5rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero>
        <HeroImage
          src={heroImage}
          alt="illustration of person working at desk"
        />
        <HeroText>More Than Just Shorter Links</HeroText>
        <HeroSubtext>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </HeroSubtext>
        <HeroButton>Get Started</HeroButton>
      </Hero>
      <Main>
        <ShortenerContainer>
          <input placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </ShortenerContainer>
        <Urls></Urls>
        <Details>
          <DetailsHeader>Advanced Statistics</DetailsHeader>
          <DetailsCopy>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </DetailsCopy>
          <DetailsContainer>
            <DetailsImageContainer>
              <img src={brandRecognition} alt="" />
            </DetailsImageContainer>
            <DetailsSubHeader>Brand Recognition</DetailsSubHeader>
            <DetailsSubCopy>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </DetailsSubCopy>
          </DetailsContainer>
          <DetailsDivider />
          <DetailsContainer>
            <DetailsImageContainer>
              <img src={detailedRecords} alt="" />
            </DetailsImageContainer>
            <DetailsSubHeader>Detailed Records</DetailsSubHeader>
            <DetailsSubCopy>
              Gain insight into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </DetailsSubCopy>
          </DetailsContainer>
          <DetailsDivider />
          <LastDetailsContainer>
            <DetailsImageContainer>
              <img src={fullyCustomizable} alt="" />
            </DetailsImageContainer>
            <DetailsSubHeader>Fully Customizable</DetailsSubHeader>
            <DetailsSubCopy>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </DetailsSubCopy>
          </LastDetailsContainer>
        </Details>
        <BottomCTAContainer>
          <BottomCTAHeader>Boost your links today</BottomCTAHeader>
          <BottomCTAButton>Get Started</BottomCTAButton>
        </BottomCTAContainer>
      </Main>
      <Footer />
    </>
  );
}

export default App;
