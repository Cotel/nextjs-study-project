import { NavBar } from '@/shared/components/organisms/NavBar/NavBar';

export default function LandingLayout({
                                        children,
                                      }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      {children}
    </>
  );
}
