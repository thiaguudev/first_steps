import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SurveyCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function SurveyCard({
  title,
  subtitle,
  description,
}: SurveyCardProps) {
  return (
    <Card className="max-w-[324px] max-h-[304px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <Button>Choose and customize</Button>
      </CardFooter>
    </Card>
  );
}
