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
    }

    div {
        display: flex;
        justify-content: space-between;
    }
`;

export const ContentHome = styled.div`
    background: #d9d9d9;
    padding: 32px;
    border-radius: 0px 0px 4px 4px;

    h1 {
        font-size: 22px;
    }
`;