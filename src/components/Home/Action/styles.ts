import styled from "styled-components";

export const ActionContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 8px;
    color: black;
    padding: 26px 24px 26px 24px;
    display: flex;
    flex-direction: column;
    gap: 19px;
    font-size: 18px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
`;

export const ActionButton = styled.button`
    box-sizing: border-box;
    padding: 9px 12px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #D9E6F6;
    color: #2E7BB4;
    font-size: 12px;
    border: none;
`;

export const ActionFirstButton = styled.button`
    box-sizing: border-box;
    padding: 9px 12px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #6F92BB;
    color: #fff;
    font-size: 12px;
    border: none;
`;