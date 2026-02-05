#!/usr/bin/env python3
"""
Developer tool to extract csvData from app.js and save to _csvData.csv.
This is a reverse operation - copies the embedded data out without any transformation.
"""

import re
from pathlib import Path

# Script location
SCRIPT_DIR = Path(__file__).parent.parent
APP_JS_FILE = SCRIPT_DIR / 'app.js'
OUTPUT_FILE = SCRIPT_DIR / '_csvData.csv'

def extract_csv_data():
    """Extract csvData constant from app.js and save to CSV file."""
    try:
        # Read app.js
        with open(APP_JS_FILE, 'r', encoding='utf-8') as f:
            app_js_content = f.read()
        
        # Pattern to match: const csvData = `...`;
        pattern = r'const csvData = `([^`]*)`'
        match = re.search(pattern, app_js_content, re.DOTALL)
        
        if not match:
            print("✗ Error: Could not find csvData constant in app.js")
            return False
        
        csv_data = match.group(1)
        
        # Write to CSV file
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(csv_data)
        
        line_count = len(csv_data.split('\n'))
        print(f"✓ Successfully extracted csvData to {OUTPUT_FILE}")
        print(f"✓ Total lines: {line_count}")
        return True
        
    except FileNotFoundError:
        print(f"✗ Error: Could not find {APP_JS_FILE}")
        return False
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

if __name__ == '__main__':
    success = extract_csv_data()
    exit(0 if success else 1)
