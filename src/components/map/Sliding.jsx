import React from 'react';
import * as M from '@map/MapStyle';
import BoothCard from './BoothCard';

function SlidingPanelSection({ panelHeight, setPanelHeight, controls, selectedTags, handleTagClick, filteredBooths }) {
  return (
    <M.SlidingPanel
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0}
      animate={{ height: panelHeight }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onDrag={(info) => {
        const deltaY = info.delta.y;
        const newHeight = Math.min(window.innerHeight * 0.92, Math.max(93, panelHeight - deltaY));
        setPanelHeight(newHeight);
      }}
      onDragEnd={() => {
        if (panelHeight > 500) {
          setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.83 : 740);
        }
        else if (panelHeight < 200) setPanelHeight(window.innerWidth <= 768 ? 105 : 93);
        else {
          setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490);
        }
      }}
    >
      <M.TouchSection onPointerDown={(e) => controls.start(e)} style={{ cursor: 'grab', paddingTop: 15 }}>
        <M.BarContainer>
          <M.Bar />
        </M.BarContainer>

        <M.TagFilterContainer>
          {['전체', '체험부스', '판매부스', '푸드트럭', '기타'].map((tag) => (
            <M.TagFilter key={tag} $selected={selectedTags.includes(tag)} onClick={() => handleTagClick(tag)}>
              {tag}
            </M.TagFilter>
          ))}
        </M.TagFilterContainer>
      </M.TouchSection>

      <M.BoothContentArea>
        {filteredBooths.map((booth, index) => (
          <BoothCard
            key={index}
            booth={{
              id: booth.id,
              name: booth.boothName,
              owner: booth.boothOperator,
              types: booth.boothType,
              times: booth.schedules.map((s) => `${s.day} ${s.time}`),
              details: booth.boothIntroduce,
              link: booth.boothSite,
            }}
          />
        ))}
      </M.BoothContentArea>
    </M.SlidingPanel>
  );
}

export default SlidingPanelSection;
// 
