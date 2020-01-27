import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  margin-left: 30px;

  @media (max-width: 1000px) {
    & {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;

    @media (max-width: 650px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const DevItem = styled.li`
  background: #fff;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-self: inherit;
  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
`;
export const UserInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    display: block;
    margin-top: 2px;
    color: #999;
  }
`;

export const Link = styled.a`
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;

  align-self: baseline;
  align-items: flex-start;

  &:hover {
    color: ${darken(0.1, '#8e4dff')};
  }
`;
