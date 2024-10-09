import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import GeneralLayout from "@components/layouts/GeneralLayout";
import Footer from "@components/molecules/Footer";
import HashBlock from "@components/molecules/HashBlock";
import Header from "@components/molecules/Header";
import { GoogleAnalytics } from "@utils/google-analytics.ts";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function TermsPage() {
  useEffect(() => {
    GoogleAnalytics.pageView("Terms of service");
  }, []);

  return (
    <GeneralLayout header={<Header />} footer={<Footer />}>
      <Typography variant="headline" fontWeight={700} mt={2} mb={2}>
        Terms of service
      </Typography>
      <Typography>
        {`We will explain the "terms of use" (hereinafter referred to as the
              "terms") for the the service and application "Plandy" (hereinafter
              referred to as "service") provided by Danah Kim (hereinafter referred to as the
              "service provider").`}
      </Typography>
      <Box display="flex" flexDirection="column" gap={3} mt={4}>
        <HashBlock
          title="General"
          description={
            "By using this service, you are deemed to have agreed to this agreement. Please be sure to\n" +
            "          read these Terms before using this service."
          }
          to="/terms#general"
        />
        <HashBlock title="Disclaimer" to="/terms#disclaimer">
          <ul>
            <li>
              {`Preparation of equipment and network environment to operate this application shall be
                    done at the user's expense and responsibility.`}
            </li>
            <li>
              We do not guarantee the accuracy, reliability, or completeness of the information
              provided by this service
            </li>
            <li>
              We will do its best to ensure that the user have no inconvenience in using the
              Service. However, the provision of the Service may not be smooth due to temporary
              inspection or maintenance.
            </li>
            <li>
              We shall not be held responsible for any damages suffered by the user in connection
              with the use of this service
            </li>
            <li>
              We are not responsible for any failure to use the Service due to reasons attributable
              to you.
            </li>
            <li>
              The user shall use this service at his/her own responsibility and shall indemnify the
              service provider for any damage caused by using this service
            </li>
            <li>
              The service provider will not, under any circumstances, refund usage fees received for
              paid services
            </li>
          </ul>
        </HashBlock>
        <HashBlock
          title="Usage Fees"
          description="This application shall be basically free of charge."
          to="/terms#usage-fees"
        />
        <HashBlock
          title="Prohibited matter"
          description="When using this service, the user shall not perform the following acts."
          to="/terms#prohibited-matter"
        >
          <ul>
            <li>Acts that violate copyrights, portrait rights, honor rights, privacy, etc.</li>
            <li>
              Acts that infringe copyrights, other intellectual property rights or property
              interests of service providers or third parties, or acts that may infringe
            </li>
            <li>
              Acts that violate laws or public order and morals, or acts that are likely to do so
            </li>
            <li>
              Acts that disadvantage other users or third parties, or acts that are likely to do so
            </li>
            <li>
              Acts that interfere with the operation of this service, or acts that may interfere
            </li>
            <li>
              Acts that damage the credibility of the service provider or this service, or acts that
              are likely to do so
            </li>
            <li>
              Acts of reverse engineering, decompiling, or disassembling the software information
              and copyrighted material contained in this service
            </li>
            <li>
              {`Unauthorized access to the service provider's network and the Internet server used to provide this service (hereinafter referred to as "target equipment"), or unauthorized rewriting or deletion of accumulated information.`}
            </li>
            <li>
              Acts of transmitting harmful computer programs such as viruses to the target equipment
            </li>
            <li>Acts that impose a load more than necessary on the target equipment</li>
            <li>Other acts that the service provider deems inappropriate</li>
          </ul>
        </HashBlock>
        <HashBlock
          title="Change, Suspension, Termination of Service"
          description={
            "The service provider may change, suspend, or terminate part or all of the service at any\n" +
            "          time for any reason without prior notice to the user."
          }
          to="/terms#change-suspension-termination-of-service"
        />
        <HashBlock
          title="Privacy policy"
          description={
            "User privacy information and personal information will be handled appropriately in\n" +
            "          accordance with the privacy policy. By using this service, you agree to our privacy\n" +
            "          policy."
          }
          to="/terms#privacy-policy"
        >
          <Link to="/privacy">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              Privacy policy
            </Button>
          </Link>
        </HashBlock>
        <HashBlock
          title="Changes to Terms of Use"
          description="The service provider may revise these Terms without obtaining the User's prior consent, and the User shall consent to this. The revised Terms of Use shall take effect from the time they are posted on this service."
          to="/terms#change-to-terms-of-use"
        />
        <HashBlock
          title="Contact"
          description="If you have any comments, questions, complaints, or other inquiries regarding the handling of user information regarding the terms of use of this service, please contact us using the email(plandy.official@gmail.com)."
          to="/terms#contact"
        />
      </Box>
    </GeneralLayout>
  );
}

export default TermsPage;
