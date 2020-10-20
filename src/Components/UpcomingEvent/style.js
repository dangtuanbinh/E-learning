import { makeStyles } from "@material-ui/core";

const style = makeStyles(() => ({
  UpcomingEvent: {
    marginTop: 100,
    marginBottom: 100,

    "& img": {
      width: "100%",
      transform: "scale(1.1)",
      transition: "all .3s ease",
    },

    "& h4": {
      color: "#151515",
      textAlign: "center",
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: ".02em",
      transition: "all .3s ease",
    },

    "& p": {
      fontWeight: 400,
      letterSpacing: ".05em",
      color: "#4261e4",
      fontSize: 20,
    },

    "& article": {
      position: "relative",
      paddingBottom: 33,
    },
  },

  title: {
    position: "relative",
    height: 20.6,
    marginBottom: 40,
    overflow: "hidden",

    "& h6": {
      color: "#151515",
      textAlign: "center",
      fontSize: 18,
      marginBottom: 40,
      position: "relative",
      display: "block",
      background: "white",
      width: 'fit-content',
      left: '50%',
      transform: 'translate(-50%, 0)',
      padding: '0 16px',
    },
  },

  line: {
    position: "absolute",
    top: "50%",
    height: 1,
    width: "100vw",
    background: "#d7d7d7",
    left: 0,
  },

  content: {
    width: "90%",
    textAlign: "center",
    bottom: 0,
    left: 0,
    position: 'relative',
    textAlign: 'center',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-80px',
    padding: '20px 15px',
    background: '#ffffff',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.27)',
  },

  social: {
    marginTop: 6,
    height: 0,
    transition: "all .3s ease",

    "& svg": {
      color: "#151515",
      marginLeft: 12,
      marginBottom: 12,
      opacity: 0,
    },
  },

  wrapper: {
    "& > a": {
      display: "block",
      overflow: "hidden",
    },

    "&:hover $social, &:hover $svg, &:hover img": {
      height: "100%",
      opacity: 1,
      transform: "scale(1)",
    },

    "& h4:hover": {
      color: "#50ba87",
    },

    "& $svg": {
      transition: "all 0.3s ease-in-out",

      "&:hover": {
        color: "#1b3abe",
      },
    },
  },
}));

export default style;
