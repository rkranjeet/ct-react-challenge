export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthNamesShortHands = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const convertUTCDateToLocalDate = (date: any) => {
  var newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
  return newDate;
};

export const getHumanReadableDate = (date: any) => {
  if (date) {
    const localDate = convertUTCDateToLocalDate(new Date(date.toString()));
    return `${
      monthNamesShortHands[localDate.getMonth()]
    } ${localDate.getDate()}, ${localDate.getFullYear()}`;
  }
  return "";
};

export const getHumanReadableDateFullMonth = (date: any) => {
  if (date) {
    const localDate = convertUTCDateToLocalDate(new Date(date.toString()));
    return `${
      monthNames[localDate.getMonth()]
    } ${localDate.getDate()}, ${localDate.getFullYear()}`;
  }
  return "";
};
