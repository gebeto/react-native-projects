import json

jjson = json.load(open('learnjs.json'))
part = jjson.items()
result = []
for prt in part:
	for cnt in prt[1]:
		# cnt['content']['title'] = cnt['content']['title']
		result += cnt['content']

json.dump([{
	'origin_url': res['origin_url'],
	'file_url': res['file_url'],
	'title': res['title'].encode('utf8')
} for res in result], open('search.json', 'w'), indent=4, ensure_ascii=False)
