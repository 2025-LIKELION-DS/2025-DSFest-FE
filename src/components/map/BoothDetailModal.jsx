import React from 'react';
import * as M from './BoothDetailModalStyle';

function BoothDetailModal({ booth, isHint }) {
  if (!booth) return null;

  return (
        <M.DetailModal isHint={isHint} onClick={(e) => e.stopPropagation()}>
        <M.BoothName>{booth.name}</M.BoothName>
        <M.Detail>{booth.details}</M.Detail>
        {booth.link && (
          <M.Link href={booth.link}>
            {booth.link}
          </M.Link>
        )}
        <M.BoothTags>
          {booth.owner && <M.Tag>{booth.owner}</M.Tag>}
          {Array.isArray(booth.types) && booth.types.length > 0 && <M.Tag>{booth.types.join(' · ')}</M.Tag>}
          {Array.isArray(booth.times) && booth.times.length > 0 && <M.Tag>{booth.times.join(' · ')}</M.Tag>}
        </M.BoothTags>
      </M.DetailModal>
  );
}

export default BoothDetailModal;