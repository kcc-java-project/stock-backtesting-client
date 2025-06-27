import BacktestingLayout from "../../layouts/backtesting";
import MainLayout from "../../layouts/common/main";
import SidebarLayout from "../../layouts/common/sidebar";

const BacktestingPage = () => {
  return (
    <>
      <SidebarLayout />
      <MainLayout classname="backtesting">
        <BacktestingLayout />
      </MainLayout>
    </>
  );
};

export default BacktestingPage;
