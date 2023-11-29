import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <p>Dashboard Page</p>
    </>
  );
};

export default DashboardPage;
