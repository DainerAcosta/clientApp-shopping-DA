import styled from 'styled-components';

export const ThanksCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90vh;

    h1 {
        padding: 20px; 
    }

    button {
        padding: 20px;
        margin-bottom: 60px;

        a {
            color: gray;

            &:hover {
                color: black;
            }
        }
    }
`