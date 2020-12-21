import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const WishListItem = ({course: {quantity , wishListCourse: {course: {tenKhoaHoc, hinhAnh, soLuongHocVien}}}}) => {
    const dispatch = useDispatch();
    const inCreaseItem = () => {
        dispatch({
            type: "PUT_TO_WISHLIST",
            payload: {
                course: {
                    tenKhoaHoc
                }
            }
        });
    }
    const deCreaseItem = () => {
        dispatch({
            type: "REDUCE_ITEM",
            payload: {
                course: {
                    tenKhoaHoc
                }
            }
        });
    }
    const removeItem = () => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                course: {
                    tenKhoaHoc
                }
            }
        });
    }
    return (
        <>
        <Card 
            style={classes.card}
        >
            <CardMedia
                style={classes.cardMedia}
                image={hinhAnh}
                title="Live from space album cover"
            />
            <CardContent style={classes.cardContent}>
                <Typography variant="h5">{tenKhoaHoc}</Typography>
                <Typography variant="subtitle1">Số lượng học viên: {soLuongHocVien}</Typography>
                <div style={classes.quantityContainer}>
                    <Button onClick={() => deCreaseItem()} variant="outlined" color="primary" style={classes.button}>
                        <Typography variant="h5">-</Typography>
                    </Button>
                    <Typography variant="h4">{quantity}</Typography>
                    <Button onClick={() => inCreaseItem()} variant="outlined" color="secondary" style={classes.button}>
                        <Typography variant="h5">+</Typography>
                    </Button>
                </div>
            </CardContent>        
      </Card>
        </>
       
    )
}
const classes = {
    card: {
        width: "100%",
        display: 'flex',
        margin: 5
    },
    cardContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    cardMedia: {
        height: 150,
        width: 150,
    },
    button: {
        margin: 5
    },
    quantityContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
}
export default WishListItem; 