import { useState } from "react";
import InputButton from "../../components/form/form_button";
import FormInput from "../../components/form/form_input";
import BacktestingLayout from "../../layouts/backtesting";
import MainLayout from "../../layouts/common/main";
import SidebarLayout from "../../layouts/common/sidebar";

const BacktestingPage = () => {
  const [test, setTest] = useState("");
  const changeTest = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTest(event.target.value);
  };

  return (
    <>
      <SidebarLayout />
      <MainLayout className="backtesting">
        <BacktestingLayout />
        <FormInput name="test" value={test} onChange={changeTest} placeholder="이메일 입력" />
        <InputButton value="계속" />
      </MainLayout>
    </>
  );
};

export default BacktestingPage;
