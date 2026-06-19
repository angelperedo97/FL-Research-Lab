import os
import re

pub_dir = '/Users/qxk476/.gemini/antigravity/scratch/FL-Research-Lab/src/content/publications'

titles = {}

for filename in os.listdir(pub_dir):
    if not filename.endswith('.md'): continue
    filepath = os.path.join(pub_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    match = re.search(r'^title:\s*"(.*?)"', content, re.MULTILINE)
    if match:
        raw_title = match.group(1)
        # Normalize: lower case, remove punctuation and extra spaces
        norm_title = re.sub(r'[^a-z0-9]', '', raw_title.lower())
        
        if norm_title in titles:
            titles[norm_title].append((filename, raw_title))
        else:
            titles[norm_title] = [(filename, raw_title)]

for norm_title, items in titles.items():
    if len(items) > 1:
        print("Duplicate found:")
        for item in items:
            print(f"  - {item[0]}: {item[1]}")

print("Done fuzzy checking.")
