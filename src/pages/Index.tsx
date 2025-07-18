import { SecuritasNavbar } from "@/components/SecuritasNavbar";
import { SecuritasHero } from "@/components/SecuritasHero";
import { SecuritasServices } from "@/components/SecuritasServices";
import { SecuritasJobs } from "@/components/SecuritasJobs";
import { SecuritasContact } from "@/components/SecuritasContact";
import { SecuritasFooter } from "@/components/SecuritasFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SecuritasNavbar />
      <SecuritasHero />
      <SecuritasServices />
      <SecuritasJobs />
      <SecuritasContact />
      <SecuritasFooter />
    </div>
  );
};

export default Index;
