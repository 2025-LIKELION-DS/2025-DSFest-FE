// components/BoothCard.jsx
import * as M from '@map/BoothCardStyle';

function BoothCard({ booth }) {
  return (

      <M.BoothCard>
        <M.BoothName>{booth.name}</M.BoothName>
        <M.BoothTags>
          <M.Tag>{booth.owner}</M.Tag>
          {booth.types?.length > 0 && <M.Tag>{booth.types.join(' · ')}</M.Tag>}
          {booth.times?.length > 0 && <M.Tag>{booth.times.join(' · ')}</M.Tag>}
        </M.BoothTags>
      </M.BoothCard>
  );
}

export default BoothCard;