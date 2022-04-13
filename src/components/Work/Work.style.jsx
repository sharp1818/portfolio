import styled from "styled-components";
import { breakpoints } from "../../styles/MediaQueries";
export const TitleLayout = styled.div`
  padding: 20px 20px;
  ${breakpoints.phone} {
    padding: 20px 80px;
  }
  ${breakpoints.tablet} {
    padding: 20px 200px;
  }
  .title {
    text-transform: uppercase;
    text-align: left;
    font-size: 26px;
    font-weight: 400;
    padding: 10px 0px;
    color: var(--black);
    ${breakpoints.phone} {
      padding: 10px 10px;
      font-size: 32px;
    }
  }
  .resume {
    font-size: 20px;
    padding: 10px 0px;
    ${breakpoints.phone} {
      padding: 0px 20px;
      font-size: 24px;
    }
  }
`;

export const WorkContainer = styled.section`
  display: grid;
  justify-items: center;
  padding-bottom: 40px;
  padding-top: 40px;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  .parallax-card-layers {
    width: 225px !important;
    height: 110px !important;
    ${breakpoints.phoneSmall} {
      width: 300px !important;
      height: 140px !important;
    }
    ${breakpoints.phone} {
      width: 450px !important;
      height: 220px !important;
    }
  }
  ${breakpoints.tablet} {
    padding-bottom: 60px;
    grid-template-columns: repeat(2, 450px);
    max-width: 930px;
    margin: 0 auto;
  }
  ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 450px);
    max-width: 1410px;
    margin: 0 auto;
  }
`;
