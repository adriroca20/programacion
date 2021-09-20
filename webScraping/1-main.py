from  bs4 import BeautifulSoup

with open('index.html' , 'r') as html_file:
    content = html_file.read()
    
    soup= BeautifulSoup(content, "lxml")
    
    tags= soup.findAll("h5")
    
    for element in tags:
        print(element.text + "\n")