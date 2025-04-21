import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from "@/action/user";
import { industries } from "@/data/industries";

const OnboardingPage = async () => {
  // check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard"); // Correct redirect usage
  }

  console.log("Industries data:", industries); // Check if data is imported correctly

  return (
    <div>
      <main>
        <OnboardingForm industries={industries} />
      </main>
    </div>
  );
};

export default OnboardingPage;
