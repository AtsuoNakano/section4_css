import "./styles.css";
import { InlineStyle } from "./componets/InlineStyle";
import { CssModules } from "./componets/CssModules";
import { StyledJsx } from "./componets/StyledJsx";
import { StyledComponents } from "./componets/StyledComponents";
import { Emotion } from "./componets/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
