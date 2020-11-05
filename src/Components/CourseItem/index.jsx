import React from "react";
import { Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import FavoriteIcon from "@material-ui/icons/Favorite";
import img from "../../Assets/img/user-4-49x49.jpg";
import { Box, Typography } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { useDispatch } from "react-redux";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  // Card setup
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    transition: "all 0.2s ease-in",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  // End of Card set up

  // Pop over setup
  popover: {
    pointerEvents: "none",
  },
  popover__second: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  // End of Popover setup
}));

const CourseItem = (props) => {
  // Card setup
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // End of card setup

  // Popover setup
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // End of Popover setup

  // Put to wish list
  const dispatch = useDispatch();
  const putToWishList = () => {
    dispatch({
      type: "PUT_TO_WISHLIST",
      payload: props,
    });
  };
  // End of put to wish list

  return (
    <>
      <Col lg="4" className="course__item">
        <Card className="course__item__card">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={img} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.course.nguoiTao.hoTen}
          />
          <Box className="course__item__image">
            <CardMedia className={classes.media} image={props.course.hinhAnh} />
          </Box>

          <CardContent>{props.course.tenKhoaHoc}</CardContent>
          <CardActions disableSpacing>
            {/* Detaile icon */}
            <Box
              aria-label="learn more"
              aria-owns={open ? "learn-more-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <IconButton>
                <AnnouncementIcon />
              </IconButton>
              <Popover
                id="learn-more-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography>Learn More</Typography>
              </Popover>
            </Box>
            {/* End of Detail icon */}

            {/* Add to favorite icon */}
            <Box
              aria-label="add to favorites"
              aria-owns={open ? "mouse-over-popover-2" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <IconButton onClick={() => putToWishList()}>
                <FavoriteIcon />
              </IconButton>
              <Popover
                id="mouse-over-popover-2"
                className={classes.popover__second}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <span>Add to Wish-list</span>
              </Popover>
            </Box>
            {/* End of Add to favourite icon */}

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <p className="course__item__text">{props.course.moTa}</p>
          </Collapse>
        </Card>
      </Col>
    </>
  );
};
export default CourseItem;
