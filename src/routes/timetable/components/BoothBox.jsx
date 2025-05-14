// @components/TimeTable/BoothBox.jsx
import * as B from '@timetable/components/BoothBoxStyle.js';
import TimeIcon from '@assets/timetable/Time.svg';

const BoothBox = ({
  title,
  timeRange,
  top,
  height,
  left,
  width = 120,
  borderColor,
  compact,
  special,
  lalaland,
  highlight,
  artist,
}) => {
  const getLeftPercent = (side) => {
    if (side === 'left') return 0;
    if (side === 'right') return 50;
    return 0;
  };

  return (
    <B.BoxCon
      top={top}
      height={height}
      left={left}
      width={width}
      borderColor={borderColor}
      compact={compact}
      special={special}
      lalaland={lalaland}
      highlight={highlight}
      artist={artist}
      animate={true}>
      {title.split('\n').map((line, idx) => (
        <h2 key={idx}>{line}</h2>
      ))}

      {/* 시계 이미지 compact 아닐 때만 출력 */}
      {timeRange && !compact && (
        <B.Time special={special}>
          <img src={TimeIcon} alt="time" />
          <div>{timeRange}</div>
        </B.Time>
      )}
    </B.BoxCon>
  );
};

export default BoothBox;
