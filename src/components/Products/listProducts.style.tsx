import styled from 'styled-components';

const ProgressCont = styled.div`
    width: 100%;
`

const ProductListCont = styled.div`
    justify-content: center;
`

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px 20px;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export {
    ProgressCont,
    ProductListCont,
    ProductGrid
}