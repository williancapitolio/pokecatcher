import styled from "styled-components";

export const AboutComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AboutDescription = styled.p`
  font-size: ${(props) => props.theme.fonts.sizes.description.size};
  font-weight: ${(props) => props.theme.fonts.sizes.description.weight};
  color: ${(props) => props.theme.colors.text.grey};
  text-align: justify;
`;

export const AboutTable = styled.table`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const AboutTHead = styled.thead`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const AboutTBody = styled.tbody`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
`;

export const AboutTr = styled.tr`
  display: flex;
  flex-direction: column;

  th,
  td {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .abilitiesTd {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    height: 3.5rem;
  }
`;

export const AboutTh = styled.th`
  height: 2.5rem;
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: start;
  width: 5rem;
`;

export const AboutTd = styled.td`
  width: 100%;
  height: 2.5rem;
  padding: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text.grey};
`;
