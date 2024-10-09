import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";
import GuideList from "@pages/guide/_components/GuideList";

function GuidePage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        User Guide
      </Typography>
      <GuideList />
    </GeneralLayout>
  );
}

export default GuidePage;
