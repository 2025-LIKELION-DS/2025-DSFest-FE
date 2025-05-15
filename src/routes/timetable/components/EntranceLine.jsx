import palette from '@styles/theme';

const EntranceLine = ({ top, label }) => (
  <div
    style={{
      position: 'absolute',
      top: `${top - 4}px`,
      left: '75%',
      transform: 'translateX(-50%)',
      width: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '12px',
      color: `${palette.grayscale.text33}`,
      paddingLeft: '4px',
      pointerEvents: 'none',
      zIndex: 10000,
    }}>
    {/* 위쪽 전체 선 */}
    <div
      style={{
        position: 'absolute',
        top: '-1px',
        left: 0,
        width: '100%',
        height: '1px',
        backgroundColor: `${palette.grayscale.black}`,
      }}
    />

    <span style={{ marginRight: '4px' }}>↓</span>
    <span>{label}</span>
    {/* 오른쪽 줄 제거됨 */}
  </div>
);
export default EntranceLine;
