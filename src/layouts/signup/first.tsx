import FormButton from "../../components/form/form_button";
import FormInput from "../../components/form/form_input";
import { useInputState } from "../../hooks/use_input";

const SignupFirstLayout = () => {
  const [email, changeEmail] = useInputState("");

  return (
    <section>
      <h1>계정 만들기</h1>
      <FormInput name="email" value={email} placeholder="이메일 주소" onChange={changeEmail} />
      <FormButton value="계속" />
      <div className="login">
        <p>이미 계정이 있으신가요?</p>
        <button>로그인</button>
      </div>
      <div className="divider">
        <p>또는</p>
      </div>
      <div className="google">
        <button>구글 로그인</button>
      </div>
      <div className="policy">
        <button>이용약관</button>
        <button>개인정보 보호 정책</button>
      </div>
    </section>
  );
};

export default SignupFirstLayout;
