import styled from 'styled-components';

export const ProductCartCont = styled.div`
    .cardCont {
        margin: 20px 0px;
    }
    .shadowHover {
        display: flex;
        height: autopx;

        @media (min-width: 768px) {
            height: 100px;
        }

        &:hover {
            box-shadow: 0px 0px 3px 1px #b4bdec;
        }
        .gridProductCart {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px 20px;
            align-items: center;
            width: 100%;
            height: 100%;

            .cardContent {
                align-items: center;
                
                .contInFlex {
                    display: inline-flex;
                }
                .btnDelete {
                    margin: -4px 5px;
                    padding: 2px;
                    cursor: pointer;
                    color: #7b7b7;
                }
            }

            .gridControl {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                text-align: center;
                width: 100%;
                height: 100%;

                .contCounter {
                    align-items: center;
                    display: flex;
                }
                .btn {
                    cursor: pointer;
                }
                .btnRemove {
                    color: #ff5a5a;
                }
                .btnAdd {
                    color: #00af00;
                }
            }
        }
    }
    
`