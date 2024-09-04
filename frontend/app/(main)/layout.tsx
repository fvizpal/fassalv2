import { Navbar } from "@/components/shared/navbar";


const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;