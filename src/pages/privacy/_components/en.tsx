import { Link } from "react-router-dom";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import Block from "@components/molecules/Block";

function PrivacyEnPage() {
  return (
    <>
      <Typography>
        {`This privacy policy explains the privacy policy for the service and application "Plandy" (hereinafter referred to as "the Service") provided by Danah Kim (hereinafter referred to as "the Service Provider").`}
      </Typography>
      <Typography variant="headline" size="small" fontWeight={700} mt={4}>
        Information Collected by the Service
      </Typography>
      <Box display="flex" flexDirection="column" gap={3} mt={2}>
        <Block
          title="Reminder Information"
          description={`The Service collects reminder information from the device with the user's consent. The collected information is used within the device to provide the following features of the Service and is not stored on external servers managed by the Service Provider.`}
        >
          <ul>
            <li>Display and edit reminders</li>
          </ul>
          <div>
            If the user links their reminders with external cloud services, the information will be
            managed according to the privacy policies of each service provider. For more details,
            please refer to the websites of the services you use or the links to each privacy policy
            below.
          </div>
          <Link to="https://www.apple.com/legal/privacy" target="_blank">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              iCloud Reminder Apple Privacy Policy(opens new window)
            </Button>
          </Link>
        </Block>
        <Block
          title="Calendar and Event Information"
          description={`The Service collects calendar information (event information) from the device with the user's consent. The collected information is used within the device to provide the following features of the Service and is not stored on external servers managed by the Service Provider.`}
        >
          <ul>
            <li>Display and edit calendars</li>
            <li>Display and edit events</li>
          </ul>
          If the user links their calendar with external cloud services, the information will be
          managed according to the privacy policies of each service provider. For more details,
          please refer to the websites of the services you use or the links to each privacy policy
          below.
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Link to="https://www.apple.com/legal/privacy" target="_blank">
              <Button
                variant="text"
                size="small"
                startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
              >
                iCloud Calendar Apple Privacy Policy(opens new window)
              </Button>
            </Link>
            <Link to="https://policies.google.com/privacy" target="_blank">
              <Button
                variant="text"
                size="small"
                startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
              >
                Google Calenda Google Privacy Policy(opens new window)
              </Button>
            </Link>
            <Link to="https://www.microsoft.com/ko-KR/privacy/privacystatement" target="_blank">
              <Button
                variant="text"
                size="small"
                startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
              >
                Outlook Microsoft Privacy Policy(opens new window)
              </Button>
            </Link>
          </Box>
        </Block>
        <Block
          title="Contact Information"
          description={`The Service collects contact information (thumbnail photos, display names) from the device with the user's consent. The collected information is used within the device to provide the following features of the Service and is not stored on external servers managed by the Service Provider.`}
        >
          <ul>
            <li>Display thumbnail photos and display names of event attendees</li>
            <li>Display thumbnail photos for birthday events</li>
          </ul>
        </Block>
        <Block
          title="Feedback and Inquiry Information"
          description="When the user contacts the Service Provider for feedback or inquiries about the Service, the following information may be collected. The collected information is used to respond to inquiries and improve the Service."
        >
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Inquiry details</li>
            <li>Screenshots and other images</li>
          </ul>
        </Block>
        <Block
          title="Usage Data"
          description="The Service collects the following usage data upon the commencement of Service use. The collected information is used to improve the Service."
        >
          <ul>
            <li>
              Device information
              <ul>
                <li>
                  Model name, OS version, locale (language and region), time zone, IP address, user
                  agent, cookies, accessibility settings
                </li>
              </ul>
            </li>
            <li>
              App information
              <ul>
                <li>Version used, start date of use, in-app settings, widget settings</li>
              </ul>
            </li>
            <li>
              Log information
              <ul>
                <li>Operation logs, crash logs, error logs</li>
              </ul>
            </li>
          </ul>
          {`Usage data is collected using Firebase provided by Google. The data collected by Firebase is managed according to Google's privacy policy. For more details, please refer to the Google Privacy Policy.`}
          <Link to="https://policies.google.com/privacy" target="_blank">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              Google Privacy Policy(opens new window)
            </Button>
          </Link>
        </Block>
        <Block
          title="Information for Ad Delivery"
          description={`The Service collects advertising identifiers (IDFA) with the user's consent. The collected information is used for ad delivery.`}
        >
          <div>
            The Service uses third-party advertising services. These advertising service providers
            may collect user information for the purpose of ad delivery. For more details, please
            refer to the following links.
          </div>
          <Link to="https://policies.google.com/privacy" target="_blank">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              Google AdMob (Google, Inc.) | Google Advertising(opens new window)
            </Button>
          </Link>
          <div>
            By using Plandy of the Paid subscription services, ad delivery will be stopped, and
            information for the purpose of ad delivery will no longer be collected.
          </div>
        </Block>
        <Block
          title="Contact"
          description="For opinions, questions, complaints, or other inquiries regarding the handling of user information related to the privacy policy of the Service, please contact us using the email(support@case-d.com)."
        />
      </Box>
    </>
  );
}

export default PrivacyEnPage;
