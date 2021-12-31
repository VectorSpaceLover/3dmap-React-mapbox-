import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import '../../css/style.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '21px 0px 23px 23px',
    backgroundColor: 'white',
    color: '#33323D',
  },

  address: {
      marginTop: 5,
  },
  numberline: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
  },

  number: {
    display: 'flex',
    flexDirection: 'column',
  },

  progress: {
    display: 'flex',
    flexDirection: 'row',
    height: 13,
    width: 465,
    marginTop: 16,
    marginBottom: 0,
    paddingBottom: 0,
  }
});

function AttendenceTitle({siteInfo}) {
  const classes = useStyles();
  return (
    <div className = {classes.root} >
        <div className='font22-700'>{`Site Attendence: ${siteInfo?.Sitename}`}</div>
        <div className={`${classes.address} font13-700`}>{`address: ${siteInfo?.Siteaddress}`}</div>
        <div className={classes.numberline}>
            <div className={classes.number}>
                <span className='font18-700' style = {{color: '#33323D'}}>214</span>
                <span className='font12-400' style = {{color: '#7A7A7A', marginTop: 5}}>People on site</span>
            </div>
            <div className={classes.number} style = {{marginLeft: 41}}>
                <span className='font18-700' style = {{color: '#753AF4'}}>199</span>
                <span className='font12-400' style = {{color: '#753AF4', marginTop: 5}}>Workers</span>
            </div>
            <div className={classes.number} style = {{marginLeft: 38}}>
                <span className='font18-700' style = {{color: '#EC4E86'}}>15</span>
                <span className='font12-400' style = {{color: '#EC4E86', marginTop: 5}}>Visitors</span>
            </div>
        </div>
        <div className={classes.progress}>
            <div style={{width: 404, backgroundColor: '#753AF4', borderRadius: 20}}></div>
            <div style={{width: 61, backgroundColor: '#EC4E86', borderRadius: 20}}></div>
        </div>
    </div>
  );
}

export default AttendenceTitle;
