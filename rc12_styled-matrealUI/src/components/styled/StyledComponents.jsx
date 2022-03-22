import React from "react";
import { Button, TomatoButton } from "./ButtonStyled";
import { Wrapper } from "./Wrapper";
import StyledText from "./HeaderText";
import Link, { ExtendedLink } from "./Link";

const StyledComponents = () => {
  return (
    <Wrapper bgColor="gray">
      <StyledText>STYLED COMPONENTS</StyledText>
      <Button>Click</Button>
      <Button primary>Click</Button>
      <TomatoButton>Click</TomatoButton>
      <TomatoButton primary>Click</TomatoButton>
      <Link href="https://clarusway.com/">Clarusway</Link>
      <Link secondary href="https://clarusway.com/">
        Clarusway
      </Link>
      <ExtendedLink href="https://styled-components.com/" target="_blank">
        Styled Link
      </ExtendedLink>
    </Wrapper>
  );
};

export default StyledComponents;
