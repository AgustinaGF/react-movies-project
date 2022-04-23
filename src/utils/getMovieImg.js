import placeholder from "./placeholder.jpeg";

export default function getMovieImg(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}