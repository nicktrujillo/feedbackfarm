import useSWR from "swr";

import DashboardLayout from "@/components/DashboardLayout";
import PlanNoSites from "@/components/PlanNoSites";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import fetcher from "@/utils/fetcher";
import { useAuth } from "@/utils/auth";

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardLayout>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <FeedbackTableHeader />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <PlanNoSites />
      )}
    </DashboardLayout>
  );
};

export default MyFeedback;
