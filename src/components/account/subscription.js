import React, { useState } from 'react';
import { ReactComponent as EditIcon } from '../../images/account/edit.svg';
import { ReactComponent as PlusIcon } from '../../images/account/plus.svg';
import { ReactComponent as CardIcon } from '../../images/account/card.svg';
import { makeStyles, withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as PlanIcon } from '../../images/account/plan.svg';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import OutlinedInput from '@mui/material/OutlinedInput';
import { BG_COLOR_WHITE, BG_COLOR_BOUNDARY_BTN, BG_COLOR_BULE_LITTLE, BG_COLOR_WARNING } from '../../constant';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '302px !important',
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

  description: {
    color: '#7A7A7A',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },

  txt: {
      marginLeft: 19,
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

const editCardDialog = {
    title: 'Edit Card Information',
    cardNumber: 'Card number',
    expiryDate: 'Expiry Date',
    nameOnCard: 'Name on Card',
}

function Subscription({siteInfo}) {
  const classes = useStyles();

  const [cardNumber, setCardNumber] = useState('');
  const [empiryDate, setEmpiryDate] = useState('');
  const [cardName, setCardName] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCardNumber = (event) => {
    setCardNumber(event.target.value);
  }

  const handleEmpiryDate = (event) => {
    setEmpiryDate(event.target.value);
  }

  const handleCardName = (event) => {
    setCardName(event.target.value);
  }

  const editCardInfo = (event) => {
    handleClickOpen(event);
  }

  const changePassword = (event) => {
    handleClickOpen(event);
  }

  const cardBody = (
  <>
    <div style={{marginTop: 35}}>
        <span className={`${classes.contentTxt} font13-400`}>{editCardDialog.cardNumber}</span>
        <OutlinedInput className = {classes.input} value={cardNumber} onChange={handleCardNumber} />
    </div>
    <div style={{marginTop: 24}}>
        <span className={`${classes.contentTxt} font13-400`}>{editCardDialog.expiryDate}</span>
        <OutlinedInput className = {classes.input} value={empiryDate} onChange={handleEmpiryDate} />
    </div>
    <div style={{marginTop: 24}}>
        <span className={`${classes.contentTxt} font13-400`}>{editCardDialog.nameOnCard}</span>
        <OutlinedInput className = {classes.input} value={cardName} onChange={handleCardName} />
    </div>
  </>
  );

  return (
    <div className={classes.root}>
      <div className = {classes.column}>
        <div className='font22-700'>Subscription plan</div>
        <div className={classes.item}>
            <div className={`${classes.description} font11-400`}>Current Plan</div>
            <div className={classes.row}>
                <PlanIcon />
                <span className={`${classes.txt} font13-700`}>Gold Membership</span>
            </div>
            <ColorButton 
              style = {{position: 'absolute', top: 0, right: 0}} 
              brcolor = {BG_COLOR_WHITE}
              bgcolor = {BG_COLOR_WHITE}
              txtcolor = {BG_COLOR_BOUNDARY_BTN}
              hrcolor = {BG_COLOR_BULE_LITTLE}
              width = '155px'
              height = '35px'
            >
              <EditIcon style = {{marginRight: 14}} /><span className='font13-900'>Change Plan</span>
            </ColorButton>
        </div>

        <div className={classes.item}>
            <div className={`${classes.description} font11-400`}>Card Info</div>
            <div className={classes.row}>
                <CardIcon />
                <span className={`${classes.txt} font13-700`}>****  -  ****  -  ****  -  2147</span>
            </div>
            <ColorButton 
              style = {{position: 'absolute', top: 0, right: 0}} 
              brcolor = {BG_COLOR_WHITE}
              bgcolor = {BG_COLOR_WHITE}
              txtcolor = {BG_COLOR_BOUNDARY_BTN}
              hrcolor = {BG_COLOR_BULE_LITTLE}
              width = '155px'
              height = '35px'
              onClick={editCardInfo}
            >
              <EditIcon style = {{marginRight: 14}} /><span className='font13-900'>Edit Card Info</span>
            </ColorButton>
        </div>
        <div className={classes.row}>
            <ColorButton 
                brcolor = {BG_COLOR_WHITE}
                bgcolor = {BG_COLOR_WHITE}
                txtcolor = {BG_COLOR_BOUNDARY_BTN}
                hrcolor = {BG_COLOR_BULE_LITTLE}
                width = '245px'
                height = '35px'
                onClick={changePassword}
            >
              <PlusIcon style = {{marginRight: 14}} /><span className='font13-900'>Add New Payment Method</span>
            </ColorButton>
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
                <span className='font18-700'>
                    {editCardDialog.title}
                </span>
            </div>
          </div>
          <div className={classes.dialogContainer}>
            {cardBody}
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

export default Subscription;
