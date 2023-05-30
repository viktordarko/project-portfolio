import { useEffect, useState } from "react";
import { BlinkingH1 } from "./Homepage";

const Contact = () => {
    const [isBlinking, setisBlinking] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setisBlinking(!isBlinking);
      }, 1000);
      return () => clearInterval(interval);
    }, [isBlinking]);

    return (
        <BlinkingH1>Contact me</BlinkingH1>
    )
}
export default Contact