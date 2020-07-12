import styled from 'styled-components';

export const CartCont = styled.div`
    
    padding: 20px;
    text-align: left;

    .msn {
        color: #00af00;
        text-align: center;
        padding: 20px;
        margin: 20px;
    }

    .cartControl {
        width: 100%;
        text-align: right;
        
        .cont-2 {
            display: flex;

            .w-50 {
                width: 50%;
            }
            .continue {
                display: flex;
            }
        }
        
        .contItem {
            padding: 5px 0px;
            margin: 15px 0px;
            a {
                color: gray;
                &:hover {
                    color: black;
                }
            }
        }
        
    }
`