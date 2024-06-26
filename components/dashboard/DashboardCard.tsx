import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard: FC<DashboardCardProps> = ({ title, count, icon }) => {
  return (
    <Card>
      <CardContent>
        <h3 className=" text-xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-2xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
