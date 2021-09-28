from  bs4 import BeautifulSoup

with open('index.html' , 'r') as html_file:
    content = html_file.read()
    
    soup= BeautifulSoup(content, "lxml")

    links= soup.findAll("li", class_="links");

    for link in links:
        #Coge la parte de la etiqueta que le interesa
        linkName= link.a.text
        print(f"{linkName} + cuesta x dinero")