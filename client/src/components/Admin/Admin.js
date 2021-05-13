import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import Posts from '../Posts/Post/Post';
import {Card} from 'react-bootstrap'
import Form from '../Form/Form';
import RefreshIcon from '@material-ui/icons/Refresh';
import './Css.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { deletePost } from '../../actions/posts.js';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TablePagination from '@material-ui/core/TablePagination';
import moment from 'moment';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { TableCell , TableHead, Table, Paper, TableContainer, TableRow , TableBody, IconButton ,DialogTitle , Dialog , Button , Slide ,DialogContent , DialogContentText , DialogActions  } from '@material-ui/core/';
const AdminStorage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [StorageisVisible ,StorageSetIsVisible] = useState(true);
  const [EditFormisVisible ,EditFormSetIsVisible] = useState(false);
  const [AlretisVisible , AlretSetIsVisible] = useState(false);
  const [itemName, setItemName] = useState("");
  const [alret, setalret] = useState("");
  const classes = useStyles();
  useEffect(() => {
    if (currentId === 0) {
      StorageSetIsVisible(true)
      EditFormSetIsVisible(false)
    }
    else {   
     
      StorageSetIsVisible(false)
      EditFormSetIsVisible(true)
       }
    var userName = user?.result.name;
    if(userName !==  "SweetVibes Admin"){
      history.push("/home");

    }
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [pressed , setPressed] = React.useState(false);
    useEffect(() => {
      window.onpopstate = () => {
        setPressed(true)
        history.push('/storage')
      }
    })
  
   
  
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
  
 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      
      },

    },
  }))(TableRow);
  const homeIcon =() => {
    if (EditFormisVisible === true) {
      StorageSetIsVisible(true)
      EditFormSetIsVisible(false)
    }
  }
  const refreshIcon = () => {
    window.location.reload(true);
  }
  const addicon = () => {
    if (currentId !== 0) {
      setCurrentId(0);
    
      StorageSetIsVisible(false)
      EditFormSetIsVisible(true)
     
    }else if(currentId === 0) {
      StorageSetIsVisible(false)
      EditFormSetIsVisible(true)
    }
  }
  const hideForm = () => {
    StorageSetIsVisible(true)
    EditFormSetIsVisible(false)

  }
  const AlretDelete = () => {
    setItemName("Product Deleted Successfully");
    setalret("info")
    window.scrollTo(0, 0)
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  const AlretEdit = () => {
    setItemName("Product Saved Successfully");
    setalret("info")
    window.scrollTo(0, 0)
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  const AlretCreated = () => {
    setItemName("Product Created Successfully");
    setalret("info")
    window.scrollTo(0, 0)
    AlretSetIsVisible(true)
    setTimeout(function(){

      AlretSetIsVisible(false)
    }, 1500);
  }
  return (
    !posts.length ? 
    <div>
       <Container >
   <Card className={classes.fetchingdata} >
  <Card.Body className="text-center" >
    <Card.Title>Fetcing your data ..</Card.Title>
    <CircularProgress disableShrink className={classes.CircularProgress}/>;
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
