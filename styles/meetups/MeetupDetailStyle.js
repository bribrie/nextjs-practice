import styled from "styled-components";

export const Container = styled.section`
  text-align: center;

  img {
    width: 100%;
    border-radius: 6px;
  }
`;

export const Content = styled.div`
  margin: 1rem 0;

  h1 {
    font-size: 2rem;
    color: #3a577e;
    font-weight: bold;
    padding-bottom: 0.5rem;
  }

  address,
  p {
    font-style: italic;
    padding-top: 0.5rem;
  }
`;
