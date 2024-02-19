import { Link } from "@/navigation";

export default function NewSurveyPage() {
  return (
    <div className="grid grid-cols-3 gap-10 justify-items-center">
      <Link href="/app/surveys/new/nps">NPS</Link>
      <Link href="/app/surveys/new/5-stars">5 Stars</Link>
      <Link href="/app/surveys/new/csat">CSAT</Link>
      <Link href="/app/surveys/new/ces">CES</Link>
      <Link href="/app/surveys/new/smileys">Smileys</Link>
      <Link href="/app/surveys/new/enps">eNPS</Link>
      <Link href="/app/surveys/new/thumbs">Thumbs</Link>
      <Link href="/app/surveys/new/pmf">PMF</Link>
    </div>
  );
}
