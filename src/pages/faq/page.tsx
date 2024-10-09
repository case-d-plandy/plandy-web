import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import FagList from "@pages/faq/_components/FagList";

function FaqPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        Frequently Asked Questions
      </Typography>
      <FagList />
    </GeneralLayout>
  );
}

export default FaqPage;
