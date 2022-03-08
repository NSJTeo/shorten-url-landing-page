import styled from 'styled-components';
import { shortLink } from '../App';

type Props = {
  url: shortLink;
  setCopied: Function;
  copied: boolean;
};

const ShortUrlContainer = styled.li`
  list-style: none;
  background: white;
  border-radius: 5px;
  padding-bottom: 1rem;
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
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
`;

export default function ShortUrlBox({ url, setCopied, copied }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(url.url);
    setCopied(url.url);
  };
  return (
    <ShortUrlContainer>
      <ShortUrlName>{url.name}</ShortUrlName>
      <ShortUrl>{url.url}</ShortUrl>
      <CopyShortUrlButton type="button" onClick={handleClick} copied={copied}>
        {copied ? 'Copied!' : 'Copy'}
      </CopyShortUrlButton>
    </ShortUrlContainer>
  );
}
