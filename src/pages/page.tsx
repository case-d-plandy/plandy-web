import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import Intro from "@pages/_components/Intro";
import { GoogleAnalytics } from "@utils/google-analytics.ts";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    GoogleAnalytics.pageView("Home");
  }, []);

  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Intro />
    </GeneralLayout>
  );
}

export default Page;
