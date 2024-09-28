import Title from "@components/atoms/Title";
import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function ConvenientSchedulingMethodPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Title>Convenient scheduling method (copy, template, default setting)</Title>
      <Typography>This is a guide about adding events.</Typography>
    </GeneralLayout>
  );
}

export default ConvenientSchedulingMethodPage;
