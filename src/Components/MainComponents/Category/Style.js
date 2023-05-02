import { BsFilterSquare, BsFilterSquareFill } from "react-icons/bs";
import styled, { css } from "styled-components";
import ReorderIcon from "@mui/icons-material/Reorder";
import AppsIcon from "@mui/icons-material/Apps";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
export const Container = styled.div`
  width: 100%;
  position: relative;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  ${mobile({
    flexDirection: "column",
    flexDirection: "column-reverse",
  })}
`;
export const IconFilter = styled(BsFilterSquare)`
  position: absolute;
  font-size: 25px;
  right: 10px;
  color: ${({ theme }) => theme.TEXTCOLOR};
  top: 0;
  display: none;
  ${mobile({ display: "block" })}
`;
export const IconFilterOpen = styled(BsFilterSquareFill)`
  position: absolute;
  font-size: 25px;
  right: 10px;
  color: ${({ theme }) => theme.REDCOLOR};
  top: 0;
  display: none;
  ${mobile({ display: "block" })}
`;
export const SideProduct = styled.div`
  flex: 3;
  padding: 0px 30px;
  ${mobile({
    padding: "0px 10px",
  })}
  ${tab({
    padding: "0px 20px",
  })}
`;
export const SideBar = styled.div`
  flex: 1;
  padding: 0px 15px;
  ${({ hide }) =>
    !hide &&
    css`
      ${mobile({
        display: "none",
      })}
    `}
`;

export const WrapperHeaderProducts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    display: "block",
  })}
`;
export const TextHeader = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR};
  ${mobile({
    marginBottom: "20px",
  })}
`;
export const ButtonsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({
    justifyContent: "flex-start",
  })}
`;
export const WrapperSelectSort = styled.div`
  z-index: 454545;
  border: 2px solid ${({ theme }) => theme.BORDERSCOLOR};
  width: 150px;

  font-size: 13px;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const IconList = styled(ReorderIcon)`
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const IconApp = styled(AppsIcon)`
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const WrapperIconsList = styled.div`
  margin: 0 5px;
  border: 2px solid
    ${({ theme, focus }) => (focus ? theme.REDCOLOR : theme.GRAYCOLOR)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.REDCOLOR};
    transition: 0.2s ease;
    border: 2px solid ${({ theme }) => theme.REDCOLOR};
  }
  &:hover ${IconList} {
    color: ${({ theme }) => theme.WHITECOLOR};
    transition: 0.2s ease;
  }
  &:hover ${IconApp} {
    color: ${({ theme }) => theme.WHITECOLOR};
    transition: 0.2s ease;
  }
  ${mobile({
    display: "none",
  })}
`;

export const WrapperProduct = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.list === "list" ? 1 : "auto-fill")},
    minmax(250px, 1fr)
  );
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

//pagination
export const WrapperPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;
export const ButtonPrev = styled.div`
  padding: 5px 7px;
  cursor: pointer;
  border: 2px solid
    ${({ theme, stopEventt }) =>
      stopEventt ? theme.BORDERSCOLOR : theme.TEXTCOLOR};
  color: ${({ theme, stopEventt }) =>
    stopEventt ? theme.BORDERSCOLOR : theme.TEXTCOLOR};
  margin-right: 7px;
  ${(props) =>
    !props.stopEventt &&
    css`
      &:hover {
        border-color: ${({ theme }) => theme.REDCOLOR};
        color: ${({ theme }) => theme.REDCOLOR};
      }
    `}
`;
export const ButtonNext = styled.div`
  border: 2px solid
    ${({ theme, stopEventt }) =>
      stopEventt ? theme.BORDERSCOLOR : theme.TEXTCOLOR};
  color: ${({ theme, stopEventt }) =>
    stopEventt ? theme.BORDERSCOLOR : theme.TEXTCOLOR};
  padding: 5px 7px;
  margin-left: 7px;
  cursor: pointer;
  ${(props) =>
    !props.stopEventt &&
    css`
      &:hover {
        border-color: ${({ theme }) => theme.REDCOLOR};
        color: ${({ theme }) => theme.REDCOLOR};
      }
    `}
`;
export const ButtonPage = styled.div`
  border: 2px solid
    ${({ theme, focus }) => (focus ? theme.REDCOLOR : theme.TEXTCOLOR)};
  color: ${({ theme, focus }) => (focus ? theme.REDCOLOR : theme.TEXTCOLOR)};
  padding: 5px 15px;
  margin: 0px 5px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.REDCOLOR};
    color: ${({ theme }) => theme.REDCOLOR};
  }
`;

export const IconNext = styled(BsChevronRight)`
  color: inherit;
  vertical-align: middle;
`;
export const IconPrev = styled(BsChevronLeft)`
  color: inherit;
  vertical-align: middle;
`;

export const WrapperEmptyData = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${({ theme }) => theme.TEXTCOLOR};
`;
export const EmptyData = styled.img`
  width: 300px;
`;
