import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

const getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
export { getLayout };
