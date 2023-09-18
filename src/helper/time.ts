import moment from 'moment-timezone';

export function getTimeDifferenceString(date: string) {
    const now = new Date().valueOf();
    const timestamp = new Date(date).valueOf();

    const timeDifferenceInSeconds = Math.floor((now - timestamp) / 1000);

    if (timeDifferenceInSeconds < 60) {
        return 'few seconds ago';
    } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDifferenceInSeconds < 172800) {
        // 24 * 60 * 60 seconds in a day
        return 'yesterday';
    } else if (timeDifferenceInSeconds < 604800) {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (timeDifferenceInSeconds < 2419200) {
        const weeks = Math.floor(timeDifferenceInSeconds / 604800);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (timeDifferenceInSeconds < 29030400) {
        const months = Math.floor(timeDifferenceInSeconds / 2419200);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        const years = Math.floor(timeDifferenceInSeconds / 29030400);
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
}

type MProps = {
    date?: string,
    format?: string,
    timeZone?: string
}
export const formatDateTime = ({
    date,
    format,
    timeZone
}: MProps) => {

    const currentDate = date ?? new Date()
    const formated = format ?? "DD/MM/YYYY hh:mm A"

    const formattedDate = timeZone ?
        moment
            .tz(currentDate, timeZone ?? 'Asia/Singapore')
            .format(formated) :
        moment(currentDate).format(formated)
    return formattedDate
}