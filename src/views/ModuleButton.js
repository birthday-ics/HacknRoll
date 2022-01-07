import React from "react";
// core components
import Button from "components/CustomButtons/Button.js";

export default function ModuleButton(props) {
    const classes = useStyles();
    const {ModuleCode, ModuleName} = props;

    const openModule = (slug) => {
        const url = "localhost:3000/modules" + slug;
        window.open(url, '_blank');
    }
    return (
        <Button
        href={ModuleCode} // Is this a string or even needed? lol
        className={placeholder_class} // change this
        onClick={openModule(ModuleCode)} // go to Log In page => can register from there, idk what is this
        color="rose"
        round
        >
            <span>
                <p class="text-bold">
                    {ModuleCode}
                </p>
                <br />
                <p class="text-muted">
                    {ModuleName}
                </p>
            </span>
        </Button>
    );
}