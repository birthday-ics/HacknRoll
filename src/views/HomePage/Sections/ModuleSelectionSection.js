import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
             {currentModules && currentModules.map((module) => {
              return(<GridItem xs={12} sm={12} md={4} key={module} 
                onClick={() => {    
                history.push('/modules/' + module[1])
                }}
            > 
                <InfoArea
                    title={module[1]}
                    description={module[2]}
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
