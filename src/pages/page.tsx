import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function Page() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <h1>Main Page</h1>
    </GeneralLayout>
  );
}

export default Page;
