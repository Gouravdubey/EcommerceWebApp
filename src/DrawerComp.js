import React, { Component } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
export class DrawerComp extends Component {

    constructor() {
        super()
        this.state = {
            openDrawer: false
        }
    }
    render() {
        return (
            <>
                <Drawer open={this.state.openDrawer} onClose={() => this.setState({ openDrawer: false })} >
                    <List>
                        <ListItemButton>
                        <InventoryIcon sx={{marginRight:"10px"}}/>
                            <ListItemIcon>
                                <ListItemText>
                                    Product
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <MiscellaneousServicesIcon sx={{marginRight:"10px"}}/>
                            <ListItemIcon>
                                <ListItemText>
                                    Service
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                        <ContactPageIcon sx={{marginRight:"10px"}}/>
                            <ListItemIcon>
                                <ListItemText>
                                    Contact
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                        <InfoIcon sx={{marginRight:"10px"}}/>
                            <ListItemIcon>
                                <ListItemText>
                                    AboutUs
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Drawer>
                <IconButton onClick={() => this.setState({ openDrawer: !this.state.openDrawer })}>
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>
            </>
        )
    }
}

export default DrawerComp