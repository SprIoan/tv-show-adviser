import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

const FiveStarRating = ({ rating }) => {
  //Declare star icon array
  const starList = [];
  //Store number of filled stars
  const starFillCount = Math.floor(rating);
  //Store if yes or no to half star
  const hasHalfStar = rating - starFillCount >= 0.5;
  //Store number of empty stars
  const starEmptyCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
  //Push the filled star icons
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={i} />);
  }
  //Push the half star icon
  if (hasHalfStar) {
    starList.push(<StarHalf key={starFillCount} />);
  }
  //Push the empty star icons
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(
      <StarEmpty key={starFillCount + (hasHalfStar ? 1 : 0) + i} />
    );
  }
  // Render the star icon array
  return <div>{starList}</div>;
};

export default FiveStarRating;
