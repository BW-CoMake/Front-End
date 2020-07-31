import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

import { getIssues, upVote, downVote } from "../actions";
import Issue from './Issue';
import AddIssue from './AddIssue';


const useStyles = makeStyles(theme => ({

  root: {

    maxWidth: "65vw",
    width: "65vw",
    marginTop: 20,
  },
  // nava: {
  //     height: "150px",

  // },
  // navBar: {
  //     backgroundColor: "coBlue",
  //     color: "coTeal",
  //     marginBottom: "100px",
  //     height: "100%"
  // },
  card: {
    maxWidth: "65vw",

    width: "65vw",
    margin: "10px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  divider: {
    margin: `px 0`,
    padding: "0px 20 0 20"
  },
}));



const Dashboard =
  ({ history, getIssues, issues, upVote, downVote, issue_id, id}) => {

    const [user_id, setUser_id] = useState(localStorage.getItem("id"));
  console.log(issues)


    const classes = useStyles();

  
    // const [collapsed, setCollapsed] = useState(true);
    // const toggleNavbar = () => setCollapsed(!collapsed);


    useEffect(() => {
      getIssues()
    }, [getIssues])

    return (
      <Grid container>
        {/* <Grid item container>
          <Grid item>
            <Typography variant="subtitle1">
              <Link onClick={() => history.push('/issues')}>Add an Issue</Link>
            </Typography>
          </Grid>
        </Grid> */}
        {/* <div className={classes.nava}>
          <Navbar className={classes.navBar}>
            <NavbarBrand href="/" fontWeight="bold" className="mr-auto">
              Comake
            </NavbarBrand>
            <NavbarToggler
              backgroundColor="white"
              onClick={toggleNavbar}
              className="mr-2"
            />
            <Collapse isOpen={!collapsed}>
              <Nav className={classes.navbar}>
                <NavItem>
                  <NavLink onClick={() => history.push("/issues")}>
                    Add an Issue
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => history.push("/issues")}>
                    My Issues
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Log Out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div> */}
        <AddIssue />
        {issues ? (
         issues.map(issue => (
          
            <Card className={classes.card} key={Math.random()}>
              <CardContent>
                <Typography
                  size="large"
                  gutterBottom
                  variant="h3"
                >
                  <Link to={`/issues/${issue.id}`}>{issue.issue}</Link>
                </Typography>
                <Typography className="description">{issue.description}</Typography>
                <Typography className="centerText">
                  <div className="displayFlex">
                    <div>Votes </div>
                    <div className="DecorateVoteNum">{issue.vote}</div>
                  </div>
                </Typography>
              </CardContent>
              <Divider className={classes.divider} light />
              <CardActions className="cActions">
                <div className="flex-row">
                  <div>
                    <Button
                      size="small"
                      color="primary"
                      // id={issue.id}
                      onClick={() => upVote(issue.id, user_id)}
                    >
                      UpVote
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => downVote(issue.id, issue)}
                    >
                      DownVote
                    </Button>
                  </div>
                  <div className="flex-row2">
                    <Typography>Zip: {issue.zipCode}</Typography>
                  </div>
                </div>
              </CardActions>
            </Card>
          ))
        ) : (
            <p>loading</p>
          )}
      </Grid>
    );
  }

const mapStateToProps = (state) => {
  return {
    ...state, issues: state.issues
  }
}

export default connect(mapStateToProps, { getIssues, upVote, downVote })(Dashboard)