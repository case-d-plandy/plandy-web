import { lazy, useEffect } from "react";

import { useTranslation } from "react-i18next";

import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import TermsEnPage from "@pages/terms/components/en";
import { GoogleFirebase } from "@utils/google-firebase";
import { LangCode } from "@utils/i18n";

const TermsKoPage = lazy(() => import("./components/ko"));

function TermsPage() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    GoogleFirebase.pageView("Terms of Use");
  }, []);

  let contents = <TermsEnPage />;

  if (i18n.resolvedLanguage === LangCode.KO) {
    contents = <TermsKoPage />;
  }

  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        {t("terms")}
      </Typography>
      {contents}
    </GeneralLayout>
  );
}

export default TermsPage;
