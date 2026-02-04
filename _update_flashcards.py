#!/usr/bin/env python3
"""
Developer tool to update flashcards data in app.js from Google Sheets TSV export.
"""

import urllib.request
import re
from pathlib import Path

# Google Sheets export URL (TSV format)
GOOGLE_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT45XaOHQgAkXJ7fOcVpGyKV7prIITJ-NAb_U2TZm3rA6DFu2ktNla0MG9taaYpix-htv_gFtN-jyLh/pub?output=tsv'

# Script location
SCRIPT_DIR = Path(__file__).parent
APP_JS_FILE = SCRIPT_DIR / 'app.js'

def convert_tsv_to_csv(tsv_text):
    """Convert TSV (tab-separated) to CSV (pipe-separated)."""
    lines = tsv_text.strip().split('\n')
    csv_lines = []
    
    for line in lines:
        # Replace tabs with pipes
        csv_line = line.replace('\t', '|')
        csv_lines.append(csv_line)
    
    return '\n'.join(csv_lines)

def update_app_js(csv_data):
    """Update the csvData constant in app.js with new data."""
    try:
        # Read current app.js
        with open(APP_JS_FILE, 'r', encoding='utf-8') as f:
            app_js_content = f.read()
        
        # Create new csvData content with escaped backticks
        escaped_data = csv_data.replace('`', '\\`')
        new_csv_data = f"const csvData = `{escaped_data}`;"
        
        # Replace the csvData constant
        # Pattern to match: const csvData = `...`;
        pattern = r'const csvData = `[^`]*`;'
        
        if not re.search(pattern, app_js_content, re.DOTALL):
            print("✗ Error: Could not find csvData constant in app.js")
            return False
        
        updated_content = re.sub(pattern, new_csv_data, app_js_content, flags=re.DOTALL)
        
        # Write back to app.js
        with open(APP_JS_FILE, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        return True
    except Exception as e:
        print(f"✗ Error updating app.js: {e}")
        return False

def download_and_update():
    """Download TSV from Google Sheets and update app.js."""
    try:
        print("Downloading data from Google Sheets...")
        
        # Download TSV data
        with urllib.request.urlopen(GOOGLE_SHEETS_URL) as response:
            tsv_data = response.read().decode('utf-8')
        
        print(f"✓ Downloaded {len(tsv_data)} bytes")
        
        # Convert TSV to CSV (pipe-separated)
        csv_data = convert_tsv_to_csv(tsv_data)
        
        line_count = len(csv_data.split('\n'))
        print(f"✓ Converted to CSV format ({line_count} lines)")
        
        # Update app.js
        print(f"Updating {APP_JS_FILE}...")
        if update_app_js(csv_data):
            print(f"✓ Successfully updated app.js")
            print(f"✓ Total data lines: {line_count}")
            return True
        else:
            return False
        
    except urllib.error.URLError as e:
        print(f"✗ Error downloading from Google Sheets: {e}")
        return False
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

if __name__ == '__main__':
    success = download_and_update()
    exit(0 if success else 1)
