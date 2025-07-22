import type { ReactNode } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import './Layout.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  );
}
