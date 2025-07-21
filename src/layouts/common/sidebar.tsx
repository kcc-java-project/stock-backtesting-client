const SidebarLayout = () => {
  return (
    <nav className="sidebar">
      <div className="header">
        <a>logo</a>
        <div>
          <button>tog</button>
        </div>
      </div>
      <aside className="page_navigator">
        <a>백테스팅</a>
        <a>page2</a>
        <a>page3</a>
      </aside>
      <aside className="history_navigator">
        <div>기록</div>
        <a>history3</a>
        <a>history2</a>
        <a>history1</a>
      </aside>
      <div className="grow_blank"></div>
      <button className="footer">
        <span>icon</span>
        <div>User data</div>
      </button>
    </nav>
  );
};

export default SidebarLayout;
