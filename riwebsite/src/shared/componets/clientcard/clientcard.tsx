import React from "react";
import { IconCompany, Paragraph, Button, ClientContainer } from "./styles";

export default function ClientCard(props: any) {
  return (
    <ClientContainer>
      <IconCompany src={props.iconCompany}></IconCompany>
      <Paragraph>{props.paragraph}</Paragraph>
      <Button>VISIT SITE</Button>
    </ClientContainer>
  );
}
