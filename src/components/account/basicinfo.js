import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../images/account/logo.svg';
import { ReactComponent as BlackPin } from '../../images/account/blackpin.svg';
import { ReactComponent as MsgIcon } from '../../images/account/message.svg';
import { makeStyles, withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as EditIcon } from '../../images/account/edit.svg';
import { ReactComponent as GallaryIcon } from '../../images/account/gallary.svg';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import OutlinedInput from '@mui/material/OutlinedInput';
import { BG_COLOR_WHITE, BG_COLOR_BOUNDARY_BTN, BG_COLOR_BULE_LITTLE, BG_COLOR_WARNING } from '../../constant';

import '../../css/style.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '160px !important',
    padding: '24px 49px 23px 26px',
    backgroundColor: 'white',
    color: '#33323D',
    marginBottom: 12,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  column: {
    display:'flex',
    flexDirection: 'column',
    width: '100%',
  },

  txt:{
    marginLeft: 39,
  },
  line: {
    marginTop: 19,
    alignItems: 'center'
  },

  title: {
    marginTop: 11,
  },

  description: {
    paddingTop: 20,
    marginLeft: 19,
  },

  address: {
      marginLeft: 16,
      fontSize: 13,
      marginTop: 5,
  },
  // Dialog
  paper: { minWidth: "754px" },

  dialogContainer: {
    padding: '0px 82px 0px 82px',
  },

  dialogHeader: {
    paddingTop: '40px',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottom: '1px solid #DDE4EE',
    paddingBottom: '29px'
  },

  contentTxt: {
    color: '#7A7A7A',
  },

  input: {
    marginTop: 18,
    width: '100%',
    height: 53,
    backgroundColor: 'white',
    fontFamily: 'RivieraNightsTrial Regular',
    fontSize: 14,
    fontWeight: 700,
    '& > fieldset': {
        backgroundColor: (props) => (props.bgcolor),
        border: (props) => (`1px solid ${props.brcolor} !important`),
        borderWidth: '1px !important',
        borderColor: `#DBDBDB !important`,
    },
    '&:hover > fieldset': {
        opacity: '.7',
  }
},

});

const ColorButton = withStyles((theme) => ({
  root: {
      width: (props) => (props.width?props.width:'100%'),
      height: (props) => (props.height?props.height:'53px'),
      color: (props) => (props.txtcolor),
      paddingTop: '2px',
      paddingBottom: '2px',
      textTransform: 'none',
      borderRadius: 0,
      backgroundColor: (props) => (props.bgcolor),
      border: (props) => (`1px solid ${props.brcolor} !important`),
      '&:hover': {
          opacity: '.7',
          backgroundColor: (props) => (props.bgcolor),
          borderColor: (props) => (`${props.hrcolor} !important`),
      },
  },
}))(Button);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BasicInfoCard({siteInfo}) {
  const classes = useStyles();

  const [accountName, setAccountName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAccountName = (event) => {
    setAccountName(event.target.value);
  }

  const handleCompanyAddress = (event) => {
    setCompanyAddress(event.target.value);
  }

  return (
    <div className={classes.root}>
      <div className = {classes.row} >
        <LogoIcon />
        <div className={`${classes.column} ${classes.txt}`}>
          <div className={classes.row}>
            <span className={`${classes.title} font22-700`}>Hi Daniel Ricciardo</span>
            <span className={`${classes.description} font13-700`}>New Australian Construction Company LLC</span>
            <ColorButton 
              style = {{position: 'absolute', top: 0, right: 0}} 
              brcolor = {BG_COLOR_WHITE}
              bgcolor = {BG_COLOR_WHITE}
              txtcolor = {BG_COLOR_BOUNDARY_BTN}
              hrcolor = {BG_COLOR_BULE_LITTLE}
              width = '155px'
              height = '35px'
              onClick={handleClickOpen}
            >
              <EditIcon style = {{marginRight: 14}} /><span className='font13-900'>Edit Basic Info</span>
          </ColorButton>
          </div>
          <div className={`${classes.row} ${classes.line}`}>
            <BlackPin />
            <span className={`${classes.address} font13-700`}>1256 William St, Sydney, NSW 2001</span>
          </div>
          <div className={`${classes.row} ${classes.line}`}>
            <MsgIcon />
            <span className={`${classes.address} font13-700`}>companymail@nacc.com</span>
          </div>
        </div>
      </div>
      <BootstrapDialog
        classes={{ paper: classes.paper}}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
          <div className={classes.dialogContainer}>
            <div className={classes.dialogHeader}>
              <span className='font18-700'>Edit Basic Information</span>
              <LogoIcon style = {{marginTop: 25}}/>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 32}}>
                <GallaryIcon />
                <span className = 'font13-900' style={{color: '#1875F0', marginLeft: 20}}>Change Company logo</span>
              </div>
            </div>
          </div>
          <div className={classes.dialogContainer}>
            <div style={{marginTop: 35}}>
              <span className={`${classes.contentTxt} font13-400`}>Account Name</span>
              <OutlinedInput className = {classes.input} value={accountName} onChange={handleAccountName} />
            </div>
            <div style={{marginTop: 24}}>
              <span className={`${classes.contentTxt} font13-400`}>Company Address</span>
              <OutlinedInput className = {classes.input} value={companyAddress} onChange={handleCompanyAddress} />
            </div>
            <div style = {{
                marginTop: 35,
                marginBottom: 40,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ColorButton 
                    brcolor = {BG_COLOR_WHITE}
                    bgcolor = {BG_COLOR_WHITE}
                    txtcolor = {BG_COLOR_WARNING}
                    hrcolor = {BG_COLOR_WHITE}
                    width = '146px'
                    height = '40px'
                    onClick={handleClose}
                  >
                    <span className='font13-700'>Cancel</span>
                </ColorButton>
                <ColorButton 
                    brcolor = {BG_COLOR_BOUNDARY_BTN}
                    bgcolor = {BG_COLOR_BOUNDARY_BTN}
                    txtcolor = {BG_COLOR_WHITE}
                    hrcolor = {BG_COLOR_BOUNDARY_BTN}
                    width = '146px'
                    height = '40px'
                    onClick={handleClose}
                    style = {{marginLeft: 30}}
                  >
                    <span className='font13-700'>Save</span>
                </ColorButton>
            </div>
          </div>
      </BootstrapDialog>
    </div>
    
  );
}

export default BasicInfoCard;
