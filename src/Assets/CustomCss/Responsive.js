import { css } from "styled-components";

export const tab = (props) => {
  return css`
    @media only screen and (max-width: 1000px) and (min-width: 650px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 650px) {
        ${props}
      }
    `;
  };

  export const hover = (field,props) => {
   
        return css`
      @media only screen and (max-width: 650px) {
        &:hover ${field}{
            ${props}
        }
      }
    `;
    
   
  };