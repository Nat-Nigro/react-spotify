export const MY_SEARCH = "MY_SEARCH";
export const MY_PLAYER = "MY_PLAYER";
export const MY_ALBUM = "MY_ALBUM";
export const MY_LIKES = "MY_LIKES";

const searching = (searchValue) => {
  return async (dispatch) => {
    try {
      let response = await fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        let result = await response.json();
        console.log(result.data);
        dispatch({
          type: MY_SEARCH,
          payload: result.data,
        });
      } else {
        throw new Error("Errore durante la ricerca");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const myAlbum = (artist) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        let result = await response.json();
        console.log(result.data);
        dispatch({
          type: MY_ALBUM,
          payload: result.data,
        });
      } else {
        throw new Error("Errore nel caricamento album");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const myPlayer = (selectedAlbum) => {
  return {
    type: MY_PLAYER,
    payload: selectedAlbum,
  };
};

export const myLiked = (likedSong) => {
  return {
    type: MY_LIKES,
    payload: likedSong,
  };
};

export default searching;
