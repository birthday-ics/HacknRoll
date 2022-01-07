import { ref, set, get, child } from "firebase/database";
import { database } from "./database";
import { MODULE_INFO } from "../nus_mods_data";

// Returns promise of snapshot
export const getValueByKey = (key) => {
	const dbRef = ref(database);
	return get(child(dbRef, key)).then((snapshot) => {
		if (snapshot.exists()) {
			return snapshot.val()
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
}

// Pass in a `action` closure to call action on the data that is retrieved by the key
export const observeKey = (key, action) => {
	const ref = ref(database, key);
	onValue(ref, (snapshot) => {
		const data = snapshot.val();
		action(data);
	});
}

// References key in database and writes or updates the data, data can be a JSON
// example key: can be 'posts/' + postId + '/numLikes' 
export const writeData = (key, value) => {
	set(ref(database, key), value);
}

// Populate db with NUS module information (only half used, full data set very big), with data from NUS mods API
export const populateModulesDb = () => {
	var allModulesInfo = {}
	MODULE_INFO.forEach(module => {
		allModulesInfo[module["moduleCode"]] = {
			moduleCode: module["moduleCode"],
			title: module["title"],
			description: module["description"]
		}
	})
	writeData("modules", allModulesInfo)
}