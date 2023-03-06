import styled from "styled-components";

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
`;

const InfoAndImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Image = styled.img`
  width: 150px;
  border-radius: 30%;
`;

const RecipeTitle = styled.h2`
  text-align: right;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

const TimeToCook = styled.div`
  font-size: 1.1rem;
  padding-left: 2px;
`;

const ClockIcon = styled.span`
  font-size: 1.3rem;
`;

const DietaryWrapper = styled.div`
  text-align: right;
`;

const DietaryInfo = styled.div``;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  text-align: left;
  padding: 20px;
  background-color: var(--faint-light-grey);
  border-radius: 20px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const NavBarButton = styled.button`
  font-size: 18px;
  background-color: inherit;
  border: 0;
  color: var(--text-color);
`;

const SubsectionTitle = styled.h3`
  text-align: center;
`;

const Ingredient = styled.div`
  border: 0;
  border-bottom: 1px;
  border-style: solid;
  border-color: var(--mid-grey);
`;

const Instruction = styled.div``;

const StepNumber = styled.div`
  border: 0;
  border-bottom: 1px;
  border-style: solid;
  border-color: var(--mid-grey);
`;

const Step = styled.div``;

const styles = {
  RecipeWrapper,
  RecipeTitle,
  ImageWrapper,
  Image,
  TimeWrapper,
  TimeToCook,
  ClockIcon,
  DietaryInfo,
  DietaryWrapper,
  ListWrapper,
  Ingredient,
  Instruction,
  InfoWrapper,
  InfoAndImageWrapper,
  SubsectionTitle,
  StepNumber,
  Step,
  NavBar,
  NavBarButton,
};

export default styles;
