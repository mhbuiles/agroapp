import React, { Component} from 'react'

import styled from 'styled-components'

const HomeImg = styled.img`
    width: 100%;
`


function Home(){

    return(
        <div>             
            <HomeImg src="https://i.pinimg.com/originals/49/f5/7f/49f57fc1113ac2cae9322f64cc5ad38a.jpg"></HomeImg>
        </div>
    )

}

export default Home