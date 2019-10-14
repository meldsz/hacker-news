export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
// all the endpoints required in the application
export const endpoints = {
    askStories: `${baseUrl}/askstories.json`,
    bestStories: `${baseUrl}/beststories.json`,
    topStories: `${baseUrl}/topstories.json`,
    newStories: `${baseUrl}/newstories.json`,
    jobStories: `${baseUrl}/jobstories.json`,
    showStories: `${baseUrl}/showstories.json`,
    getStoryItem: (id: number) => `${baseUrl}/item/${id}.json`,
}