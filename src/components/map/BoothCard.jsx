import * as M from './BoothCardStyle';

const renderOwnerTag = (owner) => {
  return owner ? <M.Tag>{owner}</M.Tag> : null;
};

const renderTypesTag = (types) => {
  return types?.filter(Boolean).length > 0 ? <M.Tag>{types.join(' · ')}</M.Tag> : null;
};

const renderTimesTag = (booth) => {
  return booth.times?.filter(Boolean).length > 0 ? renderBoothTimeTag(booth) : null;
};

const renderBoothTimeTag = (booth) => {
  if (!booth.times?.filter(Boolean).length) return null;

  const isFoodTruck = booth.role === 'FOOD_TRUCK';
  const days = ['수요일', '목요일', '금요일'];
  const grouped = booth.times.reduce((acc, cur) => {
    const [day, time] = cur.split(' ');
    if (!day) return acc;
    if (isFoodTruck || !time) {
      acc[day] = acc[day] || [];
      return acc;
    }
    acc[day] = acc[day] ? [...acc[day], time] : [time];
    return acc;
  }, {});
  const order = { 수요일: 1, 목요일: 2, 금요일: 3 };

  const isEveryDay = isFoodTruck
    ? days.every((day) => grouped[day] !== undefined)
    : days.every((day) => grouped[day]?.includes('낮') && grouped[day]?.includes('밤'));

  if (isEveryDay) {
    return <M.Tag>매일</M.Tag>;
  }

  const label = Object.entries(grouped)
    .sort(([a], [b]) => order[a] - order[b])
    .map(([day, times]) => `${day}${times.length ? ' ' + times.join(' ') : ''}`)
    .join(' · ');
  return <M.Tag>{label}</M.Tag>;
};

function BoothCard({ booth, onClick }) {
  return (
    <M.BoothCard onClick={() => onClick?.(booth.id, booth.role)}>
      <M.BoothName>{booth.name}</M.BoothName>
      <M.BoothTags>
        {renderOwnerTag(booth.owner)}
        {renderTypesTag(booth.types)}
        {renderTimesTag(booth)}
      </M.BoothTags>
    </M.BoothCard>
  );
}

export default BoothCard;
