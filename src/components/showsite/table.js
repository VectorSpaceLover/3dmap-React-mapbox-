import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { ReactComponent as OnlineIcon } from '../../images/table/online.svg';
import { ReactComponent as OfflineIcon } from '../../images/table/offline.svg';
import { ReactComponent as CalendarIcon } from '../../images/table/calendar.svg';
import { 
  CLICK_ATTENDENCE_DAILY, 
  CLICK_ATTENDENCE_LIVE, 
  CLICK_ATTENDENCE_HISTORY,
  BG_COLOR_BLACK, 
} from '../../constant';
import SearchBox from '../searchbox';
import { makeStyles, withStyles } from '@mui/styles';
import { ReactComponent as ArrowIcon } from '../../images/table/arrow.svg';
import { ReactComponent as PushIcon } from '../../images/table/push.svg';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';

import '../../css/style.css';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

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

const useStyles = makeStyles({
    tableHeader: {
       height: 46,
       backgroundColor: '#FAFAFA',
       border: 'none',
    },
    tableRow: {
        height: 65,
        textAlign: 'center',  
    },
    name: {
        color: '#1875F0',
        marginLeft: 27,
    },
    company: {
        color: '#33323D',
    },
    normal: {
        color: '#33323D',
    },

    avatar: {
        borderRadius: 27.5,
        width: 30, 
        objectFit: 'cover'
    },

    searchbar: {
      backgroundColor: '#FAFAFA',
      height: 46,
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid #DDE4EE',
    },

    sortbtn: {
      marginTop: 10,
      marginLeft: 10,
    },

 });

function createData(imageId, name, company, worker, inducted, daily, timein, timeout, hours) {
  return {
    imageId,
    name,
    company,
    worker,
    inducted,
    daily,
    timein,
    timeout,
    hours
  };
}

const headCells = [
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'company',
      label: 'Company Name',
    },
    {
      id: 'worker',
      label: 'Worker/Visitor',
    },
    {
      id: 'inducted',
      label: 'Inducted',
    },
    {
      id: 'daily',
      label: 'Daily Prestart',
    },
    {
        id: 'timein',
        label: 'Time-In'
    },
    {
        id: 'timeout',
        label: 'Time-Out'
    },
    {
        id: 'hours',
        label: 'Hours On Site'
    },
  ];
  
const rows = [
  createData('1', 'Jane Cooper1', 'CPB Contractors', 'Worker', true, true, '09:30 AM', '6:10PM', '08:30'),
  createData('2', 'Jane Cooper2', 'CPB Contractors', 'Worker', true, false, '09:30 AM', '6:10PM', '08:30'),
  createData('3', 'Jane Cooper3', 'CPB Contractors', 'Worker', true, true, '09:30 AM', '6:10PM', '08:30'),
  createData('4', 'Jane Cooper4', 'CPB Contractors', 'Worker', false, true, '09:30 AM', '6:10PM', '08:30'),
  createData('5', 'Jane Cooper5', 'CPB Contractors', 'Worker', true, true, '09:30 AM', '6:10PM', '08:30'),
  createData('1', 'Jane Cooper6', 'CPB Contractors', 'Worker', true, true, '09:30 AM', '6:10PM', '08:30'),
  createData('3', 'Jane Cooper7', 'CPB Contractors', 'Worker', false, true, '09:30 AM', '6:10PM', '08:30'),
  createData('4', 'Jane Cooper8', 'CPB Contractors', 'Worker', true, true, '09:30 AM', '6:10PM', '08:30'),
  createData('5', 'Jane Cooper9', 'CPB Contractors', 'Worker', true, false, '09:30 AM', '6:10PM', '08:30'),
  createData('2', 'Jane Cooper10', 'CPB Contractors', 'Worker', true, true, '09:30 AM', '6:10PM', '08:30'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort, clickedItem} =
        props;

    const classes = useStyles();

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

  return (
    <TableHead className={classes.tableHeader}>
      <TableRow>
        {headCells.map((headCell, index) => {
          if(clickedItem === CLICK_ATTENDENCE_LIVE){
            if(index > 4)
              return <></>
          }
          if(clickedItem === CLICK_ATTENDENCE_DAILY){
            if(index > 6)
              return <></>
          }
          return(
              <TableCell
                key={headCell.id}
                align={'center'}
                // padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                  className = 'font12-500'
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchbar}>
      <SearchBox />
    </div>
  )
}

export default function EnhancedTable({clickedItem}) {
    const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const sortItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [date, setDate] = React.useState(new Date());

  return (
    <>
      {clickedItem === CLICK_ATTENDENCE_HISTORY?(
        <div style = {{display: 'flex', flexDirection: 'row', position: 'relative'}}>
          <SearchBar></SearchBar>
          <ColorButton 
              brcolor = '#FAFAFA'
              bgcolor = '#FAFAFA'
              txtcolor = {BG_COLOR_BLACK}
              hrcolor = '#FAFAFA'
              width = '140px'
              height = '35px'
              className = {classes.sortbtn}
              onClick = {sortItem}
            >
              <span className='font12-500'>Sort By</span><KeyboardArrowDownIcon style = {{color: '#7A7A7A', marginLeft: 22}}/>
          </ColorButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <span className='font12-400'>Name</span>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <span className='font12-400'>Company Name</span>
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <span className='font12-400'>Worker/Visitor</span>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <span className='font12-400'>Time-In</span>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <span className='font12-400'>Time-Out</span>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <span className='font12-400'>Hours On Site</span>
            </MenuItem>
          </StyledMenu>
          <LocalizationProvider 
            dateAdapter={AdapterDateFns}
          >
            <DesktopDatePicker
              label="Custom input"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 52, top: 10}}>
                  {InputProps?.endAdornment}
                  <span className='font12-700' ref={inputRef} style = {{marginLeft: 15}}>{inputProps.value}</span>
                  <KeyboardArrowDownIcon style = {{ marginLeft: 22}}/>
                </Box>
              )}
            />
          </LocalizationProvider>
        </div>):
      <></>}
      
            
      <Box sx={{ width: '100%', boxShadow: 'none', border: 'none', overflow: 'auto'}}>
        <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none', border: 'none'}}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                clickedItem = {clickedItem}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                  rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        className={classes.tableRow}
                      >
                          <TableCell align="left">
                              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 28}}>
                                  <img src = {`/avatars/${row.imageId}.png`} alt='avatar' className={classes.avatar}/>
                                  <span className={`${classes.name} font12-900`}>{row.name}</span>
                              </div>
                          </TableCell>
                          <TableCell align="center"><span className={`${classes.company} font12-900`}>{row.company}</span></TableCell>
                          <TableCell align="center"><span className='font12-400'>{row.worker}</span></TableCell>
                          <TableCell align="center">{row.inducted?<OnlineIcon/>:<OfflineIcon/>}</TableCell>
                          <TableCell align="center">{row.daily?<OnlineIcon/>:<OfflineIcon/>}</TableCell>
                          {(clickedItem === CLICK_ATTENDENCE_DAILY || clickedItem === CLICK_ATTENDENCE_HISTORY)?(
                            <>
                              <TableCell align="center"><span className={`${classes.normal} font12-400`}>{row.timein}</span></TableCell>
                              <TableCell align="center"><span className={`${classes.normal} font12-400`}>{row.timeout}</span></TableCell>
                            </>):(<></>)}
                          {(clickedItem === CLICK_ATTENDENCE_HISTORY)?(<TableCell align="center"><span className={`${classes.normal} font12-400`}>{row.hours}</span></TableCell>):(<></>)}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            classes={{
              toolbar: 'font12-400',
              caption: 'font12-400'
            }}
            rowsPerPageOptions={[25, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <div style = {{position: 'absolute', bottom: 40, right: 75, display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
          <IconButton color="primary" aria-label="add to shopping cart">
            <ArrowIcon style = {{width: 45, height: 45}} />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <PushIcon style = {{width: 45, height: 45}}/>
          </IconButton>
        </div>
      </Box>
    </>
  );
}