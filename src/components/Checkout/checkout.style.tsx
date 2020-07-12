import styled  from 'styled-components';

export const ContCheckout = styled.div`
    display: flex;
    padding: 20px;

    .cont-1 {
        width: 35%;
        margin-right: 20px;
        padding: 20px; 

        .contInfo {
            width: 100%;
            margin-top: 20px;
            text-align: center;
            padding: 20px 0px;

            .contRadioGroup {
                flex-direction: row;
                justify-content: center;

                span {
                    font-size: 12px;
                } 
            }

            .contText {
                text-align: left;
                padding: 20px;

                .title {
                    margin: 0px 0px 20px 0px;
                }

                button {
                    margin: 20px 0px;
                }
            }
        }
    }
    .cont-2 {
        width: 55%;
        margin-left: 20px;
        padding: 20px;

        .contOrder {
            width: 100%;
            margin-top: 20px;

            .align-right {
                text-align: right;
            }
            .m-20 {
                padding: 20px 0px;
            }
        }
    }

`