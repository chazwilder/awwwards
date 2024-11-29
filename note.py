import os
import fnmatch

# Hardcoded values
ROOT_DIR = "."
OUTPUT_FILE = "personal_blog.txt"
EXCLUDE_PATTERNS = ["*target", "*git", "*idea", "*output", "*node_modules", "*next","*instrumentation.ts", "sentry.client.config.ts","*sentry*"]
FILE_EXTENSIONS = (".rs", ".toml", ".yaml", ".js", ".ts", ".tsx", ".jsx")


def should_exclude(path):
    return any(fnmatch.fnmatch(os.path.basename(path), pattern) for pattern in EXCLUDE_PATTERNS)


def generate_toc(root_dir):
    toc = ["# Table of Contents\n"]
    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if not should_exclude(d)]
        level = root.replace(root_dir, '').count(os.sep)
        indent = '  ' * level
        toc.append(f"{indent}- {os.path.basename(root)}/\n")
        for file in files:
            if file.endswith(FILE_EXTENSIONS) and not should_exclude(file):
                toc.append(f"{indent}  - {file}\n")
    return ''.join(toc)


def generate_content(root_dir):
    content = []
    for root, dirs, files in os.walk(root_dir):
        dirs[:] = [d for d in dirs if not should_exclude(d)]
        for file in files:
            if file.endswith(FILE_EXTENSIONS) and not should_exclude(file):
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, root_dir)
                content.append(f"\n# {relative_path}\n")
                content.append("```\n")
                with open(file_path, 'r', encoding='utf-8') as f:
                    content.append(f.read())
                content.append("```\n")
                content.append("\n" + "-" * 80 + "\n")
    return ''.join(content)


def main():
    toc = generate_toc(ROOT_DIR)
    content = generate_content(ROOT_DIR)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(toc)
        f.write("\n" + "-" * 80 + "\n")
        f.write(content)

    print(f"File '{OUTPUT_FILE}' has been generated successfully.")


if __name__ == "__main__":
    main()