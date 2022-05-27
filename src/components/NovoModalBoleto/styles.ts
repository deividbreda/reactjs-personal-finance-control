import styled from "styled-components";

export const Content = styled.div`
    h1 {
        margin-bottom: 32px;
    }

    input[type="submit"] {
        background: #820ad1;
        border-radius: 4px;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        margin-top: 32px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    input {
        width: 100%;
        padding: 10px 15px;
        border: none;
        border-bottom: 2px solid #820ad1;
        font-weight: 400;
        font-size: 18px;

        & + input {
            margin-top: 22px;
        }

        &::placeholder {
            color: #820ad1;
        }
    }
`;