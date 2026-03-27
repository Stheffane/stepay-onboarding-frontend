import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 170%;
  letter-spacing: 0.01em;
  text-align: justify;
  color: #818495;
  margin-top: 30px;
`;

export const Content = styled.div`
  height: 85%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e9eafa;
  }
`;

export const Span = styled.span`
  color: #2c3236;
`;