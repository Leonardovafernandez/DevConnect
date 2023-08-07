import styled from "styled-components";

export const LoginFormContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color:#F1F9FE;
    color: #5A5A5A;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginForms = styled.form`
    width: 209px;
`;

export const LoginFormTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 37px;
`;

export const LoginFormInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9px;
    gap: 13px;
`;

export const LoginFormInput = styled.input`
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #C5C6CA;
    color: #C5C6CA;
    padding-left: 16px;
`;

export const LinkContainer = styled.div`
    font-size: 9px;
    font-weight: 400;
`;

export const LoginFormButton = styled.button`
    width: 100%;
    height: 33px;
    border-radius: 8px;
    background-color: #2E7BB4;
    border: #2E7BB4;
    margin-top: 21px;
`;