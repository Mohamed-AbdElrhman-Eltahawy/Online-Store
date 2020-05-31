import React from "react";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";
import items from "./sidebar-items-list";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SidebarListItemGroup from "./list-item-group";
import SidebarItemList from "./list-item";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Sidebar(props) {
  let { classes, onClose, open } = props;
  const theme = useTheme();
  const listItemsClasses = useStyles();

  let listItems = items.map((item, index) => {
    //in this case it will return itemGroup
    if (item.items) {
      return (
        <SidebarListItemGroup
          key={index}
          nestedItemClass={listItemsClasses.nested}
          text={item.text}
          icon={item.icon}
          items={item.items}
        />
      );
    }

    //otherwise it will return listItem
    return (
      <SidebarItemList key={index} text={item.text} icon={item.icon} route={item.route} />
    );
  });

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List component="nav" className={listItemsClasses.root}>
        {listItems}
      </List>
    </Drawer>
  );
}
