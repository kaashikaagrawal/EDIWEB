import { BsHeartFill, BsHeartHalf, BsHeart } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  margin: 15px 5px 0 7px;
  display: flex;
  .stars {
    display: flex;
    color: #fb8b24;
    margin: 0 5px 0 0;
  }
`;

const Rating = ({ rating }) => {
  return (
    <RatingWrapper>
      <div className="flex mt-1 text-yellow-400 stars">
        <span>
          {rating >= 1 ? (
            <BsHeartFill />
          ) : rating >= 0.5 ? (
            <BsHeartHalf />
          ) : (
            <BsHeart />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <BsHeartFill />
          ) : rating >= 1.5 ? (
            <BsHeartHalf />
          ) : (
            <BsHeart />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <BsHeartFill />
          ) : rating >= 2.5 ? (
            <BsHeartHalf />
          ) : (
            <BsHeart />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <BsHeartFill />
          ) : rating >= 3.5 ? (
            <BsHeartHalf />
          ) : (
            <BsHeart />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <BsHeartFill />
          ) : rating >= 4.5 ? (
            <BsHeartHalf />
          ) : (
            <BsHeart />
          )}
        </span>
      </div>
      <div>{rating} on 5 hearts</div>
    </RatingWrapper>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
