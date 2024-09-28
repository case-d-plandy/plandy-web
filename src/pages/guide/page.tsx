import Title from "@components/atoms/Title";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import GuideList from "@pages/guide/_components/GuideList";

function GuidePage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Title>User Guide</Title>
      <GuideList />
    </GeneralLayout>
  );
}

export default GuidePage;
