import React from "react";
import { IdcardOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import EN from "../media/en.png";
import DE from "../media/de.png";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { toggleLanguage, language } = useLanguage();

  const languageClassDE =
    language === "DE"
      ? "NavbarLanguageImageDE activeLanguage"
      : "NavbarLanguageImageDE inactiveLanguage";
  const languageClassEN =
    language === "EN"
      ? "NavbarLanguageImageEN activeLanguage"
      : "NavbarLanguageImageEN inactiveLanguage";

  return (
    <React.Fragment>
      <Flex className="NavbarLeftNav">
        <h1 className="NavbarLogo">
          <IdcardOutlined style={{ color: "white", marginRight: "7px" }} />
          Flashcard App
        </h1>
      </Flex>
      <Flex className="NavbarRightNav">
        <img
          src={DE}
          className={languageClassDE}
          alt="de"
          onClick={() => toggleLanguage("DE")}
        />

        <img
          src={EN}
          className={languageClassEN}
          alt="en"
          onClick={() => toggleLanguage("EN")}
        />
      </Flex>
    </React.Fragment>
  );
};

export default Navbar;
