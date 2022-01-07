import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer.js";
import Slide from "@material-ui/core/Slide";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.js";

import Navbar from "../Components/Common/Navbar.js"

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import profileStyles from "assets/jss/material-kit-react/views/profilePage.js";

import { getValueByKey } from "database/utils.js";
import Card from "components/Card/Card.js";

const useStyles = makeStyles(styles);
const useProfileStyles = makeStyles(profileStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function ModulePage(props) {
  const classes = useStyles();
  const profileClasses = useProfileStyles();
  const { ...rest } = props;
  const moduleId = rest.match.params.moduleId
  const [modulePosts, setModulePosts] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const valuePromise = getValueByKey("Posts/" + moduleId)
    valuePromise.then(res => {
      setModulePosts(res)
    })
  }, [])

  return (
    <div>
      <Navbar/>
      <Parallax
        large
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(profileClasses.main, profileClasses.mainRaised)} style={{ marginTop: '-38%'}}>
          <div className={profileClasses.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={profileClasses.profile}>
                  <div className={profileClasses.name}>
                    <h2 className={profileClasses.title} style={{ color: 'white' }}>{moduleId}</h2>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={profileClasses.description}>
              <p>
                Find people to group with. Create posts to search for group mates, or select
                on any of the posts to apply to join their group.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              {Object.keys(modulePosts).map((key, idx) => {
                const postInfo = modulePosts[key]
                return (
                  <GridItem xs={12} sm={12} md={8} className={profileClasses.navWrapper} key={idx}>
                    <Card onClick={() => setShowModal(true)}>
                      <div>
                        <h1>{key}</h1>
                        <h4>{postInfo.Details}</h4>
                      </div>
                    </Card>
                  </GridItem>
                );
              })}
            </GridContainer>
        </div>
      </div>

      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setShowModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Signup for Group</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3} style={{maxWidth: '100%'}}>
              <CustomInput
                id="name"
                inputProps={{
                  placeholder: "Name",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3} style={{maxWidth: '100%'}}>
              <CustomInput
                labelText="Current CAP"
                id="cap"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3} style={{maxWidth: '100%'}}>
              <CustomInput
                labelText="Other remarks"
                id="remarks"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button color="transparent" simple>
            Close
          </Button>
          <Button
            onClick={() => setShowModal(false)}
            color="primary"
            simple
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
