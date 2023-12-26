
export default function updateTime(clocktimer) {
  const now = new Date()
  const day = now.getUTCDate()
  const year = now.getFullYear()
  const month = now.getUTCMonth() + 1
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  // Format the string with leading zeroes
    const clockStr = `Portugal, Lisbon ${day.toString()}-${month.toString()}-${year.toString()} ${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;

  clocktimer.innerText = clockStr;
}
