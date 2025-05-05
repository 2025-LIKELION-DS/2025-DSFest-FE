import * as M from './BoothCardStyle';

function BoothCard({ booth }) {
  return (
    <M.BoothCard>
      <M.BoothName>{booth.name}</M.BoothName>
      <M.BoothTags>
        {booth.owner && <M.Tag>{booth.owner}</M.Tag>}
        {booth.types?.filter(Boolean).length > 0 && <M.Tag>{booth.types.join(' · ')}</M.Tag>}
        {booth.times?.filter(Boolean).length > 0 &&
          (() => {
            const grouped = booth.times.reduce((acc, cur) => {
              const [day, time] = cur.split(' ');
              if (!day || !time) return acc;
              acc[day] = acc[day] ? [...acc[day], time] : [time];
              return acc;
            }, {});
            const order = { 수요일: 1, 목요일: 2, 금요일: 3 };
            const sorted = Object.entries(grouped)
              .sort(([a], [b]) => order[a] - order[b])
              .map(([day, times]) => [day, times.sort((a, b) => (a === '낮' ? -1 : 1))]);
            const isEveryDay = ['수요일', '목요일', '금요일'].every(
              (day) => grouped[day] && grouped[day].includes('낮') && grouped[day].includes('밤'),
            );
            if (isEveryDay) {
              return <M.Tag>매일</M.Tag>;
            }
            const label = sorted.map(([day, times]) => `${day} ${times.join(' ')}`).join(' · ');
            return <M.Tag>{label}</M.Tag>;
          })()}
      </M.BoothTags>
    </M.BoothCard>
  );
}

export default BoothCard;
