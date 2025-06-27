const LoginLeftSideLayout = () => {
  return (
    <section className="left">
      <div className="header">
        Logo
      </div>
      <div className="body">
        <div className="title">
          <p>당신의 아이디어,</p>
          <p>증폭되다</p>
        </div>
        <div className="subtitle">
          프라이버시 우선 AI로 자신 있게 창작하세요.
        </div>
        <div className="function">
          <div className="google">
            <button>구글 로그인</button>
          </div>
          <p>또는</p>
          <div className="input">
            <input placeholder="이메일 주소 입력"/>
          </div>
          <div className="continue">
            <button>이메일로 계속하기</button>
          </div>
        </div>
      </div>
      <div className="footer">
        additional information
      </div>
    </section>
  );
};

export default LoginLeftSideLayout;
