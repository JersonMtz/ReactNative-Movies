export interface IMovieCredits {
    id:   number;
    cast: ICast[];
    crew: ICast[];
}

export interface ICast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: Department;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          Department;
    job?:                 string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    Directing = "Directing",
    Editing = "Editing",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}
