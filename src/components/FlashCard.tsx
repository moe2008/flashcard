import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import "../App.css";
import { Button, Card, Flex } from "antd";

interface FlashCardProps {
  question: string;
  answer: string;
  code: string;
  goToNextCard: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({
  question,
  answer,
  code,
  goToNextCard,
}) => {
  const [isTextVisible, setTextVisibility] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };

  const nextCard = () => {
    setTextVisibility(false);
    goToNextCard();
  };

  return (
    <Card className="FlashCardCard">
      <Flex vertical className="CardFlexWrapper">
        <h1 className="CardQuestion">{question}</h1>
        <p
          className={`CardAnswer text-fade ${
            isTextVisible ? "CardAnswer text-visible" : ""
          }`}
        >
          {answer}
          <pre className="CardCode">
            <code>{code}</code>
          </pre>
        </p>
        <Flex className="CardButtonWrapper">
          <Button type="default" onClick={toggleTextVisibility}>
            Show
          </Button>
          <Button
            type="default"
            onClick={nextCard}
            icon={<RightOutlined />}
          ></Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default FlashCard;
