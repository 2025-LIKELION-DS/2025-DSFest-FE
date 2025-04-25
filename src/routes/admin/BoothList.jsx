import * as B from "@admin/BoothListStyle";
import Topbar from "../../components/Topbar/Topbar";

function BoothList() {
  return (
    <>
      <B.BoothList>부스 목록</B.BoothList>
      <Topbar title={"부스 QR 및 비밀번호 목록"} />
    </>
  );
}

export default BoothList;
