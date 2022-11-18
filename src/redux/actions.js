export function addFavoriteChar(personaje) {
	return { type: "ADD_FAV_CHAR", payload: personaje };
}

export function removeFavoriteChar(id) {
	return { type: "REMOVE_FAV_CHAR", payload: id };
}

export function filterCard(gender) {
	return { type: "FILTER", payload: gender };
}

export function orderCards(order) {
	return {type: "ORDER",payload: order};
}