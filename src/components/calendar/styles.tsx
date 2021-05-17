import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CalendarTop = styled.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const SelectedMonth = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const DayOfWeek = styled.div`
  width: 13%;
  margin-bottom: 20px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 700;
  font-size: 17px;
`;

interface DayOfMonthProps {
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
}

export const DayOfMonth = styled.div<DayOfMonthProps>`
  width: 13%;
  margin-bottom: 20px;
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.5)};
  font-size: 22px;
  font-weight: 700;
  /* transition: all 0.2s ease; */
  &:hover {
    ${({ isCurrentMonth }) => isCurrentMonth && "transform:scale(1.1)"};
    ${({ isCurrentMonth }) => isCurrentMonth && "cursor:pointer"}
  }
  & > * {
    padding: 15px 17px;
    min-height: 100px;
    text-transform: capitalize;
    text-align: right;
    ${({ isCurrentDay, theme }) =>
      isCurrentDay && `background:${theme.gradient[0]};`}
  }
`;
