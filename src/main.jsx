import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App.jsx";
import * as C from "@styles/CommonStyle.js";
import { register } from "@utils/serviceWorkerRegistration";

import YeounLogo from "@assets/responsive/title-yeoun.svg";
import YeounText from "@assets/responsive/text-yeoun.svg";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <C.Page>
        <C.LeftContainer>
          <C.YeounLeft src={YeounLogo} alt="여운" />
        </C.LeftContainer>
        <C.Phone>
          <App />
        </C.Phone>
        <C.RightContainer>
          <C.YeounRight src={YeounText} alt="덕성여대 근화제" />
        </C.RightContainer>
      </C.Page>
    </BrowserRouter>
  </StrictMode>,
);

register();
