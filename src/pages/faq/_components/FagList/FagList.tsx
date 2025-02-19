import { useTranslation } from "react-i18next";

import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";

import { matchSupportLanguage } from "@utils/i18n";

import { Bullet, FagListItem, StyledFagList } from "./FagList.styles";

const FAQ_NUMBERS = [102543, 105124, 118212, 118428];

function FagList() {
  const { t, i18n } = useTranslation();
  const fullLangCode = matchSupportLanguage(i18n.resolvedLanguage).fullLangCode;

  return (
    <StyledFagList>
      {FAQ_NUMBERS.map((faqNumber) => (
        <FagListItem key={`faq-${faqNumber}`}>
          <Button
            variant="text"
            endIcon={<Icon name="ExportOutline" width={15} height={15} />}
            onClick={() => window.open(`https://support.apple.com/${fullLangCode}/${faqNumber}`)}
          >
            <Bullet />
            {t(`faq_apple_${faqNumber}`)}
          </Button>
        </FagListItem>
      ))}
    </StyledFagList>
  );
}

export default FagList;
