import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";

import { Copyright, Divider, InfoBox, PolicyButtonGroup, StyledFooter } from "./Footer.styles";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Divider />
        <InfoBox>
          <Copyright>Copyright © 2024 Plan Mate</Copyright>
          <PolicyButtonGroup>
            <Button variant={"text"} size={"small"}>
              Terms
            </Button>
            <Button variant={"text"} size={"small"}>
              Privacy Policy
            </Button>
          </PolicyButtonGroup>
        </InfoBox>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
