from bs4 import BeautifulSoup
import requests
import json
import os
import re

urls = json.load(open('search.json'))

for url in urls:
	html = requests.get(url['origin_url']).content
	dirs = re.findall(r'src=[\'"]?([^\'" >]+\.(?:png|jpg))', html)
	for file_url in dirs:
		dirr = '/'.join(file_url.split('/')[1:-1])
		try:
			os.makedirs(dirr)
			print dirr
		except:
			pass
		try:
			open('/'.join(file_url.split('/')[1:]), 'wb').write(requests.get('http://learn.javascript.ru' + file_url).content)
			print '/'.join(file_url.split('/')[1:])
		except:
			pass


