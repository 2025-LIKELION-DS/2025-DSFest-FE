import palette from '@styles/theme';

const GAP = 45; // 30분당 45px
const START_X = 21.5; // 7시 시작 좌표
const START_HOUR = 7;

const getMinutes = ([h, m]) => h * 60 + m;

const getLeft = ([hour, minute]) => {
  const totalMinutes = (hour - START_HOUR) * 60 + minute;
  const pxPerMinute = GAP / 30;
  return START_X + totalMinutes * pxPerMinute;
};

const getWidth = (start, end) => {
  const pxPerMinute = GAP / 30;
  return (getMinutes(end) - getMinutes(start)) * pxPerMinute;
};

const rawSchedule = {
  '14(WED)': [
    {
      label: '<라라랜드> 상영',
      start: [15, 0],
      end: [17, 0],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '재학생 및 동아리 공연',
      start: [17, 30],
      end: [20, 0],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '아티스트\n공연',
      start: [20, 0],
      end: [21, 30],
      top: 27.75,
      color: palette.violet.violet200,
    },

    {
      label: '낮 부스 (수익사업)',
      start: [11, 0],
      end: [14, 30],
      top: 82.75,
      color: palette.puzzle.violet,
    },
    {
      label: '밤 부스 (수익사업)',
      start: [16, 0],
      end: [19, 30],
      top: 82.75,
      color: palette.puzzle.violet,
    },
  ],
  '15(THU)': [
    {
      label: '일심덕체 1타임',
      start: [12, 0],
      end: [13, 30],
      top: 27.75,
      color: palette.puzzle.default,
    },
    {
      label: '일심덕체 2타임',
      start: [14, 0],
      end: [15, 30],
      top: 27.75,
      color: palette.puzzle.default,
    },
    {
      label: '운현가요제',
      start: [18, 0],
      end: [20, 0],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '아티스트\n공연',
      start: [20, 0],
      end: [20, 30],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '낮 부스 (수익사업)',
      start: [11, 0],
      end: [14, 30],
      top: 82.75,
      color: palette.puzzle.violet,
    },
    {
      label: '밤 부스 (수익사업)',
      start: [16, 0],
      end: [19, 30],
      top: 82.75,
      color: palette.puzzle.violet,
    },
  ],
  '16(FRI)': [
    {
      label: '여운의 조각',
      start: [16, 0],
      end: [16, 30],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '재학생 및 동아리 공연',
      start: [16, 30],
      end: [19, 0],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '보라; 보이는 라디오',
      start: [19, 0],
      end: [20, 0],
      top: 27.75,
      color: palette.violet.violet200,
    },
    {
      label: '아티스트\n공연',
      start: [20, 0],
      end: [21, 30],
      top: 27.75,
      color: palette.violet.violet200,
    },

    {
      label: '낮 부스 (수익사업)',
      start: [11, 0],
      end: [14, 30],
      top: 82.75,
      color: palette.puzzle.violet,
    },
    {
      label: '밤 부스 (수익사업)',
      start: [16, 0],
      end: [19, 30],
      top: 82.75,
      color: palette.puzzle.violet,
    },
  ],
};

const scheduleData = Object.fromEntries(
  Object.entries(rawSchedule).map(([date, events]) => [
    date,
    events.map(({ label, start, end, top, color }) => ({
      label,
      top,
      color,
      left: getLeft(start),
      width: getWidth(start, end),
    })),
  ]),
);

export default scheduleData;
