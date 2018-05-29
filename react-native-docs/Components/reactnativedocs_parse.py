import json
import requests
from bs4 import BeautifulSoup

base_url = "http://facebook.github.io/react-native/releases/next/"
url = "http://facebook.github.io/react-native/releases/next/docs/getting-started.html"

resp = requests.get(url).content
soup = BeautifulSoup(resp, "html.parser")
nav = soup.find("div", {"class": "nav-docs"})
sections = nav.find_all("div", {"class": "nav-docs-section"})

def get_html(url):
	resp = requests.get(url).content
	soup = BeautifulSoup(resp, "html.parser")
	content = soup.find("div", {"class": "inner-content"})
	return str(content)

def get_section(section):
	title = section.h3.text.upper()
	result = {"title": title, "items": []}
	for each in section.ul.find_all('a'):
		html = get_html(base_url + each["href"])
		html = html.replace('<div class="embedded-simulator">', '<div style="display: none" class="embedded-simulator">')
		html = html.replace('<div class="inner-content">', '<div class="inner-content" style="padding: 5px">')
		result["items"].append({
			"name": each.text,
			"html": html
		})
		print each.text
	return result

all_items = {}

for each in sections:
	res = get_section(each)
	all_items[res["title"]] = res["items"]

# save all items in file
json.dump(all_items, open("reactdocs.json", "w"), indent=4)

