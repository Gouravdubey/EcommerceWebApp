import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom'
import DrawerComp from './DrawerComp';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export class Home extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
        }
    }
    render() {
        return (
            <>
                {/* <Box> */}
                    <AppBar sx={{ background: "black", position: 'sticky',  }}>
                        <Box >
                            <Toolbar >
                                <Box sx={{ display: { xs: "block", md: "none" } }}>
                                    <DrawerComp />
                                </Box>
                                <Box sx={{ display: { xs: "none", md: "block" } }}>
                                    <ShoppingCartCheckoutIcon />
                                </Box>
                                <Box sx={{ display: "flex", width: "80%", justifyContent: "space-between" }}>
                                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                        <Tabs textColor='inherit' value={this.state.value} onChange={(e, val) => this.setState({ value: val })} indicatorColor='secondary'>
                                            <Tab component={Link} to="/product" label='products' />
                                            <Tab component={Link} to="/services" label='Services' />
                                            <Tab component={Link} to="/contact" label='ContactUs' />
                                            <Tab component={Link} to="/about" label='AboutUs' />
                                        </Tabs>
                                    </Box>
                                    <Box sx={{ display: "flex", }}>
                                        <Search sx={{ height: "40px" }}>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                    </Box>
                                </Box>
                                <Button sx={{ marginLeft: "auto" }} variant='contained'>Login</Button>
                                <Button sx={{ marginLeft: "10px" }} variant='contained'>SignUp</Button>
                            </Toolbar>
                        </Box>
                    </AppBar>
                {/* </Box> */}
            </>
        )
    }
}

export default Home