import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ModuleSelectionSection({currentModules}) {
  const classes = useStyles();
  console.log(typeof(currentModules))
  
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
             {currentModules.map((module) => {
              return(<GridItem xs={12} sm={12} md={4} key={module}> 
                <InfoArea
                    title={module}
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon="testing"
                    iconColor="info"
                    vertical
                />
              </GridItem>)
          })}
          
        </GridContainer>
      </div>
    </div>
  );
}
