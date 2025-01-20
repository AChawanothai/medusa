/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from "react-i18next"

export const formatDateString = (date: string | Date): string => {
  const { t, i18n } = useTranslation()

  if (!date) {
    return ""
  }
  const dateObj = typeof date === "string" ? new Date(date) : date
  if (isNaN(dateObj.getTime())) {
    return "Invalid date"
  }
  const thaiMonths = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ]

  const enMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const day = dateObj.getDate()
  let month: string
  let year: number

  switch (i18n.language) {
    case "th":
      month = thaiMonths[dateObj.getMonth()]
      year = dateObj.getFullYear() + 543 // แปลงปี ค.ศ. เป็น พ.ศ.
      break
    default:
      month = enMonths[dateObj.getMonth()]
      year = dateObj.getFullYear()
      break
  }

  return `${day} ${month} ${year}`
}

export const formatDateTimeString = (date: string | Date): string => {
  const { t, i18n } = useTranslation()

  if (!date) {
    return ""
  }
  const dateObj = typeof date === "string" ? new Date(date) : date
  if (isNaN(dateObj.getTime())) {
    return "Invalid date"
  }

  const thaiMonths = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ]

  const enMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const day = dateObj.getDate()
  let month: string
  let year: number
  let hours: string
  let minutes: string

  switch (i18n.language) {
    case "th":
      month = thaiMonths[dateObj.getMonth()]
      year = dateObj.getFullYear() + 543 // แปลงปี ค.ศ. เป็น พ.ศ.
      hours = String(dateObj.getHours()).padStart(2, "0")
      minutes = String(dateObj.getMinutes()).padStart(2, "0")
    
      return `${day} ${month} ${year} ${hours}:${minutes} น.`
    
    default:
      month = enMonths[dateObj.getMonth()]
      year = dateObj.getFullYear()
      hours = String(dateObj.getHours()).padStart(2, "0")
      minutes = String(dateObj.getMinutes()).padStart(2, "0")
    
      return `${day} ${month} ${year} ${hours}:${minutes}`
    
  }
}
