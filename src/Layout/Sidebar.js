import * as React from 'react';
import { MainList } from './sidebarList';
import {Divider, Drawer, IconButton, List} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Sidebar = ({ open, toggleDrawer }) => {
    // const classes = LayoutStyles();
    // console.log(open, toggleDrawer)
    return (
        <>
            <Drawer
                variant="permanent"
                // classes={{
                //   paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                // }}
                open={open}
            >
                <div
                    // className={classes.toolbarIcon}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                {/* List isi sidebar ada di komponen sidebarList*/}
                <List>{MainList}</List>
            </Drawer>
        </>
    );
};
export default Sidebar;
