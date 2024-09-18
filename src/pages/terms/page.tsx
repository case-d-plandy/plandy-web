import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function TermsPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <h1>Terms</h1>
      <p>Terms and conditions</p>
    </GeneralLayout>
  );
}

export default TermsPage;
