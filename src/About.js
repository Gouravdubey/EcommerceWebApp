import React, { Component } from 'react'
import './About.css'
import { Container, Grid } from '@mui/material'
export class About extends Component {
  render() {
    return (
      <div >
        <Container style={{}}>

          <Grid style={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
            <h1> AboutUs</h1>
          </Grid>
          <Grid className='aboutContainer'>
            <Grid>
              <img src='https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?b=1&s=612x612&w=0&k=20&c=fIXz-Nx5jSFo6g17QAMnmDnCYDxbCT21kU10RZO1k1E=' width={'400px'} height={'500px'} style={{ marginRight: "40px", borderRadius: '100px' }} />
            </Grid>

            <Grid>
              <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit porro voluptas nam soluta, quia magnam architecto deserunt cumque corrupti modi qui aperiam sit maiores a dolor perspiciatis, voluptatem facere illum ullam dolores? Odit quisquam nulla, quam quo fugiat numquam quos, optio asperiores impedit alias non esse, nihil reiciendis rerum temporibus rem ratione similique dolores assumenda cum aut nobis accusamus. Eos consectetur facere dolor eum in, vitae doloremque aut recusandae dolore? Expedita porro tempore rem mollitia incidunt rerum dolore repellendus nesciunt neque? Doloremque quibusdam consequuntur, sequi harum maiores alias doloribus voluptatem neque reiciendis in atque odit necessitatibus nesciunt ratione illo!</p>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default About