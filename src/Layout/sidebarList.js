import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import InputIcon from '@mui/icons-material/Input';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PropTypes from "prop-types";

//Material UI's ListItemLink
function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export const MainList = (
    <div>
        <List aria-label="main mailbox folders">
            <ListItemLink to="recipes" primary="Recipes" icon={<ReceiptIcon />} />
            <ListItemLink to="rother" primary="Customize" icon={<InputIcon />} />
        </List>
    </div>
);