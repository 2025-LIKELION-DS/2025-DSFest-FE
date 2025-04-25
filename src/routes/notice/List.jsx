import * as L from "@notice/ListStyle";
import Topbar from "../../components/Topbar/Topbar";

function List() {
  return (
    <>
      <L.List>공지사항 목록</L.List>
      <Topbar title={"공지사항"} />
    </>
  );
}

export default List;
