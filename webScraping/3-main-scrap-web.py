from bs4 import BeautifulSoup;

import requests;

#Trae el html de la pagina
html_text = requests.get("https://www.infojobs.net/ofertas-trabajo/python").text

soup =BeautifulSoup(html_text, "lxml")

botones= soup.findAll( title_="Nueva")

print (botones)