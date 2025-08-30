if(localStorage.getItem("Contests")){
	var mainObj = JSON.parse(localStorage.getItem("Contests"))
}else{
	var mainObj = [{"title": "Country Capitals", "id": "FYUIOP", "quizes": [{"serial": 1, "qn": "Afghanistan", "ans": "Kabul"}, {"serial": 2, "qn": "Albania", "ans": "Tirana (Tirane)"}, {"serial": 3, "qn": "Algeria", "ans": "Algiers"}, {"serial": 4, "qn": "Andorra", "ans": "Andorra la Vella"}, {"serial": 5, "qn": "Angola", "ans": "Luanda"}, {"serial": 6, "qn": "Antigua and Barbuda", "ans": "Saint John's"}, {"serial": 7, "qn": "Argentina", "ans": "Buenos Aires"}, {"serial": 8, "qn": "Armenia", "ans": "Yerevan"}, {"serial": 9, "qn": "Australia", "ans": "Canberra"}, {"serial": 10, "qn": "Austria", "ans": "Vienna"}, {"serial": 11, "qn": "Azerbaijan", "ans": "Baku"}, {"serial": 12, "qn": "Bahamas", "ans": "Nassau"}, {"serial": 13, "qn": "Bahrain", "ans": "Manama"}, {"serial": 14, "qn": "Bangladesh", "ans": "Dhaka"}, {"serial": 15, "qn": "Barbados", "ans": "Bridgetown"}, {"serial": 16, "qn": "Belarus", "ans": "Minsk"}, {"serial": 17, "qn": "Belgium", "ans": "Brussels"}, {"serial": 18, "qn": "Belize", "ans": "Belmopan"}, {"serial": 19, "qn": "Benin", "ans": "Porto Novo"}, {"serial": 20, "qn": "Bhutan", "ans": "Thimphu"}, {"serial": 21, "qn": "Bolivia", "ans": "La Paz (administrative), Sucre (official) "}, {"serial": 22, "qn": "Bosnia and Herzegovina", "ans": "Sarajevo"}, {"serial": 23, "qn": "Botswana", "ans": "Gaborone"}, {"serial": 24, "qn": "Brazil", "ans": "Brasilia"}, {"serial": 25, "qn": "Brunei", "ans": "Bandar Seri Begawan"}, {"serial": 26, "qn": "Bulgaria", "ans": "Sofia"}, {"serial": 27, "qn": "Burkina Faso", "ans": "Ouagadougou"}, {"serial": 28, "qn": "Burundi", "ans": "Gitega"}, {"serial": 29, "qn": "Cambodia", "ans": "Phnom Penh"}, {"serial": 30, "qn": "Cameroon", "ans": "Yaounde"}, {"serial": 31, "qn": "Canada", "ans": "Ottawa"}, {"serial": 32, "qn": "Cape Verde", "ans": "Praia"}, {"serial": 33, "qn": "Central African Republic", "ans": "Bangui"}, {"serial": 34, "qn": "Chad", "ans": "N'Djamena"}, {"serial": 35, "qn": "Chile", "ans": "Santiago"}, {"serial": 36, "qn": "China", "ans": "Beijing"}, {"serial": 37, "qn": "Colombia", "ans": "Bogota"}, {"serial": 38, "qn": "Comoros", "ans": "Moroni"}, {"serial": 39, "qn": "Congo, Democratic Republic of the", "ans": "Kinshasa"}, {"serial": 40, "qn": "Congo, Republic of the", "ans": "Brazzaville"}, {"serial": 41, "qn": "Costa Rica", "ans": "San Jose"}, {"serial": 42, "qn": "C\u00f4te d'Ivoire (Ivory Coast)", "ans": "Yamoussoukro"}, {"serial": 43, "qn": "Croatia", "ans": "Zagreb"}, {"serial": 44, "qn": "Cuba", "ans": "Havana"}, {"serial": 45, "qn": "Cyprus", "ans": "Nicosia"}, {"serial": 46, "qn": "Czech Republic (Czechia) ", "ans": "Prague"}, {"serial": 47, "qn": "Denmark", "ans": "Copenhagen"}, {"serial": 48, "qn": "Djibouti", "ans": "Djibouti"}, {"serial": 49, "qn": "Dominica", "ans": "Roseau"}, {"serial": 50, "qn": "Dominican Republic", "ans": "Santo Domingo"}, {"serial": 51, "qn": "East Timor", "ans": "Dili"}, {"serial": 52, "qn": "Ecuador", "ans": "Quito"}, {"serial": 53, "qn": "Egypt", "ans": "Cairo"}, {"serial": 54, "qn": "El Salvador", "ans": "San Salvador"}, {"serial": 55, "qn": "England", "ans": "London"}, {"serial": 56, "qn": "Equatorial Guinea", "ans": "Malabo"}, {"serial": 57, "qn": "Eritrea", "ans": "Asmara"}, {"serial": 58, "qn": "Estonia", "ans": "Tallinn"}, {"serial": 59, "qn": "Eswatini (Swaziland)", "ans": "Mbabana"}, {"serial": 60, "qn": "Ethiopia", "ans": "Addis Ababa"}, {"serial": 61, "qn": "Federated States of Micronesia", "ans": "Palikir"}, {"serial": 62, "qn": "Fiji", "ans": "Suva"}, {"serial": 63, "qn": "Finland", "ans": "Helsinki"}, {"serial": 64, "qn": "France", "ans": "Paris"}, {"serial": 65, "qn": "Gabon", "ans": "Libreville"}, {"serial": 66, "qn": "Gambia", "ans": "Banjul"}, {"serial": 67, "qn": "Georgia", "ans": "Tbilisi"}, {"serial": 68, "qn": "Germany", "ans": "Berlin"}, {"serial": 69, "qn": "Ghana", "ans": "Accra"}, {"serial": 70, "qn": "Greece", "ans": "Athens"}, {"serial": 71, "qn": "Grenada", "ans": "Saint George's"}, {"serial": 72, "qn": "Guatemala", "ans": "Guatemala City"}, {"serial": 73, "qn": "Guinea", "ans": "Conakry"}, {"serial": 74, "qn": "Guinea-Bissau", "ans": "Bissau"}, {"serial": 75, "qn": "Guyana", "ans": "Georgetown"}, {"serial": 76, "qn": "Haiti", "ans": "Port au Prince"}, {"serial": 77, "qn": "Honduras", "ans": "Tegucigalpa"}, {"serial": 78, "qn": "Hungary", "ans": "Budapest"}, {"serial": 79, "qn": "Iceland", "ans": "Reykjavik"}, {"serial": 80, "qn": "India", "ans": "New Delhi"}, {"serial": 81, "qn": "Indonesia", "ans": "Jakarta"}, {"serial": 82, "qn": "Iran", "ans": "Tehran"}, {"serial": 83, "qn": "Iraq", "ans": "Baghdad"}, {"serial": 84, "qn": "Ireland", "ans": "Dublin"}, {"serial": 85, "qn": "Israel", "ans": "Jerusalem (very limited international recognition) "}, {"serial": 86, "qn": "Italy", "ans": "Rome"}, {"serial": 87, "qn": "Jamaica", "ans": "Kingston"}, {"serial": 88, "qn": "Japan", "ans": "Tokyo"}, {"serial": 89, "qn": "Jordan", "ans": "Amman"}, {"serial": 90, "qn": "Kazakhstan", "ans": "Nur-Sultan"}, {"serial": 91, "qn": "Kenya", "ans": "Nairobi"}, {"serial": 92, "qn": "Kiribati", "ans": "Tarawa Atoll"}, {"serial": 93, "qn": "Kosovo", "ans": "Pristina"}, {"serial": 94, "qn": "Kuwait", "ans": "Kuwait City"}, {"serial": 95, "qn": "Kyrgyzstan", "ans": "Bishkek"}, {"serial": 96, "qn": "Laos", "ans": "Vientiane"}, {"serial": 97, "qn": "Latvia", "ans": "Riga"}, {"serial": 98, "qn": "Lebanon", "ans": "Beirut"}, {"serial": 99, "qn": "Lesotho", "ans": "Maseru"}, {"serial": 100, "qn": "Liberia", "ans": "Monrovia"}, {"serial": 101, "qn": "Libya", "ans": "Tripoli"}, {"serial": 102, "qn": "Liechtenstein", "ans": "Vaduz"}, {"serial": 103, "qn": "Lithuania", "ans": "Vilnius"}, {"serial": 104, "qn": "Luxembourg", "ans": "Luxembourg"}, {"serial": 105, "qn": "Madagascar", "ans": "Antananarivo"}, {"serial": 106, "qn": "Malawi", "ans": "Lilongwe"}, {"serial": 107, "qn": "Malaysia", "ans": "Kuala Lumpur"}, {"serial": 108, "qn": "Maldives", "ans": "Male"}, {"serial": 109, "qn": "Mali", "ans": "Bamako"}, {"serial": 110, "qn": "Malta", "ans": "Valletta"}, {"serial": 111, "qn": "Marshall Islands", "ans": "Majuro"}, {"serial": 112, "qn": "Mauritania", "ans": "Nouakchott"}, {"serial": 113, "qn": "Mauritius", "ans": "Port Louis"}, {"serial": 114, "qn": "Mexico", "ans": "Mexico City"}, {"serial": 115, "qn": "Moldova", "ans": "Chisinau"}, {"serial": 116, "qn": "Monaco", "ans": "Monaco"}, {"serial": 117, "qn": "Mongolia", "ans": "Ulaanbaatar"}, {"serial": 118, "qn": "Montenegro", "ans": "Podgorica"}, {"serial": 119, "qn": "Morocco", "ans": "Rabat"}, {"serial": 120, "qn": "Mozambique", "ans": "Maputo"}, {"serial": 121, "qn": "Myanmar (Burma)", "ans": "Nay Pyi Taw"}, {"serial": 122, "qn": "Namibia", "ans": "Windhoek"}, {"serial": 123, "qn": "Nauru", "ans": "No official capital"}, {"serial": 124, "qn": "Nepal", "ans": "Kathmandu"}, {"serial": 125, "qn": "Netherlands", "ans": "Amsterdam"}, {"serial": 126, "qn": "New Zealand", "ans": "Wellington"}, {"serial": 127, "qn": "Nicaragua", "ans": "Managua"}, {"serial": 128, "qn": "Niger", "ans": "Niamey"}, {"serial": 129, "qn": "Nigeria", "ans": "Abuja"}, {"serial": 130, "qn": "North Korea", "ans": "Pyongyang"}, {"serial": 131, "qn": "North Macedonia (Macedonia) ", "ans": "Skopje"}, {"serial": 132, "qn": "Northern Ireland", "ans": "Belfast"}, {"serial": 133, "qn": "Norway", "ans": "Oslo"}, {"serial": 134, "qn": "Oman", "ans": "Muscat"}, {"serial": 135, "qn": "Pakistan", "ans": "Islamabad"}, {"serial": 136, "qn": "Palau", "ans": "Melekeok"}, {"serial": 137, "qn": "Panama", "ans": "Panama City"}, {"serial": 138, "qn": "Papua New Guinea", "ans": "Port Moresby"}, {"serial": 139, "qn": "Paraguay", "ans": "Asuncion"}, {"serial": 140, "qn": "Peru", "ans": "Lima"}, {"serial": 141, "qn": "Philippines", "ans": "Manila"}, {"serial": 142, "qn": "Poland", "ans": "Warsaw"}, {"serial": 143, "qn": "Portugal", "ans": "Lisbon"}, {"serial": 144, "qn": "Qatar", "ans": "Doha"}, {"serial": 145, "qn": "Romania", "ans": "Bucharest"}, {"serial": 146, "qn": "Russia", "ans": "Moscow"}, {"serial": 147, "qn": "Rwanda", "ans": "Kigali"}, {"serial": 148, "qn": "Saint Kitts and Nevis", "ans": "Basseterre"}, {"serial": 149, "qn": "Saint Lucia", "ans": "Castries"}, {"serial": 150, "qn": "Saint Vincent and the Grenadines", "ans": "Kingstown"}, {"serial": 151, "qn": "Samoa", "ans": "Apia"}, {"serial": 152, "qn": "San Marino", "ans": "San Marino"}, {"serial": 153, "qn": "Sao Tome and Principe", "ans": "Sao Tome"}, {"serial": 154, "qn": "Saudi Arabia", "ans": "Riyadh"}, {"serial": 155, "qn": "Scotland", "ans": "Edinburgh"}, {"serial": 156, "qn": "Senegal", "ans": "Dakar"}, {"serial": 157, "qn": "Serbia", "ans": "Belgrade"}, {"serial": 158, "qn": "Seychelles", "ans": "Victoria"}, {"serial": 159, "qn": "Sierra Leone", "ans": "Freetown"}, {"serial": 160, "qn": "Singapore", "ans": "Singapore"}, {"serial": 161, "qn": "Slovakia", "ans": "Bratislava"}, {"serial": 162, "qn": "Slovenia", "ans": "Ljubljana"}, {"serial": 163, "qn": "Solomon Islands", "ans": "Honiara"}, {"serial": 164, "qn": "Somalia", "ans": "Mogadishu"}, {"serial": 165, "qn": "South Africa", "ans": "Pretoria, Bloemfontein, Cape Town[17]"}, {"serial": 166, "qn": "South Korea", "ans": "Seoul"}, {"serial": 167, "qn": "South Sudan", "ans": "Juba"}, {"serial": 168, "qn": "Spain", "ans": "Madrid"}, {"serial": 169, "qn": "Sri Lanka", "ans": "Colombo, Sri Jayawardenapura Kotte(Legislative)"}, {"serial": 170, "qn": "Sudan", "ans": "Khartoum"}, {"serial": 171, "qn": "Suriname", "ans": "Paramaribo"}, {"serial": 172, "qn": "Sweden", "ans": "Stockholm"}, {"serial": 173, "qn": "Switzerland", "ans": "Bern"}, {"serial": 174, "qn": "Syria", "ans": "Damascus"}, {"serial": 175, "qn": "Taiwan", "ans": "Taipei"}, {"serial": 176, "qn": "Tajikistan", "ans": "Dushanbe"}, {"serial": 177, "qn": "Tanzania", "ans": "Dodoma"}, {"serial": 178, "qn": "Thailand", "ans": "Bangkok"}, {"serial": 179, "qn": "Togo", "ans": "Lome"}, {"serial": 180, "qn": "Tonga", "ans": "Nuku'alofa"}, {"serial": 181, "qn": "Trinidad and Tobago", "ans": "Port of Spain"}, {"serial": 182, "qn": "Tunisia", "ans": "Tunis"}, {"serial": 183, "qn": "T\u00fcrkiye (Turkey) ", "ans": "Ankara"}, {"serial": 184, "qn": "Turkmenistan", "ans": "Ashgabat"}, {"serial": 185, "qn": "Tuvalu", "ans": "Funafuti"}, {"serial": 186, "qn": "Uganda", "ans": "Kampala"}, {"serial": 187, "qn": "Ukraine", "ans": "Kyiv or Kiev"}, {"serial": 188, "qn": "United Arab Emirates", "ans": "Abu Dhabi"}, {"serial": 189, "qn": "United Kingdom", "ans": "London"}, {"serial": 190, "qn": "United States", "ans": "Washington D.C."}, {"serial": 191, "qn": "Uruguay", "ans": "Montevideo"}, {"serial": 192, "qn": "Uzbekistan", "ans": "Tashkent"}, {"serial": 193, "qn": "Vanuatu", "ans": "Port Vila"}, {"serial": 194, "qn": "Vatican City", "ans": "Vatican City"}, {"serial": 195, "qn": "Venezuela", "ans": "Caracas"}, {"serial": 196, "qn": "Vietnam", "ans": "Hanoi"}, {"serial": 197, "qn": "Wales", "ans": "Cardiff"}, {"serial": 198, "qn": "Yemen", "ans": "Sana'a"}, {"serial": 199, "qn": "Zambia", "ans": "Lusaka"}, {"serial": 200, "qn": "Zimbabwe", "ans": "Harare"}]}]
}

var cmenuEl = ''

function checkIfEmpty(){
	const el = document.querySelector(".cardsArea")
	const elCount = el.childElementCount
	if(elCount==0){
		cardsArea.innerHTML = `<div class="empty">No tests for now</div>`
	}
}

const hierarchy = document.querySelector(".hierarchy")
const createEl = document.querySelector(".create")
const toolbox = document.querySelector(".toolbox")
const practiceBox = document.querySelector('.practiceSession')
const blur = document.querySelector('.blurPart')
const headerTitle = document.querySelector('.header')
const tables = document.querySelector(".tables")

tables.addEventListener("keydown", (event)=>{
	if(event.code == "Enter"){
		event.preventDefault()
		addmcq()
	}
})

document.addEventListener("keydown", event=>{
	if(event.code == "Escape"){
		closeCreation()
		closeExam()
	}
})

document.addEventListener("paste", function(e) {
    // cancel paste
    e.preventDefault();

    // get text representation of clipboard
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');

    // insert text manually
    document.execCommand("insertHTML", false, text);
});

const cardsArea = document.querySelector(".cardsArea")

const menu = document.querySelector('.itemOptions')


const startCards=(title, id)=>{
	var item = document.createElement('div')
	item.classList.add("item", id)
	item.innerText = title
	item.setAttribute('onclick','examPopup(this)')
	cardsArea.append(item)	
}

const initCards=()=>{
	for(let x of mainObj){
		startCards(x.title, x.id)
	}
}
initCards()

var item = document.querySelectorAll(".item");
for (let k=0;k < item.length; k++){
	item[k].addEventListener("contextmenu",function(event){
		menu.style.display = 'flex'
		menu.style.top = event.clientY+"px"
		menu.style.left = event.clientX+"px"
		event.preventDefault()
		cmenuEl = event.srcElement
	},false);
}

document.addEventListener("click", ()=>{
	menu.style.display = "none"
})

const storageRemoveCard=(id)=>{
	console.log(id)
	for(let j=0; j < mainObj.length; j++){
		if (mainObj[j].id == id){
			console.log(mainObj[j].id)
			mainObj.splice(j, 1)
			localStorage.setItem("Contests", JSON.stringify(mainObj))
			return
		}

	}
}

const removeItem=()=>{
	cmenuEl.remove()
	cardId = cmenuEl.classList[1]
	storageRemoveCard(cardId)
	checkIfEmpty()
}


const create=()=>{
	headerTitle.innerText = "add whatever the hell duh"
	toolbox.style.display = "none"
	hierarchy.style.display = "none"
	createEl.style.display = "flex"
}

const rndID=()=>{
	let id = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 6; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}
rndID()
const addCard=()=>{
	var cardOBJ = {}
	const quizTitle = document.querySelector(".questionTITLE ").innerText

	cardOBJ.title = quizTitle
	cardOBJ.id = rndID()

	const qnas = document.querySelectorAll(".choice")

	var cardsContainer = []

	for (let i=0; i < qnas.length; i++){
		quizQn = qnas[i].querySelector(".qn").innerText
		quizAns = qnas[i].querySelector(".ans").innerText

		cardsContainer.push({serial : i+1, qn:quizQn, ans:quizAns})
	}
	cardOBJ.quizes = cardsContainer
	mainObj.push(cardOBJ)
	localStorage.setItem("Contests", JSON.stringify(mainObj))
	location.reload()
}

const createMCQBOX=()=>{
	const table = document.querySelector(".mcqs")
	console.log(table.childElementCount)
	const serialNo = table.childElementCount+1

	const choiceEl = document.createElement('div')
	choiceEl.classList.add("choice", "choice"+serialNo)
	const serial = document.createElement('div')
	serial.classList.add("serial")
	serial.innerText = serialNo+"."
	choiceEl.append(serial)

	const question = document.createElement('div')
	question.setAttribute('placeholder','Question?')

	question.classList.add("formatchoice","qn", "edit")
	question.contentEditable = "true"
	choiceEl.append(question)

	const divider = document.createElement('div')
	divider.classList.add('divider')
	divider.innerText = ":"
	choiceEl.append(divider)

	const answer = document.createElement('div')
	answer.setAttribute('placeholder','ans?')
	answer.classList.add("formatchoice","ans", "edit")
	answer.contentEditable = "true"
	choiceEl.append(answer)

	table.append(choiceEl)
	question.focus()
}

const closeCreation=()=>{
	headerTitle.innerText = "Previously Created Stuffs-"
	toolbox.style.display = "flex"
	hierarchy.style.display = ""
	createEl.style.display = "none"
}

const closeExam=()=>{
	blur.style.display = "none"
	practiceBox.style.display = "none"

	mainDiv = document.querySelector(".questions")

	mainDiv.innerHTML = `

		<div class="questionNo">
			<div class="questionCount">0/..</div>
			<div class="errorCount">0</div>
		</div>
		<div class="question">1. Are You Crazy?</div>
		<div class="options">
			<div class="op1 item">1</div>
			<div class="op2 item">2</div>
			<div class="op3 item">3</div>
			<div class="op4 item">4</div>
		</div>

	`

}

var examEl = ''
var examSerial = 1
var errorCount = 0

const resetVars=()=>{
	mainDiv = document.querySelector(".questions")
	mainDiv.innerHTML = `<div class="examFinal">You've got  ${errorCount} Wrong</div> `

	examEl = ''
	examSerial = 1
	errorCount = 0
}

var ignoreClicks = false


const validateAnswer=(el)=>{

	if(ignoreClicks) return

	selectedAns = el.innerText
	examId = examEl.classList[1]

	for(let u=0; u< mainObj.length ; u++){
		if (mainObj[u].id == examId){
			for (let e=0; e< mainObj[u].quizes.length; e++){
				if (mainObj[u].quizes[e].serial == examSerial){
					if (mainObj[u].quizes[e].ans == selectedAns)
					{
						console.log(examSerial, 'correct')
						ignoreClicks = true
						el.classList.add("correctAns")
						setTimeout(()=>{

							if (mainObj[u].quizes.length == examSerial)
							{
								console.log('done you are')
								resetVars()
								ignoreClicks = false
								return
							}

							examSerial++
							startExam(examId, examSerial)
							ignoreClicks = false
						}, 1500)
						return
					}else{
						ignoreClicks = true

						errorCount++
						el.classList.add("wrongAns")
						document.querySelector(".errorCount").innerText = errorCount
						document.querySelector(".rightAns").style.background = "#37b337"
						
						setTimeout(()=>{
							if (mainObj[u].quizes.length == examSerial){
								console.log('done you are')
								resetVars()
								ignoreClicks = false
								return
							}
							examSerial++
							startExam(examId, examSerial)
							ignoreClicks = false

						}, 1500)
						return
					}
				}
			}
		}
	}
}


const addMcqOptionItem=(optionsArr, ans)=>{
	var choicesEl = document.querySelector('.options')

	var allOptions = document.createElement('div')
	allOptions.classList.add('allItems')

	for (let q=0;q < optionsArr.length;q++){
		var option = document.createElement('div')

		if(optionsArr[q] == ans){
			option.classList.add("rightAns")
		}

		option.classList.add("op", "item")
		option.setAttribute('onclick','validateAnswer(this)')
		option.innerText = optionsArr[q]
		option.title = optionsArr[q]
		allOptions.append(option)
	}

	choicesEl.innerHTML = ''
	choicesEl.append(allOptions)

}

function getRandomITES(arr, n) {
    var len = arr.length
    if(n > len){
    	n = len
    	console.log(n, len)
    }
    var result = new Array(n),
        taken = new Array(len);

    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


function getRandom(serial) {

	opArr = []

	var ans = ''

	for(let y=0; y < mainObj.length; y++){
		if (mainObj[y].id == examEl.classList[1]){
			ans = mainObj[y].quizes[serial-1].ans

			for (let o=0; o < mainObj[y].quizes.length;o++){
				if (mainObj[y].quizes[o].serial !== serial){
					opArr.push(mainObj[y].quizes[o].ans)
				}
			}

		}
	}
	var finalArr = getRandomITES(opArr, 3)
	finalArr.push(ans)
	return finalArr
}

const startExam=(id, serial)=>{
	var titleExam = document.querySelector(".title")
	var quizQnCount = document.querySelector(".questionCount")
	var mcqQn = document.querySelector(".question")

	var optionsArray = getRandom(serial)

	optionsArray.sort(() => Math.random() - 0.5);

	for (let a=0;a < mainObj.length; a++){

		if (mainObj[a].id == id){
			mcqQn.innerText = mainObj[a].quizes[serial-1].qn

			ans = mainObj[a].quizes[serial-1].ans

			addMcqOptionItem(optionsArray, ans)

			quizQnCount.innerText = `${serial}/${mainObj[a].quizes.length}`
			titleExam.innerText = mainObj[a].title 
		}
	}
}

const examPopup=(el)=>{

	examEl = el
	startExam(el.classList[1], 1)

	blur.style.display = "inline-block"
	practiceBox.style.display = "flex"
}

const addmcq=()=>{
	const table = document.querySelector(".mcqs")
	console.log(table.childElementCount)
	createMCQBOX()

}

checkIfEmpty()
