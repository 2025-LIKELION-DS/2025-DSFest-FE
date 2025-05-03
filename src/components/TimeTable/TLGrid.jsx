import React from 'react';
import palette from '@styles/theme';

// 피그마 상 35px로 되어있지만, 점선 하나당 좌우 5px씩 추가되어있어서 -> 45px
const TimeLineGrid = ({ count = 25, gap = 45, height = 134, startX = 21.5 }) => {
  const lines = Array.from({ length: count }, (_, i) => ({
    x: startX + i * gap,
    label: i % 2 === 0 ? String(9 + i / 2) : '·', // 9부터 시작해 0.5 단위 건너뜀
  }));

  return (
    <svg
      width={startX + (count - 1) * gap + 40}
      height={height + 30} // 아래 텍스트 공간 확보
      viewBox={`0 0 ${startX + (count - 1) * gap + 40} ${height + 30}`}
      xmlns="http://www.w3.org/2000/svg">
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
