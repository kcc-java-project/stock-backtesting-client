import { useState } from "react";
import MainLayout from "../../layouts/common/main";
import SignupFirstLayout from "../../layouts/signup/first";
import SignupFourthLayout from "../../layouts/signup/fourth";
import SignupSecondLayout from "../../layouts/signup/second";
import SignupThirdLayout from "../../layouts/signup/third";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <MainLayout className="signup">
      {step == 1 ? <SignupFirstLayout /> : null}
      {step == 2 ? <SignupSecondLayout /> : null}
      {step == 3 ? <SignupThirdLayout /> : null}
      {step == 4 ? <SignupFourthLayout /> : null}
    </MainLayout>
  );
};

export default SignupPage;
