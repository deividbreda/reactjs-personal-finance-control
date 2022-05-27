import styled from "styled-components";

export const ContentHeader = styled.header`
    background: #fff;
    padding: 32px;
    border-radius: 4px 4px 0 0;
    margin-top: -60px;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.1);

    h1 {
        font-size: 22px;
    }

    h2 {
        font-size: 32px;
        color: #820ad1;
    }
    
    input {
        background: #820ad1;
        color: #fff;
        border: none;
        padding: 0 30px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

        &.inputBoleto {
            background: #000;
        }
    }

    div {
        display: flex;
        justify-content: space-between;

        &.buttonsOpenModal {
            gap: 16px;
        }
    }
`;

export const ContentHome = styled.div`
    background: #d9d9d9;
    padding: 32px;
    border-radius: 0px 0px 4px 4px;
    position: relative;

    h1 {
        margin-top: 48px;
        font-size: 22px;
        position: relative;

        &:first-child {
            margin-top: 0px;
        }

        &::after {
            position: absolute;
            left: 0;
            bottom: -8px;
            right: 0;
            height: 3px;
            width: 60px;
            background: #000;
            border-radius: 30px;
            content: "";
        }
    }

    h2 {
        margin-top: 32px;
        font-size: 18px;
        font-weight: 400;
        color: #a1a1a1;
    }
`;

export const ContentWidth = styled.div`
    margin-bottom: 60px;
`;