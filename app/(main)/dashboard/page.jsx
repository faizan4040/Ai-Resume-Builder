import { getUserOnboardingStatus } from "@/action/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";
import { getIndustryInsights } from "@/action/dashboard";


const IndustryInsightspage = async() => {
  const {isOnboarded} = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();


  if (!isOnboarded) {
    redirect("/onboarding");
  }

  console.log("Insights:", insights);
  return (
    <div className="container mx-auto">
      <DashboardView insights={insights}/>
    </div>
   )
};

export default IndustryInsightspage;
