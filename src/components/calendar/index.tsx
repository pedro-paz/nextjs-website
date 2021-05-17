import moment from "moment";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GhostButton } from "../button";
import { Card } from "../card";
import {
  CalendarContainer,
  CalendarTop,
  DayOfMonth,
  DayOfWeek,
  SelectedMonth,
} from "./styles";

const Calendar: React.FC = () => {
  moment.locale("pt-br");
  const daysOfWeek = moment.weekdays();
  const firstDay = moment().clone().startOf("month").clone().startOf("week");
  const currentMonth = moment().format("MMMM");
  const currentYear = moment().format("YYYY");
  const daysOfCalendar = Array(42)
    .fill(0)
    .map((x, i) => {
      return firstDay.clone().add(i, "days");
    });

  return (
    <>
      <CalendarTop>
        <div>
          <GhostButton>
            <FiChevronLeft size={28} />
          </GhostButton>
        </div>
        <SelectedMonth>{`${currentMonth} ${currentYear}`}</SelectedMonth>
        <div>
          <GhostButton>
            <FiChevronRight size={28} />
          </GhostButton>
        </div>
      </CalendarTop>
      <CalendarContainer>
        {daysOfWeek.map((weekDay) => (
          <DayOfWeek>{weekDay.split("-")[0]}</DayOfWeek>
        ))}
        {daysOfCalendar.map((monthDay) => (
          <DayOfMonth
            isCurrentDay={
              monthDay.format("DDMMYYYY") === moment().format("DDMMYYYY")
            }
            isCurrentMonth={
              monthDay.format("MMYYYY") === moment().format("MMYYYY")
            }
          >
            <Card>{monthDay.format("DD")}</Card>
          </DayOfMonth>
        ))}
      </CalendarContainer>
    </>
  );
};

export default Calendar;
