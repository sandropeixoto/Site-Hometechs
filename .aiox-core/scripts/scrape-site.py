import sys
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def scrape_site(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10, verify=False)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        data = {
            "title": soup.title.string if soup.title else "No Title",
            "meta_description": "",
            "headings": {
                "h1": [h.get_text(strip=True) for h in soup.find_all('h1')],
                "h2": [h.get_text(strip=True) for h in soup.find_all('h2')],
                "h3": [h.get_text(strip=True) for h in soup.find_all('h3')]
            },
            "navigation": [],
            "content_snippets": [],
            "images": []
        }
        
        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            data["meta_description"] = meta_desc.get('content', '')
            
        # Navigation (heuristic: look for <nav> or links with many siblings)
        nav = soup.find('nav')
        if nav:
            data["navigation"] = [a.get_text(strip=True) for a in nav.find_all('a') if a.get_text(strip=True)]
        else:
            # Fallback: links in headers/footers
            data["navigation"] = [a.get_text(strip=True) for a in soup.find_all('a')[:10] if a.get_text(strip=True)]
            
        # Content snippets (paragraphs)
        data["content_snippets"] = [p.get_text(strip=True) for p in soup.find_all('p')[:10] if len(p.get_text(strip=True)) > 20]
        
        # Images (limit to 5)
        for img in soup.find_all('img')[:5]:
            src = img.get('src')
            if src:
                data["images"].append(urljoin(url, src))
                
        return data

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No URL provided"}))
    else:
        url = sys.argv[1]
        result = scrape_site(url)
        print(json.dumps(result, indent=2))
