export const over100000 = (input) => {
    let filteredList = []
    input.forEach((city) => {
        if(city.population > 100000){
            filteredList.push(city)
        }
    })
    return filteredList
}

export const under100000 = (input) => {
    let filteredList = []
    input.forEach((city) => {
        if(city.population < 100000){
            filteredList.push(city)
        }
    })
    return filteredList
}
