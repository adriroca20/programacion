# importa beautifulsoup4 desde bs4
from  bs4 import BeautifulSoup

#Abre el documento html en modo lectura y lo guarda en la variable content
with open('index.html' , 'r') as html_file:
    content = html_file.read()
    
    #Con lxml lee content y lo guarda en soup para poder
    #buscar lo que necesites en el codigo
    soup= BeautifulSoup(content, "lxml")
    
    #Busca los h5 del codigo
    tags= soup.findAll("h5")
    
    #Es un forEach de toda la vida en la lista tags
    for element in tags:
        print(element.text + "\n")