import CircleType from 'circletype';

export const useInsightCircleType = () => {
  const circleType = new CircleType(
    document.querySelector('.hero__circle-text'),
  );
  circleType.radius();
  circleType.forceWidth(true);
};
