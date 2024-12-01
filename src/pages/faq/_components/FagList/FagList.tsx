import { useTranslation } from "react-i18next";

import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";

import { matchSupportLanguage } from "@utils/i18n";

import { Bullet, FagListItem, StyledFagList } from "./FagList.styles";

function FagList() {
  const { t, i18n } = useTranslation();
  const fullLangCode = matchSupportLanguage(i18n.resolvedLanguage).fullLangCode;

  return (
    <StyledFagList>
      <FagListItem>
        <Button
          variant="text"
          endIcon={<Icon name="ExportOutline" width={15} height={15} />}
          onClick={() => window.open(`https://support.apple.com/${fullLangCode}/102543`)}
        >
          <Bullet />
          {t("faq_apple_102543")}
        </Button>
      </FagListItem>
      <FagListItem>
        <Button
          variant="text"
          endIcon={<Icon name="ExportOutline" width={15} height={15} />}
          onClick={() => window.open(`https://support.apple.com/${fullLangCode}/105124`)}
        >
          <Bullet />
          {t("faq_apple_105124")}
        </Button>
      </FagListItem>
    </StyledFagList>
  );
}

export default FagList;
