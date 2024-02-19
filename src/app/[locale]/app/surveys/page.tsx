import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Link } from "@/navigation";

export default async function SurveysPage() {
  const surveys = await prisma.survey.findMany();

  return (
    <div className="flex justify-center items-center gap-5">
      <Link
        href="/app/surveys/new"
        className={buttonVariants({ variant: "link" })}
      >
        Create a survey
      </Link>

      {surveys.length > 0 ? (
        surveys.map((survey) => {
          return (
            <h1 key={survey.id} className="text-xl font-bold">
              {survey.title}
            </h1>
          );
        })
      ) : (
        <h1 className="text-xl font-bold">No have surveys</h1>
      )}
    </div>
  );
}
