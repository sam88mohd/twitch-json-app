import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import OnlineIndicator from "../OnlineIndicator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" className={classes.title}>
            Twitch Streamer
          </Typography>
          <OnlineIndicator />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
