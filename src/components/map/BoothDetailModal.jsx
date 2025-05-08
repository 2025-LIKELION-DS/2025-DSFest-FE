import React, { Fragment } from 'react';
import * as M from './BoothDetailModalStyle';

const renderBoothTimeTag = (booth) => {
  if (!Array.isArray(booth.times) || booth.times.length === 0) return null;

  const timesSet = new Set(booth.times);
  const allTimes = ['수요일 낮', '수요일 밤', '목요일 낮', '목요일 밤', '금요일 낮', '금요일 밤'];
  const isEveryDay = allTimes.every((time) => timesSet.has(time));

  const sortedTimes = [];
  ['수요일', '목요일', '금요일'].forEach((day) => {
    const parts = [];
    if (booth.times.includes(`${day} 낮`)) parts.push('낮');
    if (booth.times.includes(`${day} 밤`)) parts.push('밤');
    if (parts.length > 0) {
      sortedTimes.push(`${day} ${parts.join(' ')}`);
    }
  });
  return <M.Tag>{isEveryDay ? '매일' : sortedTimes.join(' · ')}</M.Tag>;
};

const renderBoothDetailText = (details) =>
  details
    ? details.split('\n').map((line, idx) => (
        <Fragment key={idx}>
          {line}
          <br />
        </Fragment>
      ))
    : null;

const renderBoothLinks = (links) =>
  Array.isArray(links)
    ? links.map((url, idx) => {
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
          <M.Link key={idx} href={url} target="_blank" rel="홍보 링크r">
            {linkText}
          </M.Link>
        );
      })
    : null;

const renderOwnerTag = (owner) => (owner ? <M.Tag>{owner}</M.Tag> : null);

const renderTypesTag = (types) =>
  Array.isArray(types) && types.length > 0 ? <M.Tag>{types.join(' · ')}</M.Tag> : null;

const renderTimesTag = (booth) =>
  Array.isArray(booth.times) && booth.times.length > 0 ? renderBoothTimeTag(booth) : null;

const renderBoothTags = (booth) => {
  if (!booth) return null;
  return (
    <M.BoothTags>
      {renderOwnerTag(booth.owner)}
      {renderTypesTag(booth.types)}
      {renderTimesTag(booth)}
    </M.BoothTags>
  );
};

function BoothDetailModal({ booth, isHint }) {
  if (!booth) return null;

  return (
    <M.DetailModal isHint={isHint} onClick={(e) => e.stopPropagation()}>
      <M.BoothName>{booth.name}</M.BoothName>
      <M.Detail>{renderBoothDetailText(booth.details)}</M.Detail>
      <M.LinkWrapper>{renderBoothLinks(booth.link)}</M.LinkWrapper>
      {!isHint && renderBoothTags(booth)}
    </M.DetailModal>
  );
}

export default BoothDetailModal;
