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
        top: 215,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
    ],
    right: [
      {
        title: '영화상영',
        timeRange: '15:30 - 17:30',
        top: 196.5,
        height: 74,
        left: 134,
        borderColor: palette.violet.violet200,
      },

      {
        title: '재학생 및\n동아리 공연',
        timeRange: '17:30 - 20:00',
        top: 271,
        height: 88,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '연예인 공연',
        top: 360,
        height: 18.5,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '연예인 공연',
        top: 380,
        height: 18.5,
        left: 134,
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
        top: 215,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
    ],
    right: [
      {
        title: '일심덕체 1타임',
        timeRange: '12:00 - 13:30',
        top: 66,
        height: 55.5,
        left: 134,
        borderColor: palette.puzzle.default,
      },
      {
        title: '일심덕체 2타임',
        timeRange: '14:00 - 15:30',
        top: 140,
        height: 55.5,
        left: 134,
        borderColor: palette.puzzle.default,
      },
      {
        title: '운현가요제',
        timeRange: '18:30 - 20:00',
        top: 305,
        height: 56,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '연예인 공연',
        timeRange: '18:30 - 20:00',
        top: 362,
        height: 20,
        left: 134,
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
        top: 215,
        height: 128,
        left: 0,
        borderColor: palette.puzzle.violet,
      },
    ],
    right: [
      {
        title: '총학생회 콘텐츠1',
        timeRange: '14:30 - 16:30',
        top: 161,
        height: 68,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '재학생 및\n동아리 공연',
        timeRange: '16:30 -19:00',
        top: 230,
        height: 95,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '총학생회 콘텐츠2',
        timeRange: '19:00 - 20:00',
        top: 325.5,
        height: 40,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '연예인 공연',
        top: 362,
        height: 18.5,
        left: 134,
        borderColor: palette.violet.violet200,
      },
      {
        title: '연예인 공연',
        top: 380.5,
        height: 18.5,
        left: 134,
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
        <BoothBox key={`left-${i}`} {...e} compact={e.height <= 20} />
      ))}
      {right.map((e, i) => (
        <BoothBox key={`right-${i}`} {...e} compact={e.height <= 20} />
      ))}
    </>
  );
};

export default BoothBoxGroup;
