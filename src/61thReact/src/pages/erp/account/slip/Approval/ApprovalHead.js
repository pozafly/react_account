import React from 'react';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import { makeStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

const ApprovalHead = ({ headInfo, headChange }) => {

    const { startDate, endDate } = headInfo;
    const classes = useStyles();

    return (
        <React.Fragment>
            <div align="left" className={classes.root}>
                <TextField
                    name="startDate"
                    type={"date"}
                    defaultValue={startDate}
                    onChange={headChange}
                />
                <TextField
                    name="endDate"
                    type={"date"}
                    defaultValue={endDate}
                    onChange={headChange}
                />
            </div>
        </React.Fragment>
    );
};

export default ApprovalHead;