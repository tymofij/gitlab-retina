dist:
	mkdir -p dist

chrome: dist
	cd src/chrome && zip -r9 ../../dist/chrome.zip *

firefox: dist
	cd src/firefox && zip -r9 ../../dist/firefox.zip *