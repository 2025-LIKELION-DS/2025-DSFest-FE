import palette from '@styles/theme';

const TimeLineGrid = ({ gap = 45, height = 134, startX = 21.5 }) => {
  const count = 27; // 9:00 ~ 23:00 (0.5시간 단위)
  const lines = Array.from({ length: count }, (_, i) => ({
    x: startX + i * gap,
    label: i % 2 === 0 ? String(9 + i / 2) : '·',
  }));

  const width = startX + (count - 1) * gap + 40;

  return (
    <svg width={width} height={height + 30} viewBox={`0 0 ${width} ${height + 30}`} xmlns="http://www.w3.org/2000/svg">
      {/* 세로 점선들 */}
      <g stroke={palette.grayscale.ef} strokeLinecap="round" strokeDasharray="7 7">
        {lines.map((line, i) => (
          <path key={`line-${i}`} d={`M${line.x} 0.5V${height}`} />
        ))}
      </g>

      {/* 텍스트 (숫자 또는 점) */}
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
