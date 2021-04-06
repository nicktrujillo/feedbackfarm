import useSWR from "swr";

import DashboardLayout from "@/components/DashboardLayout";
import PlanNoSites from "@/components/PlanNoSites";
import fetcher from "@/utils/fetcher";
import { useAuth } from "@/utils/auth";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardLayout>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <SiteTableHeader />
      {data.sites.length ? <SiteTable sites={data.sites} /> : <PlanNoSites />}
    </DashboardLayout>
  );
};

export default Dashboard;
