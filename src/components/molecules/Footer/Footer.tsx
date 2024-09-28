import Button from "@components/atoms/Button";
import Container from "@components/atoms/Container";
import { Link } from "react-router-dom";

import { Copyright, Divider, InfoBox, PolicyButtonGroup, StyledFooter } from "./Footer.styles";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Divider />
        <InfoBox>
          <Copyright>Copyright © {new Date().getFullYear()} Plan Mate</Copyright>
          <PolicyButtonGroup>
            <Link to={"/terms"}>
              <Button variant={"text"} size={"small"}>
                Terms of service
              </Button>
            </Link>
            <Link to={"/privacy"}>
              <Button variant={"text"} size={"small"}>
                Privacy policy
              </Button>
            </Link>
          </PolicyButtonGroup>
        </InfoBox>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
