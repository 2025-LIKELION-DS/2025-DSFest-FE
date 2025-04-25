import * as T from "@timetable/TimeTableStyle";
import Topbar from "../../components/Topbar/Topbar";

function TimeTable() {
  return (
    <>
      <T.TimeTable>타임테이블</T.TimeTable>
      <Topbar title={"타임테이블"} />
    </>
  );
}

export default TimeTable;
