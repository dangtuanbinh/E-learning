import { makeStyles } from "@material-ui/core";

const style = makeStyles(() => ({
  "*": {
    boxSizing: "border-box",
  },

  // MuiGrid-justify-xs-center: {
  //   justifyContent: "space-between",
  // },

  footer: {
    "& a, & p": {
      color: "#9c9999",
      fontWeight: 400,
      textDecoration: "none",
    },
  },

  top: {
    background: "#404040",
    paddingTop: "65px",
    paddingBottom: "65px",
  },

  topContentLeft: {
    "& p": {
      fontSize: 14,
      lineHeight: 1.71429,
      letterSpacing: ".025em",
      marginTop: 22,
    },

    "@media screen and (max-width: 767px)": {
      "& p": {
        textAlign: "center",
      },

      "& img": {
        display: "flex",
        margin: "auto",
      },
    },
  },

  topContentLeftBottom: {
    marginTop: 22,
    paddingTop: 32,
    borderTop: "1px solid #d7d7d7",

    "& ul": {
      padding: 0,
      width: 274,
    },

    "@media screen and (max-width: 599px)": {
      "& ul": {
        width: "fit-content",
        margin: "auto",
      },
    },
  },

  topContentLeftBottomContact: {
    display: "flex",

    "& a, & p": {
      color: "#ffffff",
      fontSize: 16,
      lineHeight: 1.34,
      letterSpacing: ".025em",
      textAlign: "left",
      marginBottom: 10,
      marginLeft: 12,
      marginTop: 0,
      transition: "all .3s ease",
      transitionDelay: "0s",
      transitionDuration: "0.3s",
      transitionProperty: "all",
      transitionTimingFunction: "ease",
    },

    "& a:hover": {
      color: "#72d5a5",
    },
  },

  icon: {
    color: "#9c9999",
    marginBottom: 10,
    marginLeft: 12,
  },

  topContentCenter: {
    "& h5": {
      fontSize: 20,
      color: "#ffffff",
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacing: ".075em",
    },

    "& p": {
      fontSize: 14,
      lineHeight: 1.71429,
    },

    "@media screen and (max-width: 767px)": {
      "& p, & h5": {
        textAlign: "center",
      },
    },

    "& input": {
      padding: "17px 22px",
      background: "#565656",
      textAlign: "center",
      width: "100%",
      borderColor: "transparent",
      outline: "none",

      "&::placeholder": {
        color: "#ffffff",
      },

      "&:focus::placeholder": {
        color: "transparent",
      },
    },

    "& button": {
      color: "#ffffff",
      backgroundColor: "#4968ee",
      borderColor: "#4968ee",
      width: "100%",
      padding: "17px 33px 15px",
      fontSize: 14,
      lineHeight: 1.71,
      border: "2px solid",
      fontWeight: 600,
      letterSpacing: "0.09em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      textAlign: "center",
      cursor: "pointer",
      verticalAlign: "middle",
      marginTop: 10,
      outline: "none",
      transition: "all .4s",
      transitionTimingFunction: "ease-in-out",

      "&:hover": {
        color: "#4968ee",
        borderColor: "#ffffff",
        background: "#ffffff",
      },
    },
  },

  social: {
    display: "flex",
    marginTop: 30,

    "@media screen and (max-width: 599px)": {
      "&": {
        justifyContent: "center",
      },
    },

    "& p": {
      marginBottom: 30,
      paddingRight: 8,
      color: "#ffffff",
    },

    "& a": {
      padding: "0 8px",
      color: "#ffffff",
      transition: "all .3s ease",
      transitionProperty: "all",
      transitionDuration: "0.3s",
      transitionTimingFunction: "ease",
      transitionDelay: "0s",

      "&:hover": {
        color: "#72d5a5",
      },
    },
  },

  topContentRight: {
    "& h5": {
      // extend: "topContentCenter h5",
      fontSize: 20,
      color: "#ffffff",
      lineHeight: 1.2,
      fontWeight: 500,
      letterSpacing: ".075em",
    },
  },

  topContentRightWrapper: {
    position: "relative",
    overflow: "hidden",

    "&:hover::after":{
      opacity: 1,
    },

    "&::after": {
      content: '""',
      background: "rgba(25, 24, 24, 0.45)",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      opacity: 0,
      transition: "all .3s ease",
      transitionDelay: "0s",
      transitionDuration: "0.3s",
      transitionProperty: "all",
      transitionTimingFunction: "ease",

      "&:hover":{
        opacity: 1,
      },

      "@media screen and (max-width: 1279px)": {
        "&": {
          opacity: 1,
        },
      },
    },

    "&:hover svg": {
      opacity: 1,
      transition: "all .3s ease",
      transitionDelay: "0s",
      transitionDuration: "0.3s",
      transitionProperty: "all",
      transitionTimingFunction: "ease",
    },

    "&:hover img": {
      transform: "scale(1)",
    },

    "& img": {
      width: "100%",
      transform: "scale(1.1)",
      transition: "all .3s ease",
      transitionDelay: "0s",
      transitionDuration: "0.3s",
      transitionProperty: "all",
      transitionTimingFunction: "ease",
    },

    "& svg": {
      top: "50%",
      left: "50%",
      color: "#ffffff",
      position: "absolute",
      fontSize: 56,
      transform: "translate(-50%, -50%)",
      boxSizing: "content-box",
      opacity: 0,
      cursor: "pointer",
      zIndex: 1,

      "@media screen and (max-width: 1279px)": {
        "&": {
          opacity: 1,
        },
      },

      "&:hover": {
        color: "#9c9999",
      },
    },
  },

  bottom: {
    background: "#363636",
    paddingTop: "28px",
    paddingBottom: "28px",
  },

  bottomContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",

    "@media screen and (max-width: 599px)": {
      "&": {
        justifyContent: "center",
      },
    },
  },
}));

export default style;
