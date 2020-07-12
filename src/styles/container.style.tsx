import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ContainerCombined = styled.div`
    width: 100%;
    background-color: #f9fafc;
    align-items: center;
    text-aling: center;  

    @media (min-width: 768px) {
        max-width: 1110px;
    }

        .productGrid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px 20px;
            margin-top: 20px;
            margin-right: 20px;
            margin-left: 20px;
            padding-bottom: 20px;
            align-items: center;

            @media (min-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
            }
        }
`

const ContainerGlobal = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f9fafc;

    .containerCenter {
        align-items: center;
        width: 100%;

        @media (min-width: 768px) {
            max-width: 1110px;
        }
    }
`

export {
    ContainerCombined,
    ContainerGlobal
};