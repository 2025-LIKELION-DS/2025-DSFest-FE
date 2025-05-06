import React from 'react';
import * as M from './FoodCardStyle';

function FoodCard({ foodBooth }) {
  console.log('FoodCard 받은 데이터:', foodBooth);
  if (!foodBooth) return null;

  const renderCard = (booth) => {
    const { id, boothName, boothType = [], scheduleDescription = [], menus = [], boothRole } = booth;
    return (
      <M.FoodCard key={id}>
        <M.BoothName>{boothName}</M.BoothName>
        {menus.map((menu) => (
          <M.MenuLine key={menu.id}>
            <M.Menu>{menu.menu}</M.Menu>
            <M.Price>{menu.price}</M.Price>
          </M.MenuLine>
        ))}
        <M.BoothTags>
          {boothRole === 'FOOD_TRUCK' && <M.Tag>푸드트럭</M.Tag>}
          {boothType.filter(Boolean).length > 0 && <M.Tag>{boothType.join(' · ')}</M.Tag>}
          {scheduleDescription.filter(Boolean).length > 0 &&
            (() => {
              const hasAllDays = ['수요일', '목요일', '금요일'].every((day) => scheduleDescription.includes(day));
              if (hasAllDays) {
                return <M.Tag>매일</M.Tag>;
              }
              return <M.Tag>{scheduleDescription.join(' · ')}</M.Tag>;
            })()}
        </M.BoothTags>
      </M.FoodCard>
    );
  };

  return Array.isArray(foodBooth) ? foodBooth.map(renderCard) : renderCard(foodBooth);
}

export default FoodCard;
//
