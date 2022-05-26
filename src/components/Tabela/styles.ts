import styled from "styled-components";

export const Content = styled.div`

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
        border-radius: 4px;

        &:first-child {
            color: #000
        }
        
        &.saida {
            color: red;
        }

        &.entrada {
            color: green;
        }
    }
`;