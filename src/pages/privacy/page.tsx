import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import MetaTag from "@components/utils/MetaTag";
import PrivacyEnPage from "@pages/privacy/_components/en";
import PrivacyKoPage from "@pages/privacy/_components/ko";
import { GoogleFirebase } from "@utils/google-firebase";
import { LangCode } from "@utils/i18n";

function PrivacyPage() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    GoogleFirebase.pageView("Privacy Policy");
  }, []);

  let page = <PrivacyEnPage />;

  if (i18n.resolvedLanguage === LangCode.KO) {
    page = <PrivacyKoPage />;
  }

  return (
    <>
      <MetaTag
        title={t("privacy")}
        siteName="Plandy Privacy Policy"
        description=""
        pathname="/privacy"
      />
      <GeneralLayout header={<Header />} footer={<Footer />}>
        <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
          {t("privacy")}
        </Typography>
        {page}
      </GeneralLayout>
      <script type="application/ld+json">
        {`
{
  "@context": "http://schema.org",
  "@id": "https://www.plandy.app/#organization",
  "@type": "Organization",
  "name": "Plandy",
  "url": "https://www.plandy.app/",
  "logo": "https://www.plandy.app/images/knowledge_graph_logo.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "support@case-d.com",
      "contactType": "customer support",
      "areaServed": "KR",
      "availableLanguage": ["KO", "EN"]
    }
  ]
}`}
      </script>
    </>
  );
}

export default PrivacyPage;
