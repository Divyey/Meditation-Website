# 🔍 How to Check HTTP Headers (ETag, Last-Modified, SHA, etc.)

This guide shows you how to manually check HTTP headers for your website, which is essential for testing your scraper's change detection system.

## 🌐 Method 1: Browser Developer Tools (Easiest)

### Chrome/Edge/Brave:
1. Open your website: `https://oneworldonefamilymeditation.com`
2. Press `F12` or `Right-click → Inspect`
3. Go to **Network** tab
4. Refresh the page (`F5` or `Ctrl+R`)
5. Click on any request (e.g., `sitemap.xml`, `index.html`)
6. Look at **Headers** section:
   - **Response Headers**: Shows `ETag`, `Last-Modified`, `Content-Type`, etc.
   - **Request Headers**: Shows `If-None-Match`, `If-Modified-Since`, etc.

### Firefox:
1. Open your website
2. Press `F12` → **Network** tab
3. Refresh page
4. Click on a request → **Headers** tab

### Safari:
1. Enable Developer menu: `Preferences → Advanced → Show Develop menu`
2. `Develop → Show Web Inspector`
3. **Network** tab → Refresh → Click request → **Headers**

---

## 💻 Method 2: Command Line (curl)

### Basic Request:
```bash
curl -I https://oneworldonefamilymeditation.com/sitemap.xml
```

### Detailed Headers:
```bash
curl -v https://oneworldonefamilymeditation.com/sitemap.xml
```

### With ETag Validation:
```bash
# First request - get ETag
curl -I https://oneworldonefamilymeditation.com/sitemap.xml

# Second request with If-None-Match (should return 304 if unchanged)
curl -H "If-None-Match: \"sitemap-5-1234567890\"" \
     -I https://oneworldonefamilymeditation.com/sitemap.xml
```

### Save Headers to File:
```bash
curl -I https://oneworldonefamilymeditation.com/sitemap.xml > headers.txt
```

---

## 🐍 Method 3: Python Script

```python
import requests

url = "https://oneworldonefamilymeditation.com/sitemap.xml"

# First request
response = requests.head(url)
print("Status Code:", response.status_code)
print("\nResponse Headers:")
for key, value in response.headers.items():
    print(f"{key}: {value}")

# Get ETag
etag = response.headers.get('ETag')
print(f"\nETag: {etag}")

# Second request with If-None-Match
if etag:
    headers = {'If-None-Match': etag}
    response2 = requests.head(url, headers=headers)
    print(f"\nSecond Request Status: {response2.status_code}")
    print("(304 = Not Modified, 200 = Changed)")
```

---

## 🔧 Method 4: Node.js Script

```javascript
const https = require('https');

const url = 'https://oneworldonefamilymeditation.com/sitemap.xml';

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('\nResponse Headers:');
  console.log(res.headers);
  
  const etag = res.headers.etag;
  console.log(`\nETag: ${etag}`);
  
  // Second request with If-None-Match
  if (etag) {
    const options = {
      headers: {
        'If-None-Match': etag
      }
    };
    
    https.get(url, options, (res2) => {
      console.log(`\nSecond Request Status: ${res2.statusCode}`);
      console.log('(304 = Not Modified, 200 = Changed)');
    });
  }
});
```

---

## 📊 Key Headers to Check

### For Change Detection:

1. **ETag** (Entity Tag)
   - Format: `"sitemap-5-1234567890"`
   - Changes when content changes
   - Used with `If-None-Match` header

2. **Last-Modified**
   - Format: `Mon, 27 Jan 2025 12:34:56 GMT`
   - Timestamp of last modification
   - Used with `If-Modified-Since` header

3. **Cache-Control**
   - Format: `no-cache, no-store, must-revalidate`
   - Controls caching behavior

4. **Content-Type**
   - Format: `application/xml`
   - Type of content being served

---

## 🧪 Testing Change Detection

### Test Script (Bash):
```bash
#!/bin/bash

URL="https://oneworldonefamilymeditation.com/sitemap.xml"

echo "=== Request 1 ==="
ETAG=$(curl -sI "$URL" | grep -i "etag:" | cut -d' ' -f2 | tr -d '\r\n')
echo "ETag: $ETAG"

sleep 2

echo "\n=== Request 2 (with If-None-Match) ==="
STATUS=$(curl -sI -H "If-None-Match: $ETAG" "$URL" | head -n 1)
echo "Status: $STATUS"

if [[ $STATUS == *"304"* ]]; then
  echo "✅ Content unchanged (304 Not Modified)"
else
  echo "🔄 Content changed (200 OK)"
fi
```

---

## 🔍 Online Tools

1. **HTTP Header Checker**:
   - https://tools.keycdn.com/curl
   - https://reqbin.com/curl

2. **Browser Extensions**:
   - **ModHeader** (Chrome/Edge)
   - **Header Editor** (Firefox)

---

## 📝 Expected Headers for Your Site

### sitemap.xml:
```
HTTP/1.1 200 OK
Content-Type: application/xml
ETag: "sitemap-5-1737974400000"
Last-Modified: Mon, 27 Jan 2025 12:00:00 GMT
Cache-Control: no-cache, no-store, must-revalidate
```

### index.html:
```
HTTP/1.1 200 OK
Content-Type: text/html
ETag: "index-1737974400000"
Last-Modified: Mon, 27 Jan 2025 12:00:00 GMT
Cache-Control: public, max-age=0
```

---

## 🎯 For Your Puppeteer Scraper

Your scraper should:
1. Make initial request and save `ETag`
2. On subsequent requests, send `If-None-Match: <saved-etag>`
3. If response is `304 Not Modified` → no changes
4. If response is `200 OK` → content changed, scrape again

Example Puppeteer code:
```javascript
const response = await page.goto(url, {
  waitUntil: 'networkidle0'
});

const etag = response.headers()['etag'];
console.log('ETag:', etag);

// Save ETag for next request
// On next scrape, use:
// await page.setExtraHTTPHeaders({
//   'If-None-Match': savedEtag
// });
```

---

## ✅ Quick Test Commands

```bash
# Check sitemap headers
curl -I https://oneworldonefamilymeditation.com/sitemap.xml

# Check main page headers
curl -I https://oneworldonefamilymeditation.com/

# Check with timestamp
curl -v https://oneworldonefamilymeditation.com/sitemap.xml 2>&1 | grep -i "etag\|last-modified"

# Monitor changes (runs every 10 seconds)
watch -n 10 'curl -I https://oneworldonefamilymeditation.com/sitemap.xml | grep -i etag'
```

---

**Note**: The sitemap.xml updates dynamically every minute (based on current minute), making it perfect for testing change detection!

