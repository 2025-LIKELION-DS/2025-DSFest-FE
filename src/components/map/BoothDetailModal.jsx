import React from 'react';
import * as M from './BoothDetailModalStyle';

function BoothDetailModal({ booth, isHint }) {
  if (!booth) return null;

  return (
    <M.DetailModal isHint={isHint} onClick={(e) => e.stopPropagation()}>
      <M.BoothName>{booth.name}</M.BoothName>
      <M.Detail>
        {booth.details
          ? booth.details.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))
          : null}
      </M.Detail>
      <M.LinkWrapper>
        {Array.isArray(booth.link) &&
          booth.link.map((url, idx) => {
            let linkText = `홍보 링크 ${idx + 1} 바로가기`;
            if (url.startsWith('https://everytime.kr')) {
              linkText = '에브리타임 홍보 링크 바로가기';
            } else if (url === 'https://www.instagram.com/ikki__.studio') {
              linkText = '콜라보 인스타그램 링크 바로가기';
            } else if (url.startsWith('https://www.instagram.com')) {
              linkText = '인스타그램 링크 바로가기';
            } else if (url.startsWith('https://youtube.com')) {
              linkText = '유튜브 링크 바로가기';
            }
            return (
              <M.Link key={idx} href={url} target="_blank" rel="noopener noreferrer">
                {linkText}
              </M.Link>
            );
          })}
      </M.LinkWrapper>
      {!isHint && (
        <M.BoothTags>
          {booth.owner && <M.Tag>{booth.owner}</M.Tag>}
          {Array.isArray(booth.types) && booth.types.length > 0 && <M.Tag>{booth.types.join(' · ')}</M.Tag>}
          {Array.isArray(booth.times) && booth.times.length > 0 && (
            <M.Tag>
              {(() => {
                const timesSet = new Set(booth.times);
                const allTimes = ['수요일 낮', '수요일 밤', '목요일 낮', '목요일 밤', '금요일 낮', '금요일 밤'];
                const isEveryDay = allTimes.every((time) => timesSet.has(time));
                return isEveryDay ? '매일' : booth.times.join(' · ');
              })()}
            </M.Tag>
          )}
        </M.BoothTags>
      )}
    </M.DetailModal>
  );
}

export default BoothDetailModal;
//
