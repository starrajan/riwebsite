import React from "react";
import { IconCompany, Text, Button, Clientcard } from "./style";

export default function ClientCard(props: any) {
  //@ts-ignore

  const onClickhandler = num => {
    switch (num) {
      case 1:
        return (
          <Button
            onClick={() => {
              window.location.href = "https://www.tradestuff.com/";
            }}
          >
            VISIT SITE
          </Button>
        );

      case 2:
        return (
          <Button
            onClick={() => {
              window.location.href = "https://blockstart.one/#/";
            }}
          >
            VISIT SITE
          </Button>
        );
      case 3:
        return (
          <Button
            onClick={() => {
              window.location.href = "https://equa.global/";
            }}
          >
            VISIT SITE
          </Button>
        );
      case 4:
        return (
          <Button
            onClick={() => {
              window.location.href = "https://equa.global/";
            }}
          >
            VISIT SITE
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Clientcard>
      <IconCompany src={props.iconCompany}></IconCompany>
      <Text>{props.paragraph}</Text>
      {onClickhandler(props.link)}
    </Clientcard>
  );
}
