import * as T from '@timetable/TimetableStyle';
import TimeTable from '@timetable/components/TimeTable';
function Timetable() {
  return (
    <>
      <T.TimeTableContainer>
        <T.TimeTable>
          <TimeTable />
        </T.TimeTable>
      </T.TimeTableContainer>
    </>
  );
}

export default Timetable;
