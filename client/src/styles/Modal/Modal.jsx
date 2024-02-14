import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import StyledButton from "../StyledButton";

const ModalContainer = styled.div`
  position: fixed;
  padding: 30px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: auto;
  background-color: white;
  color: red;
  font-size: 14px;
  font-weight: bold;
  padding: 40px;
`;
const ModalButton = styled.button`
  border-radius: 0.6rem;
  border: none;
  width: 10rem;
  height: 5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#50924E"};
  margin-left: 30%;
  text-align: center;
  transform: translateX(-50%);
  color: #fff;
  font-style: italic;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#396d37"};
  }
`;

function Modal({ showModal, setShowModal, modalText }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    //  to detect clicks outside of modal content
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);
  return (
    <>
      {showModal && (
        <ModalContainer>
          <ModalContent ref={modalRef}>
            {modalText}
            <ModalButton onClick={() => setShowModal(false)}>Close</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default Modal;
