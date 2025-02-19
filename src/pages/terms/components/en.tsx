import { Link } from "react-router-dom";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import Block from "@components/molecules/Block";

function TermsEnPage() {
  return (
    <>
      <Typography>
        {`We will explain the "terms of use" (hereinafter referred to as the
              "terms") for the the service and application "Plandy" (hereinafter
              referred to as "service") provided by Danah Kim (hereinafter referred to as the
              "service provider").`}
      </Typography>
      <Box display="flex" flexDirection="column" gap={3} mt={4}>
        <Block
          title="General"
          description={
            "By using this service, you are deemed to have agreed to this agreement. Please be sure to\n" +
            "read these Terms before using this service."
          }
        />
        <Block title="Disclaimer">
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
        </Block>
        <Block
          title="Usage Fees"
          description="The application shall be basically free of charge and is paid services provided as follows."
        >
          <ul>
            <li>Service details and usage fees are announced within the app.</li>
            <li>
              We offer two plans: Remove Ad and the Pro Plan. For detailed information about the
              plans, please refer to the app.
            </li>
            <ul>
              <li>
                After subscribing, you can manage and cancel your subscription through your App
                Store account settings. Even if you cancel, the premium service will remain
                available until the end of the subscription period.
              </li>
              <li>
                If you do not cancel at least 24 hours before the subscription renewal date, it will
                be automatically renewed. Payments that have already been processed are
                non-refundable.
              </li>
              <li>
                Refund requests must be submitted to support@case-d.com within 7days from the
                payment date. Refunds are only applicable if there is no record of service usage
                after payment. Once the service has been used, refunds will not be granted.
              </li>
            </ul>
            <li>The following terms apply universally to all paid services</li>
            <ul>
              <li>
                Users must review the service details thoroughly before making a payment for any
                paid service.
              </li>
              <li>
                {`The service is not liable for any issues arising from a user's failure to review the details before purchasing a paid service.`}
              </li>
              <li>
                Users must use a payment method registered under their own name when making payments
                for paid services. Users are fully responsible for any issues arising from the use
                of another person’s payment method.
              </li>
              <li>
                Repeated payment transactions without intent to use the paid service or any
                unauthorized access attempts are strictly prohibited.
              </li>
              <li>Minors are not permitted to use paid services.</li>
              <li>
                The service provider reserves the right to modify pricing plans and service fees,
                with a notice provided within the service at least 30 days prior to any changes.
              </li>
            </ul>
          </ul>
        </Block>
        <Block
          title="Prohibited matter"
          description="When using this service, the user shall not perform the following acts."
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
        </Block>
        <Block
          title="Change, Suspension, Termination of Service"
          description={
            "The service provider may change, suspend, or terminate part or all of the service at any\n" +
            "          time for any reason without prior notice to the user."
          }
        />
        <Block
          title="Privacy policy"
          description={
            "User privacy information and personal information will be handled appropriately in\n" +
            "          accordance with the privacy policy. By using this service, you agree to our privacy\n" +
            "          policy."
          }
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
        </Block>
        <Block
          title="Changes to Terms of Use"
          description="The service provider may revise these Terms without obtaining the User's prior consent, and the User shall consent to this. The revised Terms of Use shall take effect from the time they are posted on this service."
        />
        <Block
          title="Contact"
          description="If you have any comments, questions, complaints, or other inquiries regarding the handling of user information regarding the terms of use of this service, please contact us using the email(support@case-d.com)."
        />
      </Box>
    </>
  );
}

export default TermsEnPage;
