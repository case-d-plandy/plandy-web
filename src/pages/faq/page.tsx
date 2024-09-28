import Title from "@components/atoms/Title";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import FagList from "@pages/faq/_components/FagList";

function FaqPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Title>Frequently Asked Questions</Title>
      <FagList />
    </GeneralLayout>
  );
}

export default FaqPage;
