export type HabitEntry  = {
    status: Boolean,
    details: String
};

export type DbRefConfig = {
    userId: string,
    habit?: string,
    settings?: string,
    entries?: string,
    key?: string
};