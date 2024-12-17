import { createGlobalStyle } from "styled-components";

import BoldFont from "./LibreBaskerville-Bold.ttf";
import RegularFont from "./LibreBaskerville-Regular.ttf";
import ItalicFont from "./LibreBaskerville-Italic.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "bold";
        src: url(${BoldFont});
    }

    @font-face {
        font-family: "regular";
        src: url(${RegularFont});
    }

    @font-face {
        font-family: "italic";
        src: url(${ItalicFont});
    }
`;