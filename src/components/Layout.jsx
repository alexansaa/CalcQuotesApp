import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Layout.module.css';

const Layout = () => {
  return ( 
    <div className={styles.homePadding}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;