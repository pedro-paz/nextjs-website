import React, { useCallback, useEffect, useState } from "react";
import { Line, LineChart } from "recharts";
import { Card } from "../../components/card";
import { PageContainer } from "../../components/pageContainer";
import { TopBar } from "../../components/topBar";
import { useServices } from "../../contexts/service";
import Revenue from "../../entities/Revenue";
import { StyledDashboardContent } from "./styles";

const DashboardContent = () => {
  const { dashboardService } = useServices();
  const [allRevenues, setAllRevenues] = useState<Revenue[][]>();
  const [chartDataRevenues, setChartDataRevenues] = useState<object[]>([]);

  const animateCards = useCallback(async () => {
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

  useEffect(() => {
    var result = [];
    allRevenues?.forEach((arr, i) => {
      arr.forEach((x, j) => {
        result[j] = {
          ...result[j],
          [i]: x.Amount,
        };
      });
    });

    setChartDataRevenues(result);
  }, [allRevenues]);

  useEffect(() => {
    animateCards();
    setAllRevenues(dashboardService.getRevenues());
  }, []);

  return (
    <StyledDashboardContent>
      <PageContainer id="dashboard-content">
        <style></style>
        <TopBar />

        <header>Dashboard</header>
        <section>
          <Card>
            <header>Vendas Gerais</header>
            <main>
              {chartDataRevenues?.length > 0 && (
                <LineChart
                  width={500}
                  height={300}
                  data={[...chartDataRevenues]}
                >
                  <Line
                    type="monotone"
                    dataKey="0"
                    stroke="#8884d8"
                    dot={false}
                    strokeWidth={5}
                  />
                  <Line
                    type="monotone"
                    dataKey="1"
                    stroke="#80D96F"
                    dot={false}
                    strokeWidth={5}
                  />
                  <Line
                    type="monotone"
                    dataKey="2"
                    stroke="#F29B94"
                    dot={false}
                    strokeWidth={5}
                  />
                </LineChart>
              )}
            </main>
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
