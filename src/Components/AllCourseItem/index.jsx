import React from "react";
import { useDispatch } from "react-redux"
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
import FavoriteIcon from "@material-ui/icons/Favorite";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import img from "../../Assets/img/user-4-49x49.jpg";

import "./index.scss";
import { Box, Popover, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: "solid",
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

const AllCourseItem = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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

  // Put to Wish List
  const dispatch = useDispatch();
  const putToWishList = () => {
    dispatch({
      type: "PUT_TO_WISHLIST",
      payload: props,
    });
  };
  // End of Put to Wish List
  return (
    <>
      <Col lg="4" className="allCourse__item">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={img} alt="teacher image"/>
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.course.tenKhoaHoc}
          />
          <CardMedia className={classes.media} image={props.course.hinhAnh} />
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
            <CardContent>{props.course.moTa}</CardContent>
          </Collapse>
        </Card>
      </Col>
    </>
  );
};
export default AllCourseItem;
