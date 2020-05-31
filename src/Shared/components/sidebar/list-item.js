import React from "react";
import PropTypes from "prop-types";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

export default function SidebarItemList(props) {
  let { text, icon, route, nestedItemClass } = props;
  return (
    <ListItem className={nestedItemClass} component={Link} to={route} button>
      <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

SidebarItemList.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  //icon: PropTypes.node.isRequired,
  nestedItemClass: PropTypes.string,
}