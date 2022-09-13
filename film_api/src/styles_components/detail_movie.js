import styled from "styled-components";

export const Container = styled.div`    
    .back{
        width: 3rem;
        height: 50px;
    }
    
    h1{
        margin: 3rem 0;
    }
    
    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 500px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .release-date{
        opacity: 0.5;
    }
`