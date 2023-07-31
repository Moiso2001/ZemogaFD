/* This function will convert the date on JSON to a proper text */
export function getTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const timeDiffInMilliseconds = now.getTime() - date.getTime();
  
    const timeUnits = [
      { unit: 'year', value: 31536000000 }, // Milliseconds in a year
      { unit: 'month', value: 2592000000 }, // Milliseconds in a month (approx)
      { unit: 'day', value: 86400000 }, // Milliseconds in a day
      { unit: 'hour', value: 3600000 }, // Milliseconds in an hour
      { unit: 'minute', value: 60000 }, // Milliseconds in a minute
      { unit: 'second', value: 1000 }, // Milliseconds in a second
    ];
  
    for (const { unit, value } of timeUnits) {
      const timeDiffUnit = Math.floor(timeDiffInMilliseconds / value);
      if (timeDiffUnit >= 1) {
        return `${timeDiffUnit} ${unit}${timeDiffUnit === 1 ? '' : 's'} ago`;
      }
    }
  
    return 'Just now'; // If the date is in the future or very close to the current time
}

/* Typically capitalize function */
export function getCapitalize(string: string)  {
    if (!string) return string; // Return the original string if it's empty or undefined

    return string.charAt(0).toUpperCase() + string.slice(1);
}