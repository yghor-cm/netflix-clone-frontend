const API_DNS = "http://localhost:8080/medias"

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending",
        isLarge: true
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/netflixoriginals",
        isLarge: false
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/toprated",
        isLarge: false
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/comedy",
        isLarge: false
    },  
    {
        name: "romances",
        title: "Romances",
        path: "/romance",
        isLarge: false
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: "/documentary",
        isLarge: false
    }
]

export const getMovies = async (path) => {

    try {
        let url = API_DNS + path
        const response = await fetch(url)

        return await response.json()
    } catch (error) {
        console.log("error getMovies: ", error)
    }
}