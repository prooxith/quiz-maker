js = [{"title":"1","id":"eFxFGl","quizes":[{"serial":1,"qn":"f","ans":"f"},{"serial":2,"qn":"r","ans":"r"}]},{"title":"2","id":"cduISe","quizes":[{"serial":1,"qn":"a","ans":"a"},{"serial":2,"qn":"b","ans":"b"}]}]

import json

arr = []


with open("cntry.txt", "r") as f:
	countryArry = f.read().splitlines()
	for i in range(200):
		mcq = {"serial": i+1, "qn": countryArry[i]}
		arr.append(mcq)
			
with open("cap.txt", "r") as f:
	lines = f.read().splitlines()
	for index, i in enumerate(arr):
		i["ans"] = lines[index]

dic = {"title": "country", "id": "FYUIOP", "quizes": arr}
js.append(dic)
ss = json.dumps(js)
print(ss)