import Title from "@components/atoms/Title";
import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function TermsPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Title>Terms of service</Title>
      <Typography>
        We will explain the terms of use for the smartphone application Plan Mate (hereinafter
        referred to as service) provided by Shota Nakagami (hereinafter referred to as the service
        provider).
      </Typography>
    </GeneralLayout>
  );
}

export default TermsPage;
