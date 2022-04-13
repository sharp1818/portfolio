import styled from "styled-components";
import { breakpoints } from "../../styles/MediaQueries";

export const InfoContainer = styled.section`
    .data-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      text-align: center;
      color: var(--black);
      ${breakpoints.phone} {
        font-size: 32px;
      }
      .name {
    
      }
      .profile-image {
          background-image: url(./profile.png);
        img {
          border-radius: 50%;
        }
      }
      .job {
          
      }
    }
`;
