import os
import re

proj_dir = '/Users/qxk476/.gemini/antigravity/scratch/FL-Research-Lab/src/content/projects'

for filename in os.listdir(proj_dir):
    if not filename.endswith('.md'): continue
    filepath = os.path.join(proj_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    parts = content.split('---')
    if len(parts) >= 3:
        frontmatter = parts[1]
        body = '---'.join(parts[2:])
        
        # Extract summary
        match = re.search(r'summary:\s*"([^"]+)"', frontmatter)
        if match:
            summary = match.group(1)
            # Replace placeholder text with summary
            body = re.sub(r'\[Placeholder description.*?\]', summary, body)
            
            new_content = '---' + frontmatter + '---' + body
            with open(filepath, 'w') as f:
                f.write(new_content)

print("Moved summaries to body.")
