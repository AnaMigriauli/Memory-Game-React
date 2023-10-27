import CustomSoloPlayer from "./CustomSoloPlayer";
import MultiplePlayer from "./MultiPlayer";
import icon1 from "../assets/images/1.svg";
import icon2 from "../assets/images/2.svg";
import icon3 from "../assets/images/3.svg";
import icon4 from "../assets/images/4.svg";
import icon5 from "../assets/images/5.svg";
import icon6 from "../assets/images/6.svg";
import icon7 from "../assets/images/7.svg";
import icon8 from "../assets/images/8.svg";
import icon9 from "../assets/images/9.svg";
import icon10 from "../assets/images/10.svg";
import icon11 from "../assets/images/11.svg";
import icon12 from "../assets/images/12.svg";
import icon13 from "../assets/images/13.svg";
import icon14 from "../assets/images/14.svg";
import icon15 from "../assets/images/15.svg";
import icon16 from "../assets/images/16.svg";
import icon17 from "../assets/images/17.svg";
import icon18 from "../assets/images/18.svg";

const iconsArrEasy = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
const iconsArrHard = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
  icon15,
  icon16,
  icon17,
  icon18,
];
export const EasyMemoryGameNumber = () => <CustomSoloPlayer totalPairs={8} />;
export const HardMemoryGameNumber = () => <CustomSoloPlayer totalPairs={18} />;
export const EasyMemoryGameIcon = () => (
  <CustomSoloPlayer iconsArr={iconsArrEasy} />
);
export const HardMemoryGameIcon = () => (
  <CustomSoloPlayer iconsArr={iconsArrHard} />
);
export const EasyMultiplePlayerNumber = ({ isThreePlayer, isForthPlayer }) => {
  return (
    <MultiplePlayer
      totalPairs={8}
      isThreePlayer={isThreePlayer}
      isForthPlayer={isForthPlayer}
    />
  );
};
export const HardMultiplePlayerNumber = ({ isThreePlayer, isForthPlayer }) => (
  <MultiplePlayer
    totalPairs={18}
    isThreePlayer={isThreePlayer}
    isForthPlayer={isForthPlayer}
  />
);
export const EasyMultiplePlayerIcon = ({ isThreePlayer, isForthPlayer }) => (
  <MultiplePlayer
    iconsArr={iconsArrEasy}
    isThreePlayer={isThreePlayer}
    isForthPlayer={isForthPlayer}
  />
);
export const HardMultiplePlayerIcon = ({ isThreePlayer, isForthPlayer }) => (
  <MultiplePlayer
    iconsArr={iconsArrHard}
    isThreePlayer={isThreePlayer}
    isForthPlayer={isForthPlayer}
  />
);
