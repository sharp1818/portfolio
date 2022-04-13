import styled from "styled-components";
import { breakpoints } from "../../styles/MediaQueries";

export const SkillsContainer = styled.section`
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
  .skillbar{
      display: grid;
      grid-template-columns: 100px 1fr;
      padding: 10px 0;
      font-size: 16px;
      div:nth-child(2){
          div{
              div{
                background:var(--blue) !important;
              }
          }
      }
  }
`;
