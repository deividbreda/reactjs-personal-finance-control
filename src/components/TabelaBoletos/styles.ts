import styled from "styled-components";

export const Content = styled.div`
    margin-top: 16px;

    table {
        width: 100%;
        border-spacing: 0 8px;
    }

    th {
        color: #969CB3;
        font-weight: 400;
        padding: 8px 32px;
        text-align: left;
    }

    td {
        padding: 16px 32px;
        border: 0;
        background: #fff;
        color: #969CB3;

        &:first-child {
            color: #000
        }
        
        &.saida {
            color: red;
        }

        &.entrada {
            color: green;
        }

        button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background: #c73333;
            color: #fff;
        }
    }
`;