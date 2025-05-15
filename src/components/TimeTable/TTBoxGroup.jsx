import BoothBox from '@components/TimeTable/BoothBox';
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
        timeRange: '15:00 - 17:00',
        top: 173.5,
        height: 72,
        left: 50,
        borderColor: palette.violet.violet200,
      },

      {
        title: '재학생 및\n동아리 공연',
        timeRange: '17:30 - 20:00',
        top: 264,
        height: 88,
        left: 50,
        borderColor: palette.violet.violet200,
      },
      {
        title: '아티스트 공연',
        timeRange: '20:00 - 21:30',
        top: 353,
        height: 55.8,
        left: 50,
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
        timeRange: '12:00 - 13:30',
        top: 64,
        height: 55.5,
        left: 50,
        borderColor: palette.puzzle.default,
      },
      {
        title: '일심덕체 2타임',
        timeRange: '14:00 - 15:30',
        top: 136,
        height: 55.5,
        left: 50,
        borderColor: palette.puzzle.default,
      },
      {
        title: '운현가요제',
        timeRange: '18:00 - 20:00',
        top: 280,
        height: 73.5,
        left: 50,
        borderColor: palette.violet.violet200,
      },
      {
        title: '아티스트 공연',
        timeRange: '18:30 - 20:00',
        top: 352,
        height: 20,
        left: 50,
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
        top: 153,
        height: 18.5,
        left: 50,
        borderColor: palette.violet.violet200,
      },
      {
        title: '재학생 및\n동아리 공연',
        timeRange: '16:30 -19:00',
        top: 226,
        height: 92.5,
        left: 50,
        borderColor: palette.violet.violet200,
      },
      {
        title: '보라; 보이는 라디오',
        timeRange: '19:00 - 20:00',
        top: 317,
        height: 37,
        left: 50,
        borderColor: palette.violet.violet200,
      },
      {
        title: '아티스트 공연',
        timeRange: '20:00 - 21:30',
        top: 352,
        height: 55.8,
        left: 50,
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
          compact={e.height <= 20}
          special={e.title === '보라; 보이는 라디오'} // 특정 타이틀일 때만 true
        />
      ))}
      {right.map((e, i) => (
        <BoothBox key={`right-${i}`} {...e} compact={e.height <= 20} special={e.title === '보라; 보이는 라디오'} />
      ))}
    </>
  );
};

export default BoothBoxGroup;
