import React, { FC, useContext, useEffect, useState } from "react";
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

  const [showPrintModal, setShowPrintModal] = useState(false);
  const [printDataUrl, setPrintDataUrl] = useState<string | null>(null);

  const handlePrint = () => {
    if (currentDocument?.fileData) {
      try {
        // Verify content type
        if (!currentDocument.fileData.toString().startsWith('data:application/pdf;base64,')) {
          console.error("Invalid PDF content");
          // Handle the error as needed
          return;
        }

        // Extract base64 content
        const base64Content = currentDocument.fileData.toString().slice(28);

        // Trim and decode base64 string
        const byteCharacters = Uint8Array.from(atob(base64Content), char => char.charCodeAt(0));

        // Create Blob from array
        const blob = new Blob([byteCharacters], { type: 'application/pdf' });

        // Create data URL
        const dataUrl = URL.createObjectURL(blob);

        // Set the data URL in the state and show the print modal
        setPrintDataUrl(dataUrl);
        setShowPrintModal(true);
      } catch (error) {
        console.error("Base64 decoding/printing error:", error);
        // Handle the error as needed (e.g., show an error message to the user)
      }
    }
  };

  const handleClosePrintModal = () => {
    // Hide the print modal
    setShowPrintModal(false);
  };

  interface PrintModalProps {
    dataUrl: string;
    onClose: () => void;
  }
  
  const PrintModal: FC<PrintModalProps> = ({ dataUrl, onClose }) => {
    return (
      <ModalOverlay>
        <ModalContent>
          <iframe src={dataUrl} style={{ width: "100%", height: "100%" }} title="Print Preview" />
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </ModalOverlay>
    );
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
<iframe  id="receipt" src={currentDocument?.fileData?.toString()} style={{ width: "100%", height: "100%" }} />

      <ControlButton id="pdf-print" onClick={handlePrint}>
     
         <PrintPDFIcon color="#000" size="65%" />
      </ControlButton>
      
      

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
      {showPrintModal && (
        <PrintModal dataUrl={printDataUrl || ""} onClose={handleClosePrintModal} />
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


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
`;

