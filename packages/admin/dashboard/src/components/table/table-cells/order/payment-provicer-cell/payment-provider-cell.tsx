import { useTranslation } from "react-i18next";

export const PaymentProviderCell = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      <span className="truncate">{t("fields.cod")}</span>
    </div>
  )
};

export const PaymentProviderHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full items-center">
      <span className="truncate">{t("fields.salesChannel")}</span>
    </div>
  )
};
