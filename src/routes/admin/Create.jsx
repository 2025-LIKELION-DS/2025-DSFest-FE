import * as C from "@admin/CreateStyle";
import Topbar from "../../components/Topbar/Topbar";

function Create() {
  return (
    <>
      <C.Create>부스 qr 생성</C.Create>
      <Topbar title={"부스 QR 및 비밀번호 생성"} />
    </>
  );
}

export default Create;
