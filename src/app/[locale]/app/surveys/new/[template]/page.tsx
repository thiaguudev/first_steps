import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/navigation";

type NewSurveyWithTemplateProps = {
  params: { template: string };
};

export default function NewSurveyWithTemplate({
  params: { template },
}: NewSurveyWithTemplateProps) {
  return (
    <div className="flex justify-center items-center gap-5">
      <Link
        href={`/app/surveys/new/${template}/channel/email`}
        className={buttonVariants({ variant: "link" })}
      >
        Email
      </Link>
      <Link
        href={`/app/surveys/new/${template}/channel/web`}
        className={buttonVariants({ variant: "link" })}
      >
        Web
      </Link>
      <Link
        href={`/app/surveys/new/${template}/channel/sms`}
        className={buttonVariants({ variant: "link" })}
      >
        SMS
      </Link>
      <Link
        href={`/app/surveys/new/${template}/channel/link`}
        className={buttonVariants({ variant: "link" })}
      >
        Link/QrCode
      </Link>
    </div>
  );
}
