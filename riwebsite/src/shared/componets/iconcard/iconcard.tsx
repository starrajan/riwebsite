import React from 'react'
import styled from 'styled-components'
import { Heading, Paragraph } from './styles'
import { Container } from './styles'





const Img = styled.img<any>`

height:30px;

`;

// const CardHeading = styled(Heading)`

// `;

// const CardParagraph = styled(Paragraph)`
// `;


export default function IconCard(props: any) {

    // const rendericon = (num: any) => {

       
    //     switch (num) {

    //         case 1:
    //             return <i className="fas fa-desktop"></i>;

    //         case 2:
    //             return <i className="fas fa-desktop"></i>;

    //         case 3:
    //             return <i className="fas fa-desktop"></i>;
    //         case 4:
    //             return <i className="fas fa-desktop"></i>;
    //         case 5:
    //             return <i className="fas fa-desktop"></i>;
    //         case 6:
    //             return <i className="fas fa-desktop"></i>;

    //         default: return null;
    //     }


    // }
        console.log("size;;---",props);

    return (
        
        <Container border={props.borderId} >


            <Img src={props.iconId} alt="images">
                
            </Img>
            <Heading>{props.heading}</Heading>
            <Paragraph>{props.paragraph}</Paragraph>

        </Container>
        



    )
}