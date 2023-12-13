import styled, { ExecutionContext } from "styled-components";

export const StatsComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type BaseStatsProps = {
  $fontColor: string | ((props: ExecutionContext) => string);
};

export const BaseStats = styled.h3<BaseStatsProps>`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.$fontColor};
`;

export const StatsTable = styled.table`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const StatsTHead = styled.thead`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const StatsTBody = styled.tbody`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;

  .tdTotal {
    font-weight: 700;
  }

  .tdMinMax {
    color: ${(props) => props.theme.colors.text.black};
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export const StatsTr = styled.tr`
  display: flex;
  flex-direction: column;
`;

export const StatsTh = styled.th`
  height: 1.5rem;
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: start;
`;

export const StatsTd = styled.td`
  height: 1.5rem;
  padding: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text.grey};
`;

type StatsProgressProps = {
  $progressColor: string | ((props: ExecutionContext) => string);
};

export const StatsProgress = styled.progress<StatsProgressProps>`
  height: 0.25rem;
  border-radius: 0.125rem;

  &::-webkit-progress-bar {
    background-color: transparent;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => props.$progressColor};
  }
`;

export const StatsDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.grey};
  text-align: justify;
`;
