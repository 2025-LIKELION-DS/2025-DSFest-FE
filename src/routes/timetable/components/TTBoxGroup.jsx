import BoothBox from '@timetable/components/BoothBox';
import palette from '@styles/theme';

const eventsByDate = {
  '14(WED)': {
    left: [
      {
        title: '낮 부스\n(수익사업)',
        timeRange: '11:00 - 14:30',
        top: 30,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
      {
        title: '밤 부스\n(수익사업)',
        timeRange: '16:00 - 19:30',
        top: 208,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
    ],
    right: [
      {
        title: '<라라랜드> 상영',
        timeRange: '15:40 - 17:30',
        top: 197.5,
        height: 64.5,
        left: 52,
        borderColor: palette.violet.violet200,
      },

      {
        title: '재학생 및\n동아리 공연',
        timeRange: '18:00 - 20:00',
        top: 280.5,
        height: 72,
        left: 52,
        borderColor: palette.violet.violet200,
      },
      {
        title: '아티스트 공연',
        timeRange: '20:00 - 21:30',
        top: 352,
        height: 55.8,
        left: 52,
        borderColor: palette.violet.violet200,
      },
    ],
  },

  '15(THU)': {
    left: [
      {
        title: '낮 부스\n(수익사업)',
        timeRange: '11:00 - 14:30',
        top: 30,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
      {
        title: '밤 부스\n(수익사업)',
        timeRange: '16:00 - 19:30',
        top: 208,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
    ],
    right: [
      {
        title: '일심덕체 1타임',
        timeRange: '12:00 - 13:15',
        top: 64.25,
        height: 45.5,
        left: 52,
        borderColor: palette.puzzle.default,
      },
      {
        title: '일심덕체 2타임',
        timeRange: '13:30 - 14:45',
        top: 119,
        height: 45,
        left: 52,
        borderColor: palette.puzzle.default,
      },
      {
        title: '운현가요제',
        timeRange: '18:00 - 20:10',
        top: 280,
        height: 79,
        left: 52,
        borderColor: palette.violet.violet200,
      },
      {
        title: '아티스트 공연',
        top: 358,
        height: 20,
        left: 52,
        borderColor: palette.violet.violet200,
      },
    ],
  },

  '16(FRI)': {
    left: [
      {
        title: '낮 부스\n(수익사업)',
        timeRange: '11:00 - 14:30',
        top: 30,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
      {
        title: '밤 부스\n(수익사업)',
        timeRange: '16:00 - 19:30',
        top: 208,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
    ],
    right: [
      {
        title: '여운의 조각',
        // timeRange: '16:30 -17:10',
        top: 227,
        height: 24.5,
        left: 52,
        borderColor: palette.violet.violet200,
      },
      {
        title: '재학생 및\n동아리 공연',
        timeRange: '17:10 -18:50',
        top: 251,
        height: 59,
        left: 52,
        borderColor: palette.violet.violet200,
      },
      {
        title: '보라; 보이는 라디오',
        // timeRange: '18:50 - 19:30',
        top: 310,
        height: 26,
        left: 52,
        borderColor: palette.violet.violet200,
      },
      {
        title: '아티스트 공연',
        timeRange: '19:30 - 21:00',
        top: 335,
        height: 55,
        left: 52,
        borderColor: palette.violet.violet200,
      },
    ],
  },
};

const BoothBoxGroup = ({ selectedDate }) => {
  const { left = [], right = [] } = eventsByDate[selectedDate] || {};
  return (
    <>
      {left.map((e, i) => (
        <BoothBox
          key={`left-${i}`}
          {...e}
          compact={e.height <= 26}
          special={e.title === '보라; 보이는 라디오'} // 특정 타이틀일 때만 true
          lalaland={e.title === '<라라랜드> 상영'}
          highlight={e.title === '재학생 및\n동아리 공연' && e.top === 251}
        />
      ))}
      {right.map((e, i) => (
        <BoothBox
          key={`right-${i}`}
          {...e}
          compact={e.height <= 26}
          special={e.title === '보라; 보이는 라디오'}
          lalaland={e.title === '<라라랜드> 상영'}
          highlight={e.title === '재학생 및\n동아리 공연' && e.top === 251}
        />
      ))}
    </>
  );
};

export default BoothBoxGroup;
