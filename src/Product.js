import React, { Component } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import { AccessTime } from '@mui/icons-material'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Link ,useNavigation} from 'react-router-dom';
const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },

            ]
        }
    }
})
export class Product extends Component {
    constructor() {
        super()
        this.state = {
            productData: [
                {
                    id: "1",
                    inStock: 10,
                    name: "Jeans",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsjNdQMhZGq1ezJRekXK4MEb6XYN4CFZcyXrlc78&s",
                    Rating: 2,
                    Price: 1399,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "2",
                    inStock: 1,
                    name: "Shirt",
                    image: "https://media.istockphoto.com/id/498852901/photo/red-plaid-shirt.jpg?s=612x612&w=0&k=20&c=FN0dBgzq0_GDJo5fKwRyM-QDz37TUVxAGKK4o3TSLnI=",
                    Rating: 5,
                    Price: 499,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "3",
                    inStock: 16,
                    name: 'Laptop',
                    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg",
                    Rating: 3.5,
                    Price: 59800,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "4",
                    inStock: 3,
                    name: "Ghee",
                    image: "https://patankarfarmproducts.com/wp-content/uploads/2020/08/500-ml-ghee.jpg",
                    Rating: 2,
                    Price: 699,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "5",
                    inStock: 34,
                    name: 'Shoes',
                    image: "https://www.jiomart.com/images/product/500x630/rvnezaqnsd/bruton-running-shoes-for-men-product-images-rvnezaqnsd-0-202206141815.jpg",
                    Rating: 4.5,
                    Price: 1579,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "6",
                    inStock: 10,
                    name: "Earphone",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eT_rx0-36stQ0fuAV9fSpjhrJnLbpu6ecg&usqp=CAU",
                    Rating: 2.5,
                    Price: 665,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "7",
                    inStock: 34,
                    name: "Refrigerator",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBGZPjAEBh7i9FebCBtLlJxPpapyYH9RRCQ&usqp=CAU",
                    Rating: 1.5,
                    Price: 13371,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "8",
                    inStock: 40,
                    name: "Bottle",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZsp5bCuITyTNQ6R-lM5eRAkyE_NnwlsI_Q&usqp=CAU",
                    Rating: 5,
                    Price: 199,
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
                {
                    id: "9",
                    inStock: 78,
                    name: "TV",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjS00hdJwRLfbMK1k5fUaDe_fk3SqK5ROOyg&usqp=CAU",
                    Rating: 5,
                    Price: 'Nahi Btaunga',
                    Content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, exercitationem."
                },
            ]
        }
    }


    render() {

        return (
            <div>
                <Container sx={{ marginTop: '50px', }}>
                    <Grid container spacing={5} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {this.state.productData.map((e, i) =>
                            <Grid item xs={8} md={5} lg={4} xl={4} sm={7}>
                                <ThemeProvider theme={theme}>
                                    <Paper elevation={6} >
                                        <Box >
                                            <img src={e.image}
                                                className='img' height="400px" width='100%' style={{}} />
                                        </Box>
                                        <Box paddingX={1}>
                                            <Typography variant='subtitle1 ' component='h2'>
                                                {e.name}
                                            </Typography>
                                            <Grid
                                                container
                                                marginTop={3}
                                                alignItems={'center'}
                                            >
                                                {/* <AccessTime sx={{ width: 12.5 }} /> */}
                                                <Typography variant='body2' component='p' marginLeft={0.5}>
                                                    {e.Content}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                container
                                                marginTop={3}
                                            >
                                                <Rating name='read-only' value={e.Rating} readOnly precision={.5} size='small' />
                                                <Typography variant='body2' component='p' marginLeft={0.5}>
                                                </Typography>
                                                <Typography variant='body2' component='p' marginLeft={0.5}>
                                                    ({e.Rating} reviews)
                                                </Typography>
                                            </Grid>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}>
                                                <Typography variant='h6' component='h3' marginTop={0}>
                                                    {e.Price} Rs
                                                </Typography>
                                                {/* <Button variant="contained" size="medium" >
                                                    Buy Now
                                                </Button> */}
                                                <Cbutton component={Link} to={`/details/${e}`}>buy Now</Cbutton>
                                                {/* <Link to='/details'>dsjbhc</Link> */}
                                            </Box>
                                        </Box>
                                    </Paper>
                                </ThemeProvider>
                            </Grid>
                        )
                        }
                    </Grid>
                </Container>
            </div>
        )
    }
}

const Cbutton = styled(Button)({
    border: '1px solid #000FF7',
    '&:hover': {
        border: '0',
        color: '#fff',
        backgroundColor: '#000ff7'
    }
})

export default Product