// import React from "react";
// import { Link } from "react-router-dom";
// import AdminNavbar from "./AdminNavbar";
// import { Button, Container, Grid, Typography, Paper } from "@mui/material";
// import "../custom.css";

// const Admin = () => {
//   return (
//     <>
//       <AdminNavbar />
//       <Container>
//         <Typography variant="h4" gutterBottom className="admin-title">
//           Admin Dashboard
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper className="dashboard-card" elevation={3}>
//               <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/vendors">
//                 Manage Vendors
//               </Button>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper className="dashboard-card" elevation={3}>
//               <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/venues">
//                 Manage Venues
//               </Button>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper className="dashboard-card" elevation={3}>
//               <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/bookings">
//                 Manage Bookings
//               </Button>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper className="dashboard-card" elevation={3}>
//               <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/clients">
//                 Manage Clients
//               </Button>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Paper className="dashboard-card" elevation={3}>
//               <Button fullWidth variant="contained" color="secondary" component={Link} to="/admin/reports">
//                 Generate Reports
//               </Button>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default Admin;
import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { Button, Container, Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "../custom.css";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #e91e63",
    borderRadius: "10px",
    background: "#fff5f8",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  card: {
    margin: '10px',
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: "20px",
    background: "#e91e63",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    transition: "0.3s",
    display: "inline-block",
    width: "200px",
    height: "200px",
    lineHeight: "160px",
    textAlign: "center",
    '&:hover': {
      background: "#d81b60",
    },
  },
});

const Admin = () => {
  const classes = useStyles();

  return (
    <>
      <AdminNavbar />
      <Container className={classes.root}>
        <Typography variant="h4" gutterBottom className="admin-title">
          Admin Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.card} elevation={3}>
              <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/vendors">
                Manage Vendors
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.card} elevation={3}>
              <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/venues">
                Manage Venues
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.card} elevation={3}>
              <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/bookings">
                Manage Bookings
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.card} elevation={3}>
              <Button fullWidth variant="contained" color="primary" component={Link} to="/admin/clients">
                Manage Clients
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.card} elevation={3}>
              <Button fullWidth variant="contained" color="secondary" component={Link} to="/admin/reports">
                Generate Reports
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Admin;