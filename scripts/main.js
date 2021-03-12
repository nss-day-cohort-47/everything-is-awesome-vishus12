console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("change", (event) => {
	const materials = document.querySelector("#material-select").value
	if (event.target.id === "material-select") {
		if (materials === "None") {
			makeLegoList(useLegos())
		} else {
			console.log("length of materials", materials.length)
			filterMaterials(materials)
		}
	}
})

const filterMaterials = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}
const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
		.then(legoArray => {
			makeLegoList(legoArray)
		})

}

startEIA();
const legoIdElement = document.querySelector("#legoIdElement")
legoIdElement.addEventListener("keyup", event => {
    if (event.key === 'Enter') {
        const legoIdValue = (event.target.value)
        // console.log("user wants to see", legoIdValue)
        filterLegoIdValue(legoIdValue);
    } 
})
const filterLegoIdValue = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.LegoId === (whatFilter)) {
            return singleLego;
        } 
    })
    if (filterArray.length === 0) {
        document.getElementById("all-legos").innerHTML = "<h3>Couldnt find</h3>"
    } else {
        makeLegoList(filterArray);
    }
}

// navElement.addEventListener("keyup", (event) => {
// 	if (event.key === "Enter"){
// 		if (event.target.id === 'search'){
// 			searchBar();

// 		}
// 	}
// })

// function searchBar() {
// 	const legoID = document.getElementById('search').value
// 	console.log("legoID", legoID)
// 	const legotIDSearch = useLegos().filter(singleLego => {
// 		if (singleLego.LegoID === legoID){
// 			return signleLego;
// 		}
// })

// if (legotIDSearch.length === 0){
// 	document.getElementById("all-legos").innerHTML = `<h3> Could not find </h3>`
// }

// else { makeLegoList(legotIDSearch)
// }
// }