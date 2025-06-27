type MainLayoutProps = {
  children: React.ReactNode;
  classname: string;
};

const MainLayout = ({children, classname}: MainLayoutProps) => {
  return (
    <main className={classname}>
      {children}
    </main>
  );
};

export default MainLayout;
