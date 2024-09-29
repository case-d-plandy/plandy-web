import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import Header from "@components/molecules/Header";

function HowToConnectPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant={"headline"} fontWeight={700} mt={2} mb={2}>
        How to connect an external calendar（iCloud、Google、Outlook）
      </Typography>
      <Typography>
        If the external calendar you want to display, such as Google Calendar or Outlook, is not in
        minical, please check the Settings app settings.
      </Typography>
    </GeneralLayout>
  );
}

export default HowToConnectPage;
