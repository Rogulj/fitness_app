export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c27d6abc9emsh96785fb9f5b6638p15d0a5jsn9f20bd50ae1b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "c27d6abc9emsh96785fb9f5b6638p15d0a5jsn9f20bd50ae1b",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};
