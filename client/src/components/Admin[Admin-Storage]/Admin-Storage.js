import React, { useState, useEffect } from 'react';
import {Container, Grow , TablePagination , TableCell , TableHead, Table, Paper, TableContainer, TableRow , TableBody, IconButton ,DialogTitle , Dialog , Button , Slide ,DialogContent , DialogContentText , DialogActions  } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import {Card} from 'react-bootstrap';
import Form from '../Admin[Add-Edit Products]/Admin-Storage-Edit&Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import './Css.css';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
//**********************************All*Importing*Imports*******************************************************//
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
//**********************************All**Material**Styles*******************************************************//
const AdminStorage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // getting the user information
  const posts = useSelector((state) => state.posts); // getting the products from state
  const [currentId, setCurrentId] = useState(0); // getting the current id
  const dispatch = useDispatch(); // using dispatch for actions
  const history = useHistory(); // for using url and pushing user
  const [StorageisVisible ,StorageSetIsVisible] = useState(true); // for products storage
  const [EditFormisVisible ,EditFormSetIsVisible] = useState(false); // for editing the products storage form
  const [AlretisVisible , AlretSetIsVisible] = useState(false); // for alret
  const [itemName, setItemName] = useState(""); // for the label in the arlet
  const [alret, setalret] = useState(""); // for the type alret
  const classes = useStyles(); // for the material style
  var userName = user?.result.name; // getting the username
  const [open, setOpen] = React.useState(false); // for the delete confirmation dialog
  const [pressed , setPressed] = React.useState(false); // for back button
  const [page, setPage] = React.useState(0); // for the page table
  const [rowsPerPage, setRowsPerPage] = React.useState(6); // for the rows in the tabel
  useEffect(() => {
    if (currentId === 0) { // checking if there a product selected to be edited so if no
      StorageSetIsVisible(true); // it will show the products
      EditFormSetIsVisible(false); // it will hide the editing form 
    }
    else {   // if there is an id after the admin choosed product to edit
      StorageSetIsVisible(false); // will will hide the products form
      EditFormSetIsVisible(true); // and it will show the edit form
    }
    if(userName !==  "SweetVibes Admin"){ // if user tryied to enter with the url and he is not admin
      history.push("/home"); // it will kick him
    } 
    dispatch(getPosts()); // it will using action to get all the porducts
    }, [currentId, dispatch]); // and getting it with the id

  const Transition = React.forwardRef(function Transition(props, ref) { // for the tabel
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  
    const handleClickOpen = () => { // to open the delete dialog 
      setOpen(true); // it will show it
    };
  
    const handleClose = () => { // to hide the delete dialog
      setOpen(false); // will close it
    };
  
    useEffect(() => { // runing the code for one time
      window.onpopstate = () => { // if the user clicked on the back button 
        setPressed(true); // will tell the varible that the user clicked
        history.push('/storage'); // will back him to smae page
      }
    })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  const columns = [
    { id: 'tools', align: 'center', label: 'Tools', minWidth: 100},
    { id: 'image', align: 'center', label: 'Product Image', minWidth: 170 , maxWidth: 200},
    { id: 'id', align: 'center', label: 'Product ID' },
    {
      id: 'title',
      label: 'Product Title',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'detials',
      label: 'Product Detials',
      maxWidth: 120,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'price',
      label: 'Product Price',
      minWidth: 150,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'createdby',
      label: 'Created By',
      minWidth: 150,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'createdat',
      label: 'Created At',
      minWidth: 180,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    
  ];
 ///////////////////////////////////////////// for the columns into the label////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#A87DAB',
     
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      
      },

    },
  }))(TableRow);
  ////////////////////////////////////////////////// for the tabled to style it///////////////////////////
  const handleChangePage = (event, newPage) => { // if the user want to change the page so it will set a new page in varible
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => { // for the rows
    setRowsPerPage(+event.target.value); // it will give how many rows the user want and 
    setPage(0); // and how many to show
  };

  const homeIcon =() => { // home button
    if (EditFormisVisible === true) { // it will check if the user in the edit form and want to back
      StorageSetIsVisible(true); // so it will show the products storage
      EditFormSetIsVisible(false); // will hide the edit form
    }
  }

  const refreshIcon = () => { // refresh button
    window.location.reload(true); // will refresh this page
  }

  const addicon = () => { // add product button
    if (currentId !== 0) { // will check if there is no product is selected so if it yes
      setCurrentId(0); // it will make it nothing
      StorageSetIsVisible(false); // and it will hide the product page
      EditFormSetIsVisible(true); // will show the edit form page
    }else if(currentId === 0) { // if there is no product selected so it will
      StorageSetIsVisible(false); // will hide the storage page
      EditFormSetIsVisible(true); // and will show the editing page form
    }
  }

  const hideForm = () => { // after the user done edditing the page
    StorageSetIsVisible(true); // it will show the product page
    EditFormSetIsVisible(false); // will hide the edit form
  }

  const AlretEdit = () => { // if the admin done of editing the product
    setItemName("Product Saved Successfully"); // will set the alret label
    setalret("info"); // will chose the type of the alret
    window.scrollTo(0, 0); // will get the admin to the top of the page
    AlretSetIsVisible(true); // will show the alret 
    setTimeout(function(){ // actving the timer
    AlretSetIsVisible(false); // will hide the alret after a time
    }, 1500);
  }

  const AlretCreated = () => { // if new product has been created 
    setItemName("Product Created Successfully"); // will set the alret label
    setalret("info"); // will chose the type of the alret
    window.scrollTo(0, 0);// will get the admin to the top of the page
    AlretSetIsVisible(true); // will show the alret 
    setTimeout(function(){ // actving the timer
    AlretSetIsVisible(false);// will hide the alret after a time
    }, 1500);
  }
  useEffect(() => { // for back button
    window.onpopstate = () => { // checking if the user has entered the back button
      if(EditFormisVisible === true) // it will check if the edit form is show or not
      history.push('/storage'); // so if it shown it will refresh the page to give all the effects
      EditFormSetIsVisible(false); // and will hide the edit form page
      StorageSetIsVisible(true); // and will show the product page
    }
  })
  return (
    !posts.length ? 
    <div>
       <Container >
   <Card className={classes.fetchingdata} >
  <Card.Body className="text-center" >
    <Card.Title>Fetcing your data ..</Card.Title>
    <CircularProgress disableShrink className={classes.CircularProgress}/>
  </Card.Body>
</Card>
</Container>
    </div> 
    : (
    <Grow in>
    <Container>
    <div className="card text-center">
        
  <div class="card-header">

  <HomeIcon onClick={homeIcon} className="homeIcon"/>
  <RefreshIcon  onClick={refreshIcon} className="refreshIcon" />
  <AddIcon onClick={addicon} className="addIcon" />
  Storage
  </div>
  <div style={{ display: AlretisVisible ? "block" : "none" }}>
  <Alert className="alret" severity={alret} >{itemName}</Alert>
  </div>
  <div class="card-body">
  <div style={{ display: StorageisVisible ? "block" : "none" }}>
  <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table  className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
               
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post) => {
              
              return (
                
                <TableRow hover role="checkbox" tabIndex={-1} key={post._id}>
                    <TableCell component="th" scope="row">
                    <IconButton className={classes.delete} aria-label="Delete" component="span">
                      <DeleteIcon onClick={handleClickOpen}/>
                    </IconButton>
                    <div>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deleting this product?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You are trying to delete a product from your strorage , and you can't undo this action , so are you sure you want that 
          you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          No
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
          Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
                  
                    <IconButton className={classes.edit} aria-label="Edit" component="span">
                      <EditIcon onClick={() => setCurrentId(post._id)} />
                    </IconButton>
                    </TableCell>
                     <TableCell component="th" scope="row">
                      <img className="image" src={post.selectedFile}></img>
                    </TableCell>
                    <TableCell align="left" >{post._id}</TableCell>
                    <StyledTableCell align="center" style={{ width: 160 }} >{post.title}</StyledTableCell>
                    <StyledTableCell align="center">{post.message}</StyledTableCell>
                    <StyledTableCell align="center">{post.tags} ₪</StyledTableCell>
                    <StyledTableCell align="center">{post.name}</StyledTableCell>
                    <StyledTableCell align="center">{moment(post.createdAt).fromNow()}</StyledTableCell>
                     
                      
                  {columns.map((column) => {
                    const value = posts[column.id];
                    
                    return (
                      <TableCell key={column.id} align={column.align}>
  
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                      
                    );
                  })}
                  
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12, 18]}
        component="div"
        count={posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
 </div>
 <div>
   
      
    </div>
 <div style={{ display: EditFormisVisible ? "block" : "none" }}>
 <Form className="editform" currentId={currentId} setCurrentId={setCurrentId} hideForm={hideForm} AlretEdit={AlretEdit} AlretCreated={AlretCreated}/>
 </div>
    
      </div>
  <div class="card-footer text-muted"></div>
</div>
    </Container>
  </Grow>
   )
);
};

export default AdminStorage;
//************************************************************************************************************//
//                                       Admin Storage                                                        //
//                                                                                                            //
// This page for admin storage                                                                                //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//