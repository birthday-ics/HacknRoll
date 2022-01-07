import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Search from "@material-ui/icons/Search";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomInput2 from "components/CustomInput/CustomInput2.js";
import Navbar from "../Components/Common/Navbar.js"

import { getValueByKey } from "database/utils.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import styles2 from "assets/jss/material-kit-react/views/homePage.js";

// Sections for this page
import ModuleSelectionSection from "./Sections/ModuleSelectionSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function LandingPage(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { ...rest } = props;
  const [search, setSearch] = useState("")
  const [modules, setModules] = useState([])
  const [allmodules, setAllModules] = useState([])

  function searchWord() {
      if (search === "") {
            setModules(allmodules)
      } else {
            const newModules = allmodules
            setModules(newModules.filter((module) => {
                return module[1].includes(search)
            }))
      }
  }
  useEffect(() => {
    const valuePromise = getValueByKey("modules")
    valuePromise.then(res => {
      const moduleArr = []
      Object.keys(res).forEach(moduleCode => {
        const moduleInfo = res[moduleCode]
        moduleArr.push([moduleInfo.description, moduleInfo.moduleCode, moduleInfo.title])
      })
      setModules(moduleArr)
      setAllModules(moduleArr)
    })
  }, [])

  return (
    <div>
      <Navbar/>
      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes2.title}>Choose Your Modules Here</h1>
              <h4 className={classes2.description}>
                    Search and select the module that you wish to find a project group for.
              </h4>
              <div className={classes2.searchbar}>
                <CustomInput2
                  white
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl,
                  }}
                  inputProps={{
                    placeholder: "Search",
                    onChange: (event) => {
                        setSearch(event.target.value)},
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput,
                    },
                  }}
                />
                <Button justIcon round color="white" onClick={() => searchWord()}>
                  <Search className={classes.searchIcon} />
                </Button>
              </div>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
             <ModuleSelectionSection currentModules={modules}/> 
        </div>
      </div>
      <Footer />
    </div>
  );
}
