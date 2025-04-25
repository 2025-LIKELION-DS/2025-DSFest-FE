import * as F from "@notice/FormStyle";
import Topbar from "../../components/Topbar/Topbar";

function Form() {
  return (
    <>
      <F.Form>공지사항 작성/수정</F.Form>
      <Topbar title={"공지사항"} />
    </>
  );
}

export default Form;
