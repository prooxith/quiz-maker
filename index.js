if(localStorage.getItem("Contests")){
	var mainObj = JSON.parse(localStorage.getItem("Contests"))
}else{
	var mainObj = []
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
