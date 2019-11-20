import React from 'react'
import styled from 'styled-components'
import {Heading,Paragraph} from './styles'
import {Container} from './styles'



const ImageDiv=styled.div<any>`
width:100px;
height:100px;

background-image:${props=>(props.image) ? `url(${props.image});`:null};
background-size:100% 100%;


`;

const CardHeading=styled(Heading)`

`;

const CardParagraph=styled(Paragraph)`
`;


export function ImageCard(props:any){

    console.log('hhhh---->',props);


    return(
        <Container border={props.borderId}>
            <ImageDiv image={props.imageid}></ImageDiv>
            <CardHeading>{props.heading}</CardHeading>
            <CardParagraph>{props.paragraph}</CardParagraph>

        </Container>



    )
}