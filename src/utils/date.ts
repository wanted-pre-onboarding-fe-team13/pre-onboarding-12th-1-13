export const getToday = () => {
  const today = new Date();
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  return {
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate(),
    day: week[today.getDay()],
  };
};
