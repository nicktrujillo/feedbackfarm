import useSWR from "swr";

import DashboardLayout from "@/components/DashboardLayout";
import PlanNoSites from "@/components/PlanNoSites";
import fetcher from "@/utils/fetcher";
import { useAuth } from "@/utils/auth";
import SiteTable from "@/components/SiteTable";
import SiteTableHeader from "@/components/SiteTableHeader";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR("/api/sites", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <DashboardLayout>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardLayout>
    );

  if (data.sites.length) {
    return (
      <DashboardLayout>
        <SiteTableHeader />
        <SiteTable sites={data.sites} />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <SiteTableHeader />
      <PlanNoSites />
    </DashboardLayout>
  );
};

const Sites = () => {
  return <Dashboard />;
};

export default Sites;
