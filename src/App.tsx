import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import heroImage from './assets/images/illustration-working.svg';
import urlShortenerBackground from './assets/images/bg-shorten-mobile.svg';
import brandRecognition from './assets/images/icon-brand-recognition.svg';
import detailedRecords from './assets/images/icon-detailed-records.svg';
import fullyCustomizable from './assets/images/icon-fully-customizable.svg';
import boostBackgroundMobile from './assets/images/bg-boost-mobile.svg';
import Footer from './components/Footer';
import PoppinsWoff2 from './assets/fonts/Poppins-Regular.woff2';
import PoppinsWoff from './assets/fonts/Poppins-Regular.woff';
import axios from 'axios';
import { useRef, useState } from 'react';
import ShortUrlBox from './components/ShortUrlBox';
import GetStartedModal from './components/GetStartedModal';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsWoff2}) format("woff2"),
      url(${PoppinsWoff}) format("woff");
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Poppins";
  }
`;

const Hero = styled.div`
  overflow-x: hidden;
`;

const HeroImage = styled.img`
  width: 135%;
  margin-left: 1.5rem;
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
  margin: 0 auto 168px auto;
  cursor: pointer;
  &:active {
    background: #9ae3e3;
  }
`;

const ShortenerContainer = styled.form`
  background: url(${urlShortenerBackground}) #3a3054;
  background-repeat: no-repeat;
  background-position: top right;
  padding: 1.5rem;
  margin: 1.5rem;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  top: -80px;
`;

const ShortenButton = styled.button`
  background: #2bd0d0;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  height: 48px;
  margin-top: 1rem;
  cursor: pointer;
  &:active {
    background: #9ae3e3;
  }
`;

interface ShortenerInputProps {
  error: string;
}

const ShortenerInput = styled.input<ShortenerInputProps>`
  border-radius: 5px;
  padding: 0 1rem;
  height: 48px;
  outline: none;
  border: ${({ error }) => {
    return error ? '3px solid #F46363' : 'none';
  }};
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0.12px;
    color: #34313d;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const Urls = styled.ul`
  margin: 0 1.5rem;
  margin-bottom: 5rem;
  position: relative;
  top: -80px;
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
`;

const BottomCTAContainer = styled.div`
  padding: 90px 36px;
  background: url(${boostBackgroundMobile}) #3a3054;
  background-size: cover;
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
  position: relative;
  top: -80px;
`;

const Error = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.0818182px;
  color: #f46363;
  margin-top: 4px;
`;

export type shortLink = {
  url: string;
  name: string;
};

function App() {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [urls, setUrls] = useState<shortLink[]>([]);
  const [copied, setCopied] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const shortenerRef = useRef<HTMLFormElement>(null);

  // any
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const scrollToShortener = (): void => {
    shortenerRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please add a link');
      setQuery('');
      return;
    }
    const secureQuery = query.slice(0, 4) === 'http' ? '' : 'https://';
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${secureQuery}${query.trim()}`)
      .then(({ data }) => {
        const shortUrl = {
          url: data.result.full_short_link3,
          name: data.result.original_link,
        };
        const newUrls = [...urls, shortUrl];
        setUrls(newUrls);
        setQuery('');
        if (error) {
          setError('');
        }
      })
      .catch(() => {
        setError('Please add a valid link');
        setQuery('');
      });
  };

  return (
    <>
      <GlobalStyles />
      <Header setModalOpen={setModalOpen} />
      {modalOpen && <GetStartedModal setModalOpen={setModalOpen} />}
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
        <HeroButton onClick={scrollToShortener}>Get Started</HeroButton>
      </Hero>
      <Main>
        <ShortenerContainer ref={shortenerRef}>
          <ShortenerInput
            type="text"
            name="query"
            placeholder="Shorten a link here..."
            value={query}
            onChange={handleChange}
            error={error}
          />
          {error && <Error>{error}</Error>}
          <ShortenButton onClick={handleClick}>Shorten it!</ShortenButton>
        </ShortenerContainer>
        <Urls>
          {urls.map((url, i) => {
            return (
              <ShortUrlBox
                key={i}
                url={url}
                setCopied={setCopied}
                copied={url.url === copied}
              />
            );
          })}
        </Urls>
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
          <DetailsContainer>
            <DetailsImageContainer>
              <img src={fullyCustomizable} alt="" />
            </DetailsImageContainer>
            <DetailsSubHeader>Fully Customizable</DetailsSubHeader>
            <DetailsSubCopy>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </DetailsSubCopy>
          </DetailsContainer>
        </Details>
        <BottomCTAContainer>
          <BottomCTAHeader>Boost your links today</BottomCTAHeader>
          <BottomCTAButton onClick={scrollToShortener}>
            Get Started
          </BottomCTAButton>
        </BottomCTAContainer>
      </Main>
      <Footer />
    </>
  );
}

export default App;
