import SharedCard from "./shared/SharedCard";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    topic: "Customizing Styles with Ant Design",
    navigationUrl: "/",
  },
  {
    topic: "Ant Form with React 19",
    navigationUrl: "/",
  },
  {
    topic: "Customized Sidebar with Ant Design",
    navigationUrl: "/",
  },
];

const WelcomeCards = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row gap-3 justify-around items-center">
      {cardData.map((card) => (
        <SharedCard
          onClick={() => navigate(card.navigationUrl)}
          className="!bg-rose hover:rounded-xl hover:cursor-pointer hover:!border-8 hover:!border-rose hover:!bg-copper"
        >
          {card.topic}
        </SharedCard>
      ))}
    </div>
  );
};

export default WelcomeCards;
