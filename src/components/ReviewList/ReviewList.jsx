import { ReviewListItem } from '../ReviewListItem/ReviewListItem';

export const ReviewList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ReviewListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};