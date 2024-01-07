import "./App.css";
import { Button, Flex, Layout, Progress, Modal } from "antd";
import FlashCard from "./components/FlashCard";
import ReactQuestions from "./Questions/ReactQuestions.json";
import { useState, useEffect } from "react";
import { GithubOutlined } from "@ant-design/icons";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

const { Header, Footer, Content } = Layout;

const success = () => {
  Modal.success({
    content: "Congratulations. You're done. Reset for new Session.",
  });
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const githubProfileUrl = "https://github.com/moe2008";

  const openGithubProfile = () => {
    window.open(githubProfileUrl, "_blank");
  };

  const goToNextCard = () => {
    if (currentIndex < ReactQuestions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setProgress(100);
      success();
    }
  };

  useEffect(() => {
    setProgress(Math.round((currentIndex / ReactQuestions.length) * 100));
  }, [currentIndex]);

  return (
    <LanguageProvider>
      <Layout>
        <Header style={{ display: "flex" }}>
          <Navbar />
        </Header>
        <Content>
          <Flex
            vertical
            align="center"
            justify="center"
            gap={10}
            style={{ minHeight: "100vh", marginTop: "20px" }}
          >
            <Button style={{ fontFamily: "Karla" }} type="primary">
              Reset
            </Button>
            <Progress
              style={{ maxWidth: "80%", margin: "0px" }}
              percent={progress}
            />
            <FlashCard
              question={ReactQuestions[currentIndex].frage}
              answer={ReactQuestions[currentIndex].antwort}
              code={ReactQuestions[currentIndex].beispielcode}
              goToNextCard={goToNextCard}
            />
          </Flex>
        </Content>
        <Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#001529",
            marginTop: "100px",
          }}
        >
          <h1 style={{ fontSize: "1rem", color: "white", fontFamily: "Karla" }}>
            Visit my Github for more Free Projects
          </h1>
          <Button
            icon={<GithubOutlined />}
            onClick={openGithubProfile}
          ></Button>
        </Footer>
      </Layout>
    </LanguageProvider>
  );
}

export default App;
