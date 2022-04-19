const API = "https://api.themoviedb.org/3";

export default function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTMzYTc2ZjFiYWMwMDBmNTAxYmM3ODNmMWMzZGRiNSIsInN1YiI6IjYyMzg4ODllZTI3MjYwMDA3MWQ3Mjk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I-KEFfepzZcFpdj-e1dIVjtfJ2Ma-vB-2mvih906zCg",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}