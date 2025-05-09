import React from 'react';
import * as M from './FoodCardStyle';

const renderScheduleTag = (scheduleDescription) => {
  if (!Array.isArray(scheduleDescription) || scheduleDescription.length === 0) return null;

  if (scheduleDescription.includes('매일')) {
    return <M.Tag>매일</M.Tag>;
  }

  const days = ['수요일', '목요일', '금요일'];
  const uniqueDays = Array.from(
    new Set(scheduleDescription.flatMap((desc) => days.filter((day) => desc.includes(day)))),
  );

  return <M.Tag>{uniqueDays.join(' · ')}</M.Tag>;
};

const renderBoothRoleTag = (boothRole) => (boothRole === 'FOOD_TRUCK' ? <M.Tag>푸드트럭</M.Tag> : null);

const renderBoothTypeTag = (boothType) =>
  boothType.filter(Boolean).length > 0 ? <M.Tag>{boothType.join(' · ')}</M.Tag> : null;

const renderBoothScheduleTag = (scheduleDescription) => renderScheduleTag(scheduleDescription);

function FoodCard({ foodBooth, selectedDayTime }) {
  if (!foodBooth) return null;

  const renderCard = (booth) => {
    const { id, boothName, boothType = [], boothRole, scheduleDescription = [], menus = [] } = booth;

    const [selectedDay] = selectedDayTime.split(' ');

    const matchesSchedule =
      scheduleDescription.includes('매일') || scheduleDescription.some((desc) => desc.includes(selectedDay));

    if (!matchesSchedule) {
      return null;
    }

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
          {renderBoothRoleTag(boothRole)}
          {renderBoothTypeTag(boothType)}
          {renderBoothScheduleTag(scheduleDescription)}
        </M.BoothTags>
      </M.FoodCard>
    );
  };

  if (Array.isArray(foodBooth)) {
    return foodBooth.map(renderCard).filter(Boolean);
  }
  return renderCard(foodBooth);
}

export default FoodCard;
