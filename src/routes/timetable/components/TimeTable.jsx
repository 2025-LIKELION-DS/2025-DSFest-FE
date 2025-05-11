import { useState } from 'react';
import * as T from '@timetable/components/TimeTableStyle.js';
import * as B from '@timetable/components/BoothBoxStyle.js';
import BoothBoxGroup from '@timetable/components/TTBoxGroup';
import TimeLineHeader from '@timetable/components/TimeLineHeader';
import EntranceLine from '@timetable/components/EntranceLine';

const TimeTable = () => {
  const dates = ['14(WED)', '15(THU)', '16(FRI)']; // 날짜 목록
  const today = new Date().getDate().toString(); // 현재 날짜 확인
  const defaultDate = dates.find((dateStr) => dateStr.startsWith(today)) || dates[0]; //현재 날짜에 (요일)도 추가해서 전달
  const [selectedDate, setSelectedDate] = useState(defaultDate); // 기본 날짜 선택

  //덕우왕국 추가 부분
  const entranceTimes = {
    '14(WED)': '17:30',
    '15(THU)': '17:30',
    '16(FRI)': '16:00',
  };

  const label = '덕우왕국 입장';
  const selectedTime = entranceTimes[selectedDate];

  const calculateTopFromTime = (timeStr) => {
    const [hour, minute] = timeStr.split(':').map(Number);
    const startHour = 11;
    const minutesFromStart = (hour - startHour) * 60 + minute;
    const pixelsPerMinute = 37 / 60; // 약 0.6167px

    return 29 + minutesFromStart * pixelsPerMinute; // 시작 마진 + 경과 px
  };

  const top = selectedTime ? calculateTopFromTime(selectedTime) : null;

  return (
    <>
      <T.TimeTableWrapper>
        {/* 타임라인 헤더 (타임라인 그리드 + 마커 포함) */}
        <TimeLineHeader selectedDate={selectedDate} />
        <T.TimeTableH2>타임테이블</T.TimeTableH2>

        {/* 타임테이블 */}
        <T.DateBar>
          {dates.map((date) => (
            <T.DateCell
              key={date}
              onClick={() => setSelectedDate(date)}
              className={selectedDate === date ? 'selected' : ''}>
              {date}
            </T.DateCell>
          ))}
        </T.DateBar>

        <T.TimeTable>
          <T.TableTimeCon>
            {[
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '18:00',
              '19:00',
              '20:00',
              '21:00',
              '22:00',
            ].map((time, i) => (
              <T.TableTime key={time}>{time}</T.TableTime>
            ))}
          </T.TableTimeCon>

          {/* 일정 박스 */}
          <T.TableLineCon>
            <B.BoothCon animate={true}>
              {/* 선택된 날짜의 스케쥴 박스 띄우기 */}
              <BoothBoxGroup selectedDate={selectedDate} />
              {/* 덕우왕국 입장 시간선 */}
              {selectedTime && (
                <EntranceLine
                  top={selectedTime ? calculateTopFromTime(selectedTime) : -100}
                  label={selectedTime ? `덕우왕국 입장 (${selectedTime} - )` : ''}
                />
              )}
            </B.BoothCon>

            {Array.from({ length: 6 }).map((_, idx, arr) => (
              <T.TableLine
                key={idx}
                first={idx === 0}
                last={idx === arr.length - 1} // 마지막 줄엔 border-bottom 제거
              />
            ))}
          </T.TableLineCon>
        </T.TimeTable>
        {/* 부스 info */}
        <T.SpaceInfo>
          <T.SpaceBox>
            <T.Circle booth />
            부스 존
          </T.SpaceBox>
          <T.SpaceBox>
            <T.Circle />
            중앙 무대
          </T.SpaceBox>
          {selectedDate === '15(THU)' && (
            <T.SpaceBox>
              <T.Circle className="ilsimdukche" />
              일심덕체
            </T.SpaceBox>
          )}
        </T.SpaceInfo>
      </T.TimeTableWrapper>
    </>
  );
};

export default TimeTable;
