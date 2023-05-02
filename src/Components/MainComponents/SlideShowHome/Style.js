import styled from "styled-components";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";

export const Container = styled.div`
  width: 100%;
  padding: 0px 60px;
  margin-top: 40px;
  margin-bottom: 120px;
  ${mobile({
    padding: "0px 10px",
    marginBottom:"0px"
  })}
   ${tab({
    padding: "0px 20px",
    marginBottom:"0px"
  })}
`;
export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    display:"block"
  })}
`;
export const WrapperProduct = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    marginBottom:"30px"
  })}
  
`;
export const FirstProductBox = styled.div`

  height: 200px;
  width: 100%;
  margin-bottom:30px;
  
`;
export const SecondProductBox = styled.div`
  height: 200px;
  width: 100%;
  
`;
export const WrapperSlideShow = styled.div`
 flex: 2;

  width: 800px;
  height: 430px;
  margin-left: 30px;
  
  ${mobile({
    marginLeft:"0px",
    width: "100%",
    height: "300px"
  })}
`;