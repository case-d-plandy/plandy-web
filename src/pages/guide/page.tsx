import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import { GoogleFirebase } from "@utils/google-firebase";

function GuidePage() {
  const { t } = useTranslation();

  useEffect(() => {
    GoogleFirebase.pageView("Guide");
  }, []);

  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        {t("guide")}
      </Typography>
      <Typography fontWeight={500} mt={2} mb={2}>
        {t("coming_soon")} !
      </Typography>
    </GeneralLayout>
  );
}

export default GuidePage;
