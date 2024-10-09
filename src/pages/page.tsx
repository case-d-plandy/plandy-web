import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import Intro from "@pages/_components/Intro";

function Page() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Intro />
    </GeneralLayout>
  );
}

export default Page;
