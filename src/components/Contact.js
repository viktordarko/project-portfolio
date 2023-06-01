import { useEffect, useState } from "react";
import { BlinkingH1 } from "./Homepage";
import { contact } from "../data";
import styled from "styled-components";
import ContactItem from "./ContactItem";

const Contact = () => {
  const [isBlinking, setisBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setisBlinking(!isBlinking);
    }, 1000);
    return () => clearInterval(interval);
  }, [isBlinking]);

  const contactArray = Object.values(contact);
  return (
    <>
      <BlinkingH1>Contact me</BlinkingH1>
      <ContactDiv>
        {contactArray.map((contact) => {
          return <ContactItem item={contact} key={contact.id} />;
        })}
      </ContactDiv>
    </>
  );
};
export default Contact;

const ContactDiv = styled.div`
  display: flex;
  margin-top: 5em;
  font-size: x-large;
  width: 100%;
  justify-content: space-around;
  height: 64vh;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    position: relative;
    margin-top: 0.5em;
  }
`;
