import palette from '@styles/theme';

const TimeLineGrid = ({ gap = 45, height = 134, startX = 21.5 }) => {
  const startHour = 7;
  const count = 35; // 7:00 ~ 24:30 (0.5시간 단위, 35칸)
  const lines = Array.from({ length: count }, (_, i) => {
    const label =
      i % 2 === 0
        ? String((startHour + i / 2) % 24 || '0') // 24시 → 0시 표기
        : '·';
    return {
      x: startX + i * gap,
      label,
    };
  });

  const width = startX + (count - 1) * gap + 40;

  return (
    <svg width={width} height={height + 30} viewBox={`0 0 ${width} ${height + 30}`} xmlns="http://www.w3.org/2000/svg">
      {/* 세로 점선 */}
      <g stroke={palette.grayscale.ef} strokeLinecap="round" strokeDasharray="7 7">
        {lines.map((line, i) => (
          <path key={`line-${i}`} d={`M${line.x} 0.5V${height}`} />
        ))}
      </g>

      {/* 텍스트 */}
      <g fill={palette.grayscale.text88} fontSize="10" fontFamily="Pretendard, sans-serif">
        {lines.map((line, i) => (
          <text key={`text-${i}`} x={line.x} y={height + 15} textAnchor="middle">
            {line.label}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default TimeLineGrid;
