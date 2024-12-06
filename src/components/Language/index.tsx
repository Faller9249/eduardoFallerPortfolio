import React, { useState } from "react";
import {
  Languages,
  useInternationalization,
} from "../../hooks/internationalization";
import { LanguageContainer, FabContainer, OptionList } from "./styles";

const Language = ({ style: style }: { style?: any }) => {
  const { changeLanguage } = useInternationalization();
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleOptions = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (language: Languages) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Reset após a animação
  };

  return (
    <LanguageContainer style={style}>
      <FabContainer>
        <div
          className={`main ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          <button className="main" onClick={toggleOptions}>
            <img src="/translate/language.svg" alt="Languages" />
          </button>
        </div>
        <OptionList isOpen={isOpen}>
          <li>
            <button onClick={() => handleLanguageChange(Languages.PTBR)}>
              <img
                className="language-icon"
                src="/translate/brazil.svg"
                alt="Portuguese"
              />
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageChange(Languages.EN)}>
              <img
                className="language-icon"
                src="/translate/unitedStates.svg"
                alt="English"
              />
            </button>
          </li>
          <li>
            <button onClick={() => handleLanguageChange(Languages.ES)}>
              <img
                className="language-icon"
                src="/translate/spanish.svg"
                alt="Spanish"
              />
            </button>
          </li>
        </OptionList>
      </FabContainer>
    </LanguageContainer>
  );
};

export default Language;
