export function DateFormat(date) {
  const vaildDate = new Date(date);
  var month = vaildDate.getMonth() + 1;
  var day = vaildDate.getDate();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;

  return vaildDate.getFullYear() + "-" + month + "-" + day + " ";
}

export function DateFormatTime(date) {
  const validDate = new Date(date);
  const year = validDate.getFullYear();
  const month = (validDate.getMonth() + 1).toString().padStart(2, "0");
  const day = validDate.getDate().toString().padStart(2, "0");
  const hours = validDate.getHours().toString().padStart(2, "0");
  const minutes = validDate.getMinutes().toString().padStart(2, "0");
  const seconds = validDate.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
