

export function getDailyStore() {
    return fetch('https://fortnite-public-api.theapinetwork.com/prod09/store/get')
        .then((response) => {
            return response.json()})
        .catch((error) => {
        console.error(error);
        });
}

export async function getUserID(username) {
    return fetch('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username='+username)
        .then((response) => {
            return response.json()})
        .catch((error) => {
            console.error(error);
        });
}


export function getUserStats(id) {
    return fetch('https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id='+id)
        .then((response) => {
            return response.json()})
        .catch((error) => {
        console.error(error);
        });
}

export function getChallenges(season) {
    return fetch('https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season='+season)
        .then((response) => {
            return response.json()})
        .catch((error) => {
        console.error(error);
        });
}

