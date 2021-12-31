import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { ReactComponent as PhoneIcon } from '../../images/account/phone.svg';
import { ReactComponent as MsgIcon } from '../../images/account/message.svg';
import '../../css/style.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '420px !important',
    padding: '27px 49px 23px 26px',
    backgroundColor: 'white',
    color: '#33323D',
    marginBottom: 12,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 31, 
    position: 'relative',
    borderBottom: '1px solid #DDE4EE',
    paddingBottom: 16,
  },

  date: {
    color: '#7A7A7A',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
  },
});


const itemList = [
    {
        id: 1,
        description: 'Customer Support Number',
        icon: <PhoneIcon />,
        txt: '+1 14384 13135',
    },
    {
        id: 1,
        description: 'Customer Support Email',
        icon: <MsgIcon />,
        txt: 'gethelp@company.com',
    },
]

function NeedHelp({siteInfo}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className = {classes.column}>
        <div className='font22-700'>Need Help ?</div>
        {itemList.map((item, index) => 
            <div key = {index} className={classes.item}>
                <div className={`${classes.date} font11-400`}>{item.description}</div>
                <div className={`${classes.row}`}>
                    <span className = 'font13-700'>{item.icon}</span>
                    <span className = 'font13-700' style = {{marginLeft: 20}}>{item.txt}</span>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default NeedHelp;
