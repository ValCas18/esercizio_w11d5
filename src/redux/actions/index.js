export const SET_ALBUM = "SET_ALBUM";

export const getAlbum = (query) => {
	return async (dispatch) => {
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
				headers: {
					"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
					"X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
				},
			});
			if (response.ok) {
				let result = await response.json();
				console.log(result.data);
				dispatch({
					type: SET_ALBUM,
					payload: result.data,
				});
			} else {
				throw new Error("error in search");
			}
		} catch (err) {
			console.log("error", err);
		}
	};
};

export default getAlbum;
