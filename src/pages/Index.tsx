import { LahoreSecurityNavbar } from "@/components/LahoreSecurityNavbar";
import { LahoreSecurityHero } from "@/components/LahoreSecurityHero";
import { LahoreSecurityServices } from "@/components/LahoreSecurityServices";
import { HomeBlog } from "@/components/HomeBlog";
import { SecuritasJobs } from "@/components/SecuritasJobs";
import { SecuritasContact } from "@/components/SecuritasContact";
import { LahoreSecurityFooter } from "@/components/LahoreSecurityFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LahoreSecurityNavbar />
      <LahoreSecurityHero />
      <LahoreSecurityServices />
      <HomeBlog />
      <SecuritasJobs />
      <SecuritasContact />
      <LahoreSecurityFooter />
    </div>
  );
};

export default Index;
