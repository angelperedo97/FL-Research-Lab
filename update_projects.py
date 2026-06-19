import os

proj_dir = '/Users/qxk476/.gemini/antigravity/scratch/FL-Research-Lab/src/content/projects'

placeholder = "\n\n## Project Overview\n\n[Placeholder description for the project. Detail the objectives, methodology, and expected outcomes here.]"

for filename in os.listdir(proj_dir):
    if not filename.endswith('.md'): continue
    filepath = os.path.join(proj_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Split frontmatter
    parts = content.split('---')
    if len(parts) >= 3:
        frontmatter = parts[1]
        body = '---'.join(parts[2:])
        
        if 'github:' not in frontmatter:
            frontmatter += 'github: ""\n'
        if 'related_publications:' not in frontmatter:
            frontmatter += 'related_publications: []\n'
            
        if "Project Overview" not in body:
            body = body.rstrip() + placeholder + "\n"
            
        new_content = '---' + frontmatter + '---' + body
        with open(filepath, 'w') as f:
            f.write(new_content)

print("Updated project files.")
