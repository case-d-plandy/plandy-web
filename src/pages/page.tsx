import { useEffect } from "react";

import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import Intro from "@pages/_components/Intro";
import { GoogleFirebase } from "@utils/google-firebase";

function Page() {
  useEffect(() => {
    GoogleFirebase.pageView("Home");
  }, []);

  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Intro />
    </GeneralLayout>
  );
}

export default Page;
