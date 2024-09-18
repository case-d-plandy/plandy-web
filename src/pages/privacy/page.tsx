import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function PrivacyPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <h1>Privacy Policy</h1>
      <p>Terms and conditions</p>
    </GeneralLayout>
  );
}

export default PrivacyPage;
