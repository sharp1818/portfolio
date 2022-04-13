import styled from "styled-components";
import { breakpoints } from "./styles/MediaQueries";

export const Contact = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  .form-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  ${breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
