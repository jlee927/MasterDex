import json

with open('set.json', 'r') as file:
    data = json.load(file)

count = 0;

for line in data:
    if count == 5:
        break

print(data[0]["id"])



