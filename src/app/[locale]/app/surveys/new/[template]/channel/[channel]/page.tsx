import { SurveyType, ChannelType } from "@/lib/types";
import Customize from "./_components/Customize";

type NewSurveyWithChannelProps = {
  params: { template: SurveyType; channel: ChannelType };
};

export default function NewSurveyWithChannel({
  params: { template, channel },
}: NewSurveyWithChannelProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h1>Customize appearance</h1>
      <h2>
        This is the {template} survey that will be {channel} to all people.
      </h2>

      <Customize />
    </div>
  );
}
