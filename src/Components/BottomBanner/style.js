import { makeStyles } from "@material-ui/core";
import background from "../../Assets/img/bg-cta-3.jpg";

const style = makeStyles(() => ({

  BottomBanner: {
    position: "relative",
    backgroundImage: "url(" + background + ")",
    textAlign: "center",
    paddingTop: 90,
    paddingBottom: 90,
    backgroundPosition: "center",
    marginTop: 100,
    backgroundAttachment: 'fixed',

    "&::after": {
      height: "100%",
      content: '""',
      background: "rgba(24, 26, 35, 0.41)",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },

  BottomBannerWrapper: {
    maxWidth: 575,
    margin: 'auto',
    position: 'relative',
    zIndex: 1,

    "& h3": {
      color: "#ffffff",
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 0.88,
    },

    "& p": {
      color: "#ffffff",
      marginTop: 16,
      fontSize: 14,
      lineHeight: 1.71429,
      fontWeight: 400,
      letterSpacing: ".05em",
    },

    "& button": {
      color: "#ffffff",
      backgroundColor: "#353535",
      borderColor: "#353535",
      padding: "17px 33px 15px",
      fontSize: 14,
      lineHeight: 1.71,
      border: "2px solid",
      fontWeight: 600,
      letterSpacing: "0.09em",
      textTransform: "uppercase",
      display: "flex",
      margin: "auto",
      marginTop: 30,
      transition: 'all .3s ease',
      transitionDelay: '0s',
      transitionDuration: '0.3s',
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',

      "&:hover":{
        borderColor: '#4968ee',
        color: '#ffffff',
        backgroundColor: '#4968ee',
      },
    },
  },
}));

export default style;
