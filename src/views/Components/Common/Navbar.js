import React from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";


const useStyles = makeStyles(styles);

export default function Navbar() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div id="navbar" className={classes.navbar}>
            <Header
                brand="NUS Match"
                color="dark"
                rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}> 
                        <Button
                        justIcon // list item available if logged in
                        round
                        href="#pablo"
                        className={classes.notificationNavLink}
                        onClick={(e) => e.preventDefault()}
                        color="rose"
                        >
                        <Email className={classes.icons} />
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <CustomDropdown
                        left // list item available if logged in
                        caret={false}
                        hoverColor="black"
                        dropdownHeader="Username" //Placeholder name, replace with the users name
                        buttonText={
                            <img
                            src={profileImage}
                            className={classes.img}
                            alt="profile"
                            />
                        }
                        buttonProps={{
                            className:
                            classes.navLink + " " + classes.imageDropdownButton,
                            color: "transparent",
                        }}
                        />
                    </ListItem>
                </List>
                }
            />
        </div>
    );
}

