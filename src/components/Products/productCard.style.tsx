import styled from 'styled-components';

export const ProductCont = styled.div`
    .shadowHover {
        display: flex;
        height: autopx;

        @media (min-width: 768px) {
            height: 225px;
        }

        &:hover {
            box-shadow: 0px 0px 3px 1px #b4bdec;
        }

        .imgCont {
            width: 33%;
        }

        .contentCont {
            width: 67%;

            .cardControl {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                text-align: center;

                .priceCont {
                    text-align: right; 
                    padding: 0px 20px;
                }
            }
        }

        
    }
`