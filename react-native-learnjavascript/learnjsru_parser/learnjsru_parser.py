import json
import requests
from bs4 import BeautifulSoup

learnjavascript = {}
base_url = "http://learn.javascript.ru"
file_url = "learnjsfiles"

try: os.mkdir(file_url)
except: pass

def downlaod_lection(url):
	resp = requests.get(base_url + url).content
	soup = BeautifulSoup(resp, 'html.parser')
	resource = soup.find('article')
	# open(file_url + url + ".html", "wb").write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, minimum-scale=1.0"><link rel="stylesheet" type="text/css" href="./styles.css"></head><body><div class="page__inner"><main class="main main_width-limit">' + str(resource) + "</main></div></body></html>")
	print url
	res = str(resource)
	res = res.replace('src="/', 'src="')
	open(file_url + url + ".html", "wb").write('''
		<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, minimum-scale=1.0">
		<link rel="stylesheet" type="text/css" href="./styles.css">
		<link rel="stylesheet" type="text/css" href="./prism.css">
		<script src="./prism.js"></script>
		</head><body><div class="page__inner"><main class="main main_width-limit">''' + res + '''</main></div></body></html>''')


menu_url = "http://learn.javascript.ru/tutorial/map"
html = requests.get(menu_url)
soup = BeautifulSoup(html.content, 'html.parser')
parts = soup.find_all("div", {"class": "tutorial-map-list__item"})
iid = 0;

for part in parts:
	part_title = part.find('h2').getText().encode('utf8')
	sub_parts = part.find_all('li', {"class": "tutorial-map-list-two__item"})
	learnjavascript[part_title] = [];
	for i, sub_part in enumerate(sub_parts):
		sub_part_title = sub_part.div.a.getText().encode('utf8')
		sub_part_content = sub_part.ul.find_all('li', {"class": "tutorial-map-list-three__item"})
		for i, url in enumerate(sub_part_content):
			downlaod_lection(url.div.a["href"])
		learnjavascript[part_title].append({
			"title": sub_part_title,
			"id": iid,
			"content": [{
				"origin_url": base_url + url.div.a["href"],
				"file_url": url.div.a["href"],
				"title": url.div.a.getText().encode('utf8')
			} for i, url in enumerate(sub_part_content)]
		})
		iid += 1
		








# print learnjavascript
json.dump(learnjavascript, open("learnjs.json", "w"), indent=4, ensure_ascii=False)

