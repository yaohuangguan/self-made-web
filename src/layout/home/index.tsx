import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "blue",
    height:'100%'
  },
});

const WithHomeLayout = (props) => {
  
  const { children } = props;
  const classes = useStyles(props);

  return <Container  classes={classes}>{children}</Container>;
};

export default WithHomeLayout;
