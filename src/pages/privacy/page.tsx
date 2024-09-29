import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function PrivacyPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant={"headline"} fontWeight={700} mt={2} mb={2}>
        Privacy policy
      </Typography>
      <Typography>
        This privacy policy explains the privacy practices for the smartphone application Plan Mate
        (hereinafter referred to as the Service) provided by Shota Nakagami (hereinafter referred to
        as the Service Provider).
      </Typography>
    </GeneralLayout>
  );
}

export default PrivacyPage;
