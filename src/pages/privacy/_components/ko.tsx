import { Link } from "react-router-dom";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";
import Block from "@components/molecules/Block";

function PrivacyKoPage() {
  return (
    <>
      <Typography>
        {`Plandy(이하 "서비스")는 김단아(이하 "서비스 제공자")가 제공하는 온라인 일정 관리 서비스를 입니다. Plandy는 고객의 개인정보를 어떻게 수집, 사용, 공유, 보호하는지에 대해 설명합니다. 또한 고객이 가지고 있는 권리에 대해 설명하고 이를 어떻게 활용할 수 있는지에 대한 정보를 제공합니다.`}
      </Typography>
      <Typography variant="headline" size="small" fontWeight={700} mt={4}>
        수집하는 개인정보 항목
      </Typography>
      <Box display="flex" flexDirection="column" gap={3} mt={2}>
        <Block
          title="미리 알림 정보"
          description="본 서비스는 사용자의 동의를 얻어 기기에서 알림 정보를 수집합니다. 수집된 정보는 다음과 같은 서비스 기능을 제공하기 위해 기기 내에서 사용되며 서비스 제공자가 관리하는 외부 서버에는 저장되지 않습니다."
        >
          <ul>
            <li>미리 알림 표시 및 편집</li>
          </ul>
          <div>
            사용자가 미리 알림을 외부 클라우드 서비스와 연동하는 경우, 해당 정보는 각 서비스
            제공업체의 개인정보처리방침에 따라 관리됩니다. 자세한 내용은 사용하는 서비스의 웹사이트
            또는 아래의 각 개인정보처리방침 링크를 참조하시기 바랍니다.
          </div>
          <Link to="https://www.apple.com/kr/legal/privacy/" target="_blank">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              iCloud 미리알림 Apple 고객 개인정보 처리방침(새 창에서 열기)
            </Button>
          </Link>
        </Block>
        <Block
          title="달력과 이벤트 정보"
          description="본 서비스는 이용자의 동의를 받아 기기에서 캘린더 정보(이벤트 정보)를 수집합니다. 수집된 정보는 다음의 서비스 기능을 제공하기 위해 기기 내에서 사용되며, 서비스 제공자가 관리하는 외부 서버에는 저장되지 않습니다."
        >
          <ul>
            <li>캘린더 표시 및 편집</li>
            <li>이벤트 표시 및 편집</li>
          </ul>
          사용자가 캘린더를 외부 클라우드 서비스와 연동하는 경우, 해당 정보는 각 서비스 제공업체의
          개인정보처리방침에 따라 관리됩니다. 자세한 내용은 사용하는 서비스의 웹사이트 또는 아래의
          각 개인정보처리방침 링크를 참조하시기 바랍니다.
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Link to="https://www.apple.com/kr/legal/privacy" target="_blank">
              <Button
                variant="text"
                size="small"
                startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
              >
                iCloud 달력 Apple 고객 개인정보 처리방침(새 창에서 열기)
              </Button>
            </Link>
            <Link to="https://policies.google.com/privacy?hl=ko" target="_blank">
              <Button
                variant="text"
                size="small"
                startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
              >
                Google Calendar Google 개인정보 처리방침(새 창에서 열기)
              </Button>
            </Link>
            <Link to="https://privacy.microsoft.com/ko-KR/privacystatement" target="_blank">
              <Button
                variant="text"
                size="small"
                startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
              >
                Outlook Microsoft 개인정보 처리방침(새 창에서 열기)
              </Button>
            </Link>
          </Box>
        </Block>
        <Block
          title="연락처 정보"
          description="본 서비스는 이용자의 동의를 받아 기기에서 연락처 정보(썸네일 사진, 표시 이름)를 수집합니다. 수집된 정보는 다음의 서비스 기능을 제공하기 위해 기기 내에서 사용되며, 서비스 제공자가 관리하는 외부 서버에는 저장되지 않습니다."
        >
          <ul>
            <li>이벤트 참석자의 썸네일 사진 및 이름 표시</li>
            <li>생일 이벤트의 썸네일 사진 표시</li>
          </ul>
        </Block>
        <Block
          title="피드백 및 문의 정보"
          description="이용자가 서비스에 대한 피드백이나 문의를 위해 서비스 제공업체에 연락하는 경우, 다음과 같은 정보가 수집될 수 있습니다. 수집된 정보는 문의에 대한 답변 및 서비스 개선을 위해 사용됩니다."
        >
          <ul>
            <li>이름</li>
            <li>이메일 주소</li>
            <li>문의 내용</li>
            <li>스크린샷 및 기타 이미지</li>
          </ul>
        </Block>
        <Block
          title="수집되는 정보"
          description="본 서비스는 서비스 이용 시작시 아래와 같은 이용 데이터를 수집합니다. 수집된 정보는 서비스 개선 및 개인 맞춤 서비스 제공을 위해 사용됩니다."
        >
          <ul>
            <li>
              기기 정보
              <ul>
                <li>
                  모델명, OS 버전, 로케일(언어 및 지역), 시간대, IP 주소, 사용자 에이전트, 쿠키,
                  접근성 설정
                </li>
              </ul>
            </li>
            <li>
              앱 정보
              <ul>
                <li>사용중 버전, 사용 시작일, 인앱 설정, 위젯 설정</li>
              </ul>
            </li>
            <li>
              로그 정보
              <ul>
                <li>작동 로그, 충돌 로그, 오류 로그</li>
              </ul>
            </li>
            <li>
              인앱 구매 관련 정보
              <ul>
                <li>구매 결과 값</li>
              </ul>
            </li>
          </ul>
          사용 데이터는 Google에서 제공하는 Firebase를 사용하여 수집됩니다. 수집한 데이터는 Google의
          개인정보처리방침에 따라 관리됩니다. 자세한 내용은 Google의 개인정보처리방침을 참조하시기
          바랍니다.
          <Link to="https://policies.google.com/privacy?hl=ko" target="_blank">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              Google 개인정보 처리방침(새 창에서 열기)
            </Button>
          </Link>
        </Block>
        <Block
          title="마케팅 및 광고 활동을 위한 정보"
          description="본 서비스는 이용자의 동의를 받아 광고 식별자(IDFA)를 수집합니다. 수집된 정보는 광고 게재를 위해 사용됩니다."
        >
          <div>
            서비스는 제3자 광고 서비스를 사용합니다. 이러한 광고 서비스 제공업체는 광고 게재를
            목적으로 이용자 정보를 수집할 수 있습니다. 자세한 내용은 다음 링크를 참조하시기
            바랍니다.
          </div>
          <Link to="https://policies.google.com/technologies/ads?hl=ko" target="_blank">
            <Button
              variant="text"
              size="small"
              startIcon={<Icon name="ShieldOutline" width={16} height={16} />}
            >
              Google 애드몹 (Google, Inc.) | Google 광고(새 창에서 열기)
            </Button>
          </Link>
          <div>
            본 서비스의 유료 구독 서비스를 이용하면 광고 게재가 중지 되며, 광고 게재 목적의 정보는
            더 이상 수집되지 않습니다.
          </div>
        </Block>
        <Block
          title="이 방침의 변경"
          description="Plandy는 이 개인정보처리방침을 수시로 변경합니다. 본 방침의 변경이 개인정보 취급에 근본적인 영향을 미치는 경우 또는 그 밖에 고객에게 중대한 영향을 미치는 경우, 서비스 제공자는 고객이 고객의 권리를 행사할 기회(예를 들어 개인정보 취급에 이의를 제기할 기회)를 얻을 수 있도록 고객에게 충분한 사전 통지를 합니다."
        />
        <Typography>이 약관은 2025년 02월 19일부터 시행합니다.</Typography>
      </Box>
    </>
  );
}

export default PrivacyKoPage;
