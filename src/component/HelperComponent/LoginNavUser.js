import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import NavUserImg from '../LandingPage/asset/commentImg.png'
import "./style/resetAccordion.css"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="accordion__Container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color : "white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'span'} className={classes.heading}>
              <p className="loginNav__userText" style={{ marginRight:"20px", fontFamily: "Montserrat"}}>UserName</p>
              <Avatar className="loginNav__userImg" src={NavUserImg} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} className="loginNav__resetTypo">
              <div className="login__typoTools">
            <Link exact to="/edit">Account Settings</Link>
            <a href="/">FAQ</a>
            <a href="/">Sign Out</a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
