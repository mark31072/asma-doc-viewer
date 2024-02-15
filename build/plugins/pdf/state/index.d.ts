import { FC } from "react";
import { IMainState } from "../../../state/reducer";
declare const PDFContext: any;
declare const PDFProvider: FC<{
    mainState: IMainState;
}>;
export { PDFContext, PDFProvider };
