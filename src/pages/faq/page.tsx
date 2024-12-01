import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import FagList from "@pages/faq/_components/FagList";
import { GoogleFirebase } from "@utils/google-firebase";

function FaqPage() {
  const { t } = useTranslation();

  useEffect(() => {
    GoogleFirebase.pageView("FAQ");
  }, []);

  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        {t("faq")}
      </Typography>
      <FagList />
    </GeneralLayout>
  );
}

export default FaqPage;
