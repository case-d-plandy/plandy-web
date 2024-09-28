import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import { Link } from "react-router-dom";

import { FagListItem, StyledFagList } from "./FagList.styles";

function FagList() {
  return (
    <StyledFagList>
      <FagListItem>
        <Link to={"/faq/how-to-connect"}>
          <Button variant={"text"} startIcon={<Icon name={"DocumentBold"} />}>
            How to connect an external calendar（iCloud、Google、Outlook）
          </Button>
        </Link>
      </FagListItem>
      <FagListItem>
        <Link to={"/faq/how-to-connect"}>
          <Button variant={"text"} startIcon={<Icon name={"DocumentBold"} />}>
            How to change which calendars to show/hide
          </Button>
        </Link>
      </FagListItem>
      <FagListItem>
        <Link to={"/faq/how-to-connect"}>
          <Button variant={"text"} startIcon={<Icon name={"DocumentBold"} />}>
            How to change the displayed month
          </Button>
        </Link>
      </FagListItem>
    </StyledFagList>
  );
}

export default FagList;
