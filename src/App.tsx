import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import heroImage from './assets/images/illustration-working.svg';
import urlShortenerBackground from './assets/images/bg-shorten-mobile.svg';
import urlShortenerBackgroundDesktop from './assets/images/bg-shorten-desktop.svg';
import brandRecognition from './assets/images/icon-brand-recognition.svg';
import detailedRecords from './assets/images/icon-detailed-records.svg';
import fullyCustomizable from './assets/images/icon-fully-customizable.svg';
import boostBackgroundMobile from './assets/images/bg-boost-mobile.svg';
import boostBackgroundDesktop from './assets/images/bg-boost-desktop.svg';
import Footer from './components/Footer';
import PoppinsWoff2 from './assets/fonts/Poppins-Regular.woff2';
import PoppinsWoff from './assets/fonts/Poppins-Regular.woff';
import axios from 'axios';
import { useRef, useState } from 'react';
import ShortUrlBox from './components/ShortUrlBox';
import GetStartedModal from './components/GetStartedModal';
import breakpoints from './config/breakpoints';

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
  margin: 0 auto;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    padding-left: 165px;
    justify-content: flex-end;
    margin: 0 auto;
    max-width: 1440px;
  }
`;

const HeroTextBox = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    margin-right: 100px;
    margin-top: 139px;
    width: 46%;
  }
`;

const HeroImage = styled.img`
  width: 135%;
  margin-left: 1.5rem;
  margin-bottom: 2.25rem;
  @media (min-width: ${breakpoints.desktop}) {
    object-fit: cover;
    object-position: left;
    margin: 0;
    width: 30%;
    margin-bottom: 152px;
    flex-grow: 1;
  }
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
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 80px;
    line-height: 90px;
    letter-spacing: -2px;
    margin: 0;
    margin-bottom: 5px;
    text-align: start;
  }
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
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 22px;
    line-height: 36px;
    letter-spacing: 0.15px;
    margin: 0;
    margin-bottom: 38px;
    text-align: start;
  }
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
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
    margin-bottom: 222px;
  }
`;

const ShortenerContainerOuter = styled.div`
  padding: 0 24px;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 165px;
  }
`;

const ShortenerContainer = styled.form`
  background: url(${urlShortenerBackground}) #3a3054;
  background-repeat: no-repeat;
  background-position: top right;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  top: -80px;
  @media (min-width: ${breakpoints.desktop}) {
    background: url(${urlShortenerBackgroundDesktop}) #3a3054;
    flex-direction: row;
    align-items: flex-start;
    top: -56px;
  }
`;

const ShortenButton = styled.button`
  background: #2bd0d0;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  padding: 11px 0 10px 0;
  margin-top: 1rem;
  cursor: pointer;
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
    margin-left: 24px;
    font-size: 20px;
    line-height: 30px;
    padding: 18px 40px 16px 41px;
  }
  &:active {
    background: #9ae3e3;
  }
`;

interface ShortenerInputProps {
  error: string;
}

const ShortenerInputErrorContainer = styled.div`
  flex-grow: 1;
`;

const ShortenerInput = styled.input<ShortenerInputProps>`
  width: 100%;
  font-size: 16px;
  height: 48px;
  line-height: 36px;
  padding-left: 16px;
  border-radius: 5px;
  outline: none;
  letter-spacing: 0.12px;
  border: ${({ error }) => {
    return error ? '3px solid #F46363' : 'none';
  }};
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 32px;
    font-size: 20px;
    letter-spacing: 0.15px;
    height: 64px;
  }
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0.12px;
    color: ${({ error }) => {
      return error ? '#F46363' : '#34313d';
    }};
    mix-blend-mode: normal;
    opacity: 0.5;
    @media (min-width: ${breakpoints.desktop}) {
      font-size: 20px;
      line-height: 36px;
      letter-spacing: 0.15px;
    }
  }
`;

const Urls = styled.ul`
  margin: 0 1.5rem;
  margin-bottom: 5rem;
  position: relative;
  top: -80px;
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
    margin-bottom: 120px;
  }
`;

const DetailsHeader = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.7px;
  color: #34313d;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    margin-bottom: 18px;
  }
`;

const DetailsCopy = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.109091px;
  color: #9e9aa8;
  margin: 0 auto;
  margin-bottom: 92px;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.122727px;
    width: 540px;
    margin-bottom: 100px;
  }
`;

const SubDetails = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    padding: 0 165px;
    align-items: flex-start;
  }
`;

const DetailsContainer = styled.div`
  position: relative;
  padding: 0 2rem 2.5rem 2rem;
  background: white;
  border-radius: 5px;
  @media (min-width: ${breakpoints.desktop}) {
    padding: 0 32px 41px 32px;
    max-width: 350px;
  }
`;

const DetailsContainerRecords = styled(DetailsContainer)`
  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 44px;
  }
`;

const DetailsContainerCustomizable = styled(DetailsContainer)`
  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 88px;
  }
`;

const DetailsSubHeader = styled.h3`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #34313d;
  @media (min-width: ${breakpoints.desktop}) {
    text-align: start;
    margin-bottom: 12px;
  }
`;

const DetailsSubCopy = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  color: #9e9aa8;
  @media (min-width: ${breakpoints.desktop}) {
    text-align: start;
  }
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
  top: -44px;
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
    margin-bottom: -11px;
  }
`;

const DetailsDivider = styled.div`
  width: 0.5rem;
  height: 3rem;
  background: #2bd0d0;
  margin: 0 auto 2rem auto;
  @media (min-width: ${breakpoints.desktop}) {
    height: 8px;
    width: 30px;
    margin-top: 152px;
  }
`;

const Main = styled.main`
  background: #f2f2f2;
`;

const BottomCTAContainer = styled.div`
  padding: 90px 36px;
  background: url(${boostBackgroundMobile}) #3a3054;
  background-size: cover;
  @media (min-width: ${breakpoints.desktop}) {
    padding: 57px 0;
    background: url(${boostBackgroundDesktop}) #3a3054;
  }
`;

const BottomCTAButton = styled(HeroButton)`
  margin: 0 auto;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const BottomCTAHeader = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.7px;
  color: #ffffff;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 40px;
    letter-spacing: -1px;
    margin-bottom: 32px;
  }
`;

const Details = styled.div`
  margin: 0 1.5rem;
  position: relative;
  top: -80px;
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;

const Error = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.0818182px;
  color: #f46363;
  margin-top: 4px;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.109091px;
    margin-top: 8px;
  }
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
        <HeroTextBox>
          <HeroText>More Than Just Shorter Links</HeroText>
          <HeroSubtext>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </HeroSubtext>
          <HeroButton
            onClick={() => {
              setError('');
              scrollToShortener();
            }}
          >
            Get Started
          </HeroButton>
        </HeroTextBox>
      </Hero>
      <Main>
        <ShortenerContainerOuter>
          <ShortenerContainer ref={shortenerRef}>
            <ShortenerInputErrorContainer>
              <ShortenerInput
                type="text"
                name="query"
                placeholder="Shorten a link here..."
                value={query}
                onChange={handleChange}
                error={error}
              />
              {error && <Error>{error}</Error>}
            </ShortenerInputErrorContainer>
            <ShortenButton onClick={handleClick}>Shorten it!</ShortenButton>
          </ShortenerContainer>
        </ShortenerContainerOuter>
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
          <SubDetails>
            <DetailsContainer>
              <DetailsImageContainer>
                <img src={brandRecognition} alt="" />
              </DetailsImageContainer>
              <DetailsSubHeader>Brand Recognition</DetailsSubHeader>
              <DetailsSubCopy>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </DetailsSubCopy>
            </DetailsContainer>
            <DetailsDivider />
            <DetailsContainerRecords>
              <DetailsImageContainer>
                <img src={detailedRecords} alt="" />
              </DetailsImageContainer>
              <DetailsSubHeader>Detailed Records</DetailsSubHeader>
              <DetailsSubCopy>
                Gain insight into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </DetailsSubCopy>
            </DetailsContainerRecords>
            <DetailsDivider />
            <DetailsContainerCustomizable>
              <DetailsImageContainer>
                <img src={fullyCustomizable} alt="" />
              </DetailsImageContainer>
              <DetailsSubHeader>Fully Customizable</DetailsSubHeader>
              <DetailsSubCopy>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </DetailsSubCopy>
            </DetailsContainerCustomizable>
          </SubDetails>
        </Details>
        <BottomCTAContainer>
          <BottomCTAHeader>Boost your links today</BottomCTAHeader>
          <BottomCTAButton
            onClick={() => {
              setError('');
              scrollToShortener();
            }}
          >
            Get Started
          </BottomCTAButton>
        </BottomCTAContainer>
      </Main>
      <Footer />
    </>
  );
}

export default App;
