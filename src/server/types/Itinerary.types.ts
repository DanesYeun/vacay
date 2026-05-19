export interface Activity {
    id: number;
    activity: string;
    desc: string;
    position: number[];
}

export interface DayItinerary {
    day: number;
    date: string;
    theme: string;
    activities: Activity[];
}

export interface Trip {
    destination: string;
    dates: string;
    days: DayItinerary[];
}