import QRCode from 'react-qr-code';
import * as Q from '@admin/components/QRImage/QRImageStyle';

/**
 * 어드민 페이지에서 사용되는 QR 컴포넌트입니다.
 * 어드민 퍼즐 QR이 저장되는 이미지로 사용됩니다.
 *
 * @param {string} num -- 퍼즐 번호
 * @param {string} title -- 퍼즐 장소명
 * @param {string} uuid -- QR uuid 값
 * @param {string} password -- 퍼즐 비밀번호
 * ex) <CopyQR num={"1"} title={"퍼즐 QR"} uuid={"e1439392-f7bd-4e4d-b1ed-0efa86c5200e"} password={"E2F989"}/>
 *
 * @author 김서윤
 * **/

const QRImage = ({ num, title, uuid, password }) => {
  return (
    <Q.QRImageContainer>
      <Q.TitleContainer>
        <Q.TitleNum>
          <Q.TitlePurple lineHeight="normal">{num}</Q.TitlePurple>
          <Q.TitleText>번 퍼즐</Q.TitleText>
        </Q.TitleNum>
        <Q.TitlePurple lineHeight="140%">{title}</Q.TitlePurple>
      </Q.TitleContainer>
      <Q.QRBackground>
        <QRCode value={uuid} size={150} />
      </Q.QRBackground>
      <Q.PWContainer>
        <Q.InputContainer>{password}</Q.InputContainer>
      </Q.PWContainer>
    </Q.QRImageContainer>
  );
};

export default QRImage;
