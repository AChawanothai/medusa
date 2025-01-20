import { Tooltip } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { PlaceholderCell } from "../placeholder-cell";
import {
  formatDateString,
  formatDateTimeString,
} from "../../../../../utils/date-format";

type DateCellProps = {
  date?: Date | string | null;
};

export const DateCell = ({ date }: DateCellProps) => {
  if (!date) {
    return <PlaceholderCell />;
  }

  const value = new Date(date);
  value.setMinutes(value.getMinutes() - value.getTimezoneOffset());

  const hour12 = Intl.DateTimeFormat().resolvedOptions().hour12;
  const timestampFormat = hour12 ? "dd MMM yyyy hh:MM a" : "dd MMM yyyy HH:MM";

  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      <Tooltip
        className="z-10"
        content={
          <span className="text-pretty">{`${formatDateTimeString(
            value
          )}`}</span>
        }
      >
        <span className="truncate">{formatDateString(value)}</span>
      </Tooltip>
    </div>
  );
};

export const DateHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full items-center">
      <span className="truncate">{t("fields.date")}</span>
    </div>
  );
};
