import GeneralLayout from "@components/layouts/GeneralLayout";
import MessageBox from "@pages/error/500/_components/MessageBox";

function Error500Page() {
  return (
    <GeneralLayout>
      <MessageBox />
    </GeneralLayout>
  );
}

export default Error500Page;
