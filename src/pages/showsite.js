import React, { useState, useRef } from 'react';
import PolygonMap from '../components/polygonmap';
import { makeStyles } from '@mui/styles';
// import GmailTreeView from '../components/gmailtreeview';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },

});

function ShowSite() {
  const classes = useStyles();

  return (
      <>
        <div className = {classes.root} >
            {/* <GmailTreeView /> */}
        </div>
      </>
  );
}

export default ShowSite;
