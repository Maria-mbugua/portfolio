import PageLayout from "@/components/PageLayout";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

const Experience = () => {
  return (
    <PageLayout>
      <div className="py-12">
        <ExperienceSection />
        <EducationSection />
      </div>
    </PageLayout>
  );
};

export default Experience;