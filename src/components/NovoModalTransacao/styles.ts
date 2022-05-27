import styled from "styled-components";

export const ContentForm = styled.form`

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

export const ContentTipoTransacao = styled.div`
    margin: 22px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

interface CheckBoxTipoProps {
    isActive: boolean;
    activeColor: 'verde' | 'vermelho';
}

const colors = {
    verde: '#24c124',
    vermelho: '#f13c3c',
}

export const CheckBoxTipo = styled.button<CheckBoxTipoProps>`
    border-radius: 4px;
    padding: 8px 0;

    border: ${(props) => props.isActive
         ? '#fff'
         : '1px solid #820ad1'
    };

    font-size: 18px;
    
    color: ${(props) => props.isActive
         ? '#fff'
         : '#820ad1'
    };

    background: ${(props) => props.isActive
         ? colors[props.activeColor]
         : 'transparent'
    };
`;