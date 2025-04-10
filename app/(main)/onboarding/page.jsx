import { industries } from "@/data/industries";

const OnboardingPage = () => {
// check if user is already onboarded


  return (
    <div>
      <main>
        <OnboardingForm industries={industries}/>
      </main>
    </div>
  )
}

export default OnboardingPage;
