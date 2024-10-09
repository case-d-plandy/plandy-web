import { Link } from "react-router-dom";

import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";

import { StyledMessageBox } from "./MessageBox.styles";

function MessageBox() {
  return (
    <StyledMessageBox>
      <Icon name="NoteBold" width={100} height={100} />
      <Typography variant="headline" fontWeight={700}>
        Not Found
      </Typography>
      <Link to="/">
        <Button variant="text" startIcon={<Icon name="HomeBold" />}>
          Go home
        </Button>
      </Link>
    </StyledMessageBox>
  );
}

export default MessageBox;
