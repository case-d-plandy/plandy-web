import { Link } from "react-router-dom";

import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";

import { GuideListItem, StyledGuideList } from "./GuideList.styles";

function GuideList() {
  return (
    <StyledGuideList>
      <GuideListItem>
        <Link to={"/guide/convenient-scheduling-method"}>
          <Button variant={"text"} startIcon={<Icon name={"DocumentBold"} />}>
            Convenient scheduling method (copy, template, default setting)
          </Button>
        </Link>
      </GuideListItem>
      <GuideListItem>
        <Link to={"/guide/convenient-scheduling-method"}>
          <Button variant={"text"} startIcon={<Icon name={"DocumentBold"} />}>
            Appearance settings
          </Button>
        </Link>
      </GuideListItem>
      <GuideListItem>
        <Link to={"/guide/convenient-scheduling-method"}>
          <Button variant={"text"} startIcon={<Icon name={"DocumentBold"} />}>
            Backup (device change, restoration, data transfer)
          </Button>
        </Link>
      </GuideListItem>
    </StyledGuideList>
  );
}

export default GuideList;
