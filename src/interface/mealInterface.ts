export interface system {
    code: number;
    message: string;
}

export interface CoreMeal {
    status: boolean,
    system: system,
    data: string[] | null
}

export interface MealCoreComponent {
    data: CoreMeal
}