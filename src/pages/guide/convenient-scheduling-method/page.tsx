import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import HashBlock from "@components/molecules/HashBlock";
import Header from "@components/molecules/Header";
import { Link } from "react-router-dom";

function ConvenientSchedulingMethodPage() {
  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        Convenient scheduling method (copy, template, default setting)
      </Typography>
      <Typography>This is a guide about adding events.</Typography>
      <Typography variant="title" fontWeight={700} mt={4} mb={1}>
        Table of Contents
      </Typography>
      <Link to="/privacy">
        <Button
          variant="text"
          size="small"
          startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
        >
          Privacy policy
        </Button>
      </Link>
      <Box display="flex" flexDirection="column" gap={3} mt={4}>
        <HashBlock
          title="Copy (duplicate) an event"
          description="You can copy and edit specific events by following the steps below."
          to="/guide/convenient-scheduling-method#copy-an-event"
        />
      </Box>
    </GeneralLayout>
  );
}

export default ConvenientSchedulingMethodPage;
