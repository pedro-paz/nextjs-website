import React, { useEffect } from "react";
import { FiBell, FiChevronDown, FiSearch, FiSettings } from "react-icons/fi";
import { Card } from "../../components/card";
import Input from "../../components/input";
import { PageContainer } from "../../components/pageContainer";
import { TopBar } from "../../components/topBar";
import { StyledDashboardContent } from "./styles";

const DashboardContent = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(
      "#dashboard-content > section > div"
    );
    let cardIndex = 0;
    const animateCard = () => {
      const timeout = cardIndex === 0 ? 0 : 150;
      setTimeout(() => {
        const currentCard = cards[cardIndex] as HTMLElement;
        currentCard.style.transform = "scale(1)";
        currentCard.style.opacity = "1";
        cardIndex++;
        cardIndex < cards.length && animateCard();
      }, timeout);
    };
    animateCard();
  }, []);
  return (
    <StyledDashboardContent>
      <PageContainer id="dashboard-content">
        <style></style>
        <TopBar />

        <header>Dashboard</header>

        <section>
          <Card>
            <header>Visão Geral</header>
          </Card>
          <Card>
            <header>Visão Geral</header>
          </Card>
          <Card>
            <header>Visão Geral</header>
          </Card>
          <Card>
            <header>Visão Geral</header>
          </Card>
        </section>

        <section>
          <Card style={{ width: "70%" }}>
            <header>Visão Geral</header>
          </Card>
          <Card style={{ width: "30%" }}>
            <header>Visão Geral</header>
          </Card>
        </section>

        <section>
          <Card>
            <header>Visão Geral</header>
          </Card>
        </section>
      </PageContainer>
    </StyledDashboardContent>
  );
};

export default DashboardContent;
