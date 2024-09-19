import {
  BalanceCard,
  Exchanges,
  MainDivitions,
  ProfitAndLoss,
} from "@src/imports";

function Index() {
  return (
    <div className="p-5">
      <BalanceCard />
      <MainDivitions />
      <ProfitAndLoss />
      <Exchanges />
    </div>
  );
}

export default Index;
