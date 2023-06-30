import styled from 'styled-components';

export const LogoSection = styled.div`
  display: flex;
  @media screen and (max-width: 640px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const ProfileSection = styled.div`
  grid-area: 1/20/2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 640px) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const Container = styled.div`
    display: grid;
    padding: 1vw 1vw 0;
`;

export const Img = styled.img`
  height: 3rem;
  border-radius: 4rem;
`

export const Span = styled.span`
  font-size: 2rem;
`;