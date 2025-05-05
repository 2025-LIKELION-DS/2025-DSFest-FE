import * as M from '@components/puzzle/ModalPuzzleSelect/ModalPuzzleSelectStyle';
import { useNavigate } from 'react-router-dom';

import Puzzle from '@assets/puzzle/puzzle-piece-2-grain@3x.png';
import ButtonModalDual from '@components/puzzle/ButtonModalDual/ButtonModalDual';

/**
 * 퍼즐 페이지에서 사용되는 모달 컴포넌트입니다.
 * 퍼즐을 채우기 위해 퍼즐을 선택했을 때 나타나는 컴포넌트입니다.
 *
 * @param {number} number -- 몇번째 부스인지
 * @param {string} boothName -- 부스 이름
 * @param {state} boothInfo -- 부스 설명
 * @param {function} onClickR -- 카메라 연결 함수
 * ex) <ModalPuzzleSelect number={1} boothName={'멋쟁이사자처럼'} boothInfo={'사자들만 모여있는 우리 부스, 올테면 와바. 어흥~ 최대 두 줄로 우리 부스를 소개 중. 기여운 기디사자 기기 끼'}/>
 *
 * ButtonModalDual에 onClickR로 넘길 카메라 열리는 함수(handleCamera) 작성 필요
 *
 * @author 김진효
 * **/

const ModalPuzzleSelect = ({ number, boothName, boothInfo, onClickR }) => {
  const navigate = useNavigate();

  const handleMap = () => {
    navigate('/map');
  };

  return (
    <M.ModalPuzzleSelect>
      <M.ModalContainer>
        <M.BoothContainer>
          <M.ImgContainer>
            <img src={Puzzle} alt="퍼즐" />
          </M.ImgContainer>
          <div>
            <M.Text>{number}번 퍼즐</M.Text>
            <M.Text>
              <M.BoothName>{boothName}</M.BoothName>
            </M.Text>
          </div>
        </M.BoothContainer>

        <M.Info>{boothInfo}</M.Info>
      </M.ModalContainer>

      <ButtonModalDual contentL={'퍼즐 위치 확인'} onClickL={handleMap} contentR={'퍼즐 채우기'} onClickR={onClickR} />
    </M.ModalPuzzleSelect>
  );
};

export default ModalPuzzleSelect;
