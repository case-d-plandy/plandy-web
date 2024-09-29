import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function ConvenientSchedulingMethodPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant={"headline"} fontWeight={700} mt={2} mb={2}>
        Convenient scheduling method (copy, template, default setting)
      </Typography>
      <Typography>This is a guide about adding events.</Typography>
    </GeneralLayout>
  );
}

export default ConvenientSchedulingMethodPage;
