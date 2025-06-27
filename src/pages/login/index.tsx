import MainLayout from "../../layouts/common/main";
import LoginLeftSideLayout from "../../layouts/login/left";
import LoginRightSideLayout from "../../layouts/login/right";

const LoginPage = () => {
  return (
    <MainLayout className="login">
      <LoginLeftSideLayout />
      <LoginRightSideLayout />
    </MainLayout>
  );
};

export default LoginPage;
