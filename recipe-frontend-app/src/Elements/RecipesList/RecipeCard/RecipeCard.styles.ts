import styled from "styled-components";

const RecipeCardWrapper = styled.div`
  max-width: 200px;
  min-width: 200px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightest-grey);
  border-radius: 6px;
  padding: 10px;
  box-shadow: 2px 2px 2px var(--dark-grey);
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 150px;
  border-radius: 10px;
  border: solid var(--light-grey);
  box-shadow: 1px 1px 1px var(--light-grey);
`;

const RecipeName = styled.div`
  font-size: 17px;
`;

const TimeWrapper = styled.div`
  display: flex;
  gap: 2px;
  color: var(--dark-grey);
  min-width: 100%;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-size: 14px;
  padding-top: 2px;
`;

const ClockIcon = styled.span`
  font-size: 14px;
`;

const TimeTaken = styled.div``;

const styles = {
  RecipeCardWrapper,
  ImageWrapper,
  Image,
  RecipeName,
  TimeWrapper,
  ClockIcon,
  TimeTaken,
};

export default styles;
