import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Button, LinkButton } from "../../../components/common";
import { IStyledProps } from "../../../types";
import { PDFContext } from "../state";
import { setPDFPaginated, setZoomLevel } from "../state/actions";
import { initialPDFState } from "../state/reducer";
import {
  DownloadPDFIcon,
  PrintPDFIcon,
  ResetZoomPDFIcon,
  TogglePaginationPDFIcon,
  ZoomInPDFIcon,
  ZoomOutPDFIcon,
} from "./icons";
import PDFPagination from "./PDFPagination";

const PDFControls: FC<{}> = () => {
  const {
    state: { mainState, paginated, zoomLevel, numPages },
    dispatch,
  } = useContext(PDFContext);

  const currentDocument = mainState?.currentDocument || null;
  const [printModalOpen, setPrintModalOpen] = useState(false);

  const handlePrint = () => {
    console.log('Printing...');

    const fileData = currentDocument?.fileData as string;

    // Create an iframe dynamically
    const printFrame = document.createElement('iframe');
    printFrame.style.visibility = 'hidden';
    printFrame.src = fileData;

    // Append the iframe to the document body
    document.body.appendChild(printFrame);

    // Set focus and print the content
    printFrame.contentWindow?.focus();
    printFrame.contentWindow?.print();

    // Remove the iframe after printing
    document.body.removeChild(printFrame);
  };

  const closePrintModal = () => {
    setPrintModalOpen(false);
  };
  

  return (
    <Container id="pdf-controls">
      {paginated && numPages > 1 && <PDFPagination />}

      {currentDocument?.fileData && (
        <DownloadButton
          id="pdf-download"
          href={currentDocument?.fileData as string}
          download={currentDocument?.fileName || currentDocument?.uri}
        >
          <DownloadPDFIcon color="#000" size="75%" />
        </DownloadButton>
      )}
     {printModalOpen && (
        <PrintModal>
          <span>Loading...</span>
          {/* You can add a loading indicator or any other content while waiting for the print */}
        </PrintModal>
      )}

      <ControlButton id="pdf-print" onClick={handlePrint}>
        <PrintPDFIcon color="#000" size="65%" />
      </ControlButton>

      <ControlButton id="pdf-print" onClick={handlePrint}>
        <PrintPDFIcon color="#000" size="65%" />
      </ControlButton>
   
    {/* <ControlButton
        id="pdf-print"
        onClick={handlePrint}
      >
         <PrintPDFIcon color="#000" size="65%" />
      </ControlButton> */}

      <ControlButton
        id="pdf-zoom-out"
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel - 0.1))}
      >
        <ZoomOutPDFIcon color="#000" size="80%" />
      </ControlButton>

      <ControlButton
        id="pdf-zoom-in"
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel + 0.1))}
      >
        <ZoomInPDFIcon color="#000" size="80%" />
      </ControlButton>

      <ControlButton
        id="pdf-zoom-reset"
        onMouseDown={() => dispatch(setZoomLevel(initialPDFState.zoomLevel))}
        disabled={zoomLevel === initialPDFState.zoomLevel}
      >
        <ResetZoomPDFIcon color="#000" size="70%" />
      </ControlButton>

      {numPages > 1 && (
        <ControlButton
          id="pdf-toggle-pagination"
          onMouseDown={() => dispatch(setPDFPaginated(!paginated))}
        >
          <TogglePaginationPDFIcon
            color="#000"
            size="70%"
            reverse={paginated}
          />
        </ControlButton>
      )}
    </Container>
  );
};

export default PDFControls;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(props: IStyledProps) => props.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const ControlButton = styled(Button)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const DownloadButton = styled(LinkButton)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const PrintModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PrintButton = styled(Button)`
  background-color: #007bff; /* Blue color, you can change this */
  color: #ffffff; /* White text, you can change this */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover, you can change this */
  }
`;

const CloseButton = styled(Button)`
  background-color: #dc3545; /* Red color, you can change this */
  color: #ffffff; /* White text, you can change this */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 10px; /* Adjust as needed */

  &:hover {
    background-color: #c82333; /* Darker red on hover, you can change this */
  }
`;