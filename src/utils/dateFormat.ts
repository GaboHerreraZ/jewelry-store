export const dateFormat = (
  date: Date,
  local: string,
  options?: Intl.DateTimeFormatOptions
) => new Intl.DateTimeFormat(local, options).format(date);
