import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 130px;
    height: 130px;
    object-fit: cover;
    
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 10px auto;
`
const Info = styled.h3`
    font-size: 20px;
`
const Smallcont = styled.div`
    margin: 0 20px;
`

function ProductBuyer({ product }){
    return(
        <Container>
            <Smallcont>
                <Image src={product.image}></Image>
            </Smallcont>
            <Smallcont>
                <Info>{product.name}</Info>
                <Info>{product.price}</Info>
                <Info>{product.location}</Info>
            </Smallcont>
        </Container>
    );
}

export default ProductBuyer