import { Outlet } from 'react-router-dom';
import {Footer} from './footer';

export default function LayoutTools() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
