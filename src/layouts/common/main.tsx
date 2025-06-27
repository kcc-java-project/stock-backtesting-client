type MainLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const MainLayout = ({className = "", children}: MainLayoutProps) => {
  return (
    <main className={className}>
      {children}
    </main>
  );
};

export default MainLayout;
