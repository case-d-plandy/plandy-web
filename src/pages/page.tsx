import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";

import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import MetaTag from "@components/utils/MetaTag";
import Intro from "@pages/_components/Intro";
import { GoogleFirebase } from "@utils/google-firebase";

function Page() {
  const { country } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    GoogleFirebase.pageView("Home");
  }, []);

  return (
    <>
      <MetaTag title="Plandy" hideTitleSuffix description={t("description")} pathname="/" />
      <GeneralLayout header={<Header />} footer={<Footer />}>
        <Intro />
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
      {!country?.length && (
        <script type="application/ld+json">
          {`
{
  "@context": "http://schema.org",
  "@id": "https://www.plandy.app/#website",
  "@type": "WebSite",
  "url": "https://www.plandy.app/","name": "Plandy"
}`}
        </script>
      )}
      <script type="application/ld+json">
        {`
{
  "@context": "http://schema.org",
  "@id": "https://www.plandy.app/${country ? `/${country}` : ""}#webpage",
  "@type": "WebPage",
  "url": "https://www.plandy.app/${country ? `/${country}` : ""}",
  "name": "Plandy"
}`}
      </script>
    </>
  );
}

export default Page;
