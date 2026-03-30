import { Outlet } from 'react-router';
import { TrialBanner } from './TrialBanner';

export function RootLayout() {
  return (
    <>
      <TrialBanner />
      <Outlet />
    </>
  );
}
