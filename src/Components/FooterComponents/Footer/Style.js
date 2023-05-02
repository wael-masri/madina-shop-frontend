import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { mobile, tab } from "../../../Assets/CustomCss/Responsive";
import { Link } from "react-router-dom";
export const Container = styled.footer`
  background-color: ${({theme}) => theme.FAKEGRAY};
  padding: 5px 60px;
  padding-top: 40px;
  bottom: 0;
  width: 100%;
  ${mobile({
    padding: "5px 10px"
  })}
  ${tab({
    padding: "5px 20px"
  })}
`;
export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection:"column"})}
`;
export const DivElements = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoFooter = styled.img`
  width: 230px;
  padding-bottom: 20px;
`;
export const ItemUl = styled.ul`
  list-style: none;
`;
export const ItemLi = styled.li`
  margin: 20px 0px;
  font-size: 13px;
  letter-spacing: 1px;
  color: ${({theme,focused}) => focused? theme.REDCOLOR : theme.TEXTCOLOR};
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: ${({theme}) => theme.REDCOLOR};
    transition: 0.3s ease;
  }
  ${mobile({textAlign:"center"})}
`;
export const Text = styled.p`
  letter-spacing: 2px;
  font-size: 14px;
  text-align: justify;
  color: ${({theme}) => theme.TEXTCOLOR};
`;
export const MediumTitle = styled.h3``;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid ${({theme}) => theme.BORDERSCOLOR};
`;

export const PaymentImage = styled.img`
  width: 250px;
  padding: 15px 0px;
`;
export const WrapperMed = styled(Link)`
text-decoration: none;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  margin: 7px 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerMedia = styled.div`
  width: 100%;
  display: flex;
`;
export const FacebookIcon = styled(FacebookOutlinedIcon)`
  color: ${({theme}) => theme.WHITECOLOR};
  cursor: pointer;
`;
export const InstaIcon = styled(InstagramIcon)`
  color: ${({theme}) => theme.WHITECOLOR};
  cursor: pointer;
`;
export const TwitterIcons = styled(TwitterIcon)`
  color: ${({theme}) => theme.WHITECOLOR};
  cursor: pointer;
`;
export const WhatsAppIcons = styled(WhatsAppIcon)`
  color: ${({theme}) => theme.WHITECOLOR};
  cursor: pointer;
`;

export const LocIcon = styled(LocationOnIcon)`
  color: ${({theme}) => theme.BLACKCOLOR};
  vertical-align: middle;
`;
export const MailIcon = styled(EmailIcon)`
  color: ${({theme}) => theme.BLACKCOLOR};
  vertical-align: middle;
`;
export const CallIcon = styled(PhoneIphoneOutlinedIcon)`
  color: ${({theme}) => theme.BLACKCOLOR};
  vertical-align: middle;
`;
export const CopyWrite = styled.p`
${mobile(
  {
    textAlign: "justify",
    fontSize: "15px",
    margin: "10px 0px"
  }
)}
`;
