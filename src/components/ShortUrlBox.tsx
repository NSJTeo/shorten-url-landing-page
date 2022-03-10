import styled from 'styled-components';
import { shortLink } from '../App';
import breakpoints from '../config/breakpoints';

type Props = {
  url: shortLink;
  setCopied: Function;
  copied: boolean;
};

const ExteriorContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: ${breakpoints.desktop}) {
    padding: 0 165px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const ShortUrlContainer = styled.li`
  list-style: none;
  background: white;
  border-radius: 5px;
  padding-bottom: 1rem;
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 24px auto;
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-top: 1rem;
  }
`;

const ShortUrlName = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 36px;
  letter-spacing: 0.12px;
  color: #34313d;
  padding-bottom: 6px;
  padding-left: 1rem;
  border-bottom: 1px solid rgba(158, 154, 168, 0.25);
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
    letter-spacing: 0.15px;
    border: none;
    padding: 0;
    padding-left: 24px;
  }
`;

const ShortUrl = styled.p`
  padding-top: 6px;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 36px;
  letter-spacing: 0.12px;
  color: #2bd0d0;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
    letter-spacing: 0.15px;
    padding: 0;
  }
`;

interface CopyShortUrlButtonProps {
  copied: boolean;
}

const CopyShortUrlButton = styled.button<CopyShortUrlButtonProps>`
  margin: 0 1rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: #2bd0d0;
  background: ${({ copied }) => {
    return copied ? '#3a3054' : '#2bd0d0';
  }};
  border-radius: 5px;
  border: none;
  padding-top: 9px;
  padding-bottom: 7px;
  cursor: pointer;
  &:active {
    background: #9ae3e3;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 103px;
    margin: 0 24px;
    font-size: 15px;
    line-height: 22px;
  }
`;

const CopyUrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export default function ShortUrlBox({ url, setCopied, copied }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(url.url);
    setCopied(url.url);
  };
  return (
    <ExteriorContainer>
      <ShortUrlContainer>
        <ShortUrlName>{url.name}</ShortUrlName>
        <CopyUrlContainer>
          <ShortUrl>{url.url}</ShortUrl>
          <CopyShortUrlButton
            type="button"
            onClick={handleClick}
            copied={copied}
          >
            {copied ? 'Copied!' : 'Copy'}
          </CopyShortUrlButton>
        </CopyUrlContainer>
      </ShortUrlContainer>
    </ExteriorContainer>
  );
}
