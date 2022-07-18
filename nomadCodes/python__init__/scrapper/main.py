import requests
from bs4 import BeautifulSoup

indeed_result = requests.get("http://www.alba.co.kr/")

#print(indeed_result.text) 뜨면 정상

indeed_soup = BeautifulSoup(indeed_result.text, "html.parser")

print(indeed_soup)
