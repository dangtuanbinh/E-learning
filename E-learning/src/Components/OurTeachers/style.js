import { makeStyles } from "@material-ui/core";

const style = makeStyles(() => ({
  title: {
    position: "relative",
    height: 20.6,
    marginBottom: 40,
    overflow: "hidden",
    marginTop: 100,

    "& h6": {
      color: "#151515",
      textAlign: "center",
      fontSize: 18,
      marginBottom: 40,
      position: "relative",
      display: "block",
      background: "white",
      width: "fit-content",
      left: "50%",
      transform: "translate(-50%, 0)",
      padding: "0 16px",
    }
  },

  line: {
    position: "absolute",
    top: "50%",
    height: 1,
    width: "100vw",
    background: "#d7d7d7",
    left: 0,
  },

  OurTeachersItem: {
    width: 289.984,

    "& img": {
      width: "100%",
    },
  },

  OurTeachersItem: {
    position: "relative",
    overflow: "hidden",
    width: 330,
    marginBottom: 30,

    "&:hover $OurTeachersItemDetailText": {
      transform: "translate(36%, -35%)",
    },
  },

  OurTeachersItemDetailText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    tranform: "translate",
    tranform: "translate(52%,50%)",
    transform: "translate(12%, -35%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
    transition: "all .3s ease",

    "& h5": {
      color: "#ffffff",
      fontSize: 20,
      lineHeight: 1.2,
      fontWeight: 500,
      transition: 'all .3s ease',
      transitionDelay: '0s',
      transitionDuration: '0.3s',
      transitionProperty: 'all',
      transitionTimingFunction: 'ease',

      "&:hover":{
        color: '#72d5a5',
      },
    },

    "& p": {
      color: "#9c9999",
      lineHeight: 1.5,
      letterSpacing: ".025em",
    },

    "&::after": {
      width: 313,
      height: 75,
      content: '""',
      position: "absolute",
      transform: "skew(10deg) translate(-24%, -9%)",
      backgroundColor: "rgba(17, 17, 17, 0.5)",
      zIndex: '-1',
    },
  },

  OurTeachersWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "-30px",

    "@media screen and (max-width: 1279px)": {
      "&": {
        justifyContent: "space-around",
      },
    },
  },

  //   OurTeachersItemDetailBackground: {
  //     background-color: rgba(17, 17, 17, 0.5);
  //     transform: skew(10deg);
  //     height: 75px;
  //     position: absolute;
  //     width: 313px;
  //   },
}));

export default style;
