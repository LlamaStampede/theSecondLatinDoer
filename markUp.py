f = open("originalText.txt", "r")
lines = f.readlines()

import re


listOfLines = []
for i in range(0, len(lines)):
        words = re.findall(r"[\w']+|[.,!?;: ()“]", lines[i])
        listOfLines.append(words)

f.close()

g = open("indexTwo.html", "w")
g.write('''
<!DOCTYPE html>\n
<html>\n
    <head>\n
        <link rel="stylesheet" type="text/css" href="styles.css">\n
    </head>\n
    <body>\n
        <div id="header" class="col12"> \n
            <h1 class="col4"> The Latin Doer 2.0!</h1>\n
        </div>\n
        <div class="col12" style="padding-top: 5%;">\n
            <div class="col8" style="padding-left: 16.6%">\n''')

punc = [".", ",", "!", "?", ";", ":", "“", " ", "(", ")"]
wordsSoFar = 0
for lineID in range(0, len(listOfLines)):
        g.write('<div class="line" id="' + str(lineID) + '">\n')
        puncSoFar = 0
        text = []
        
        for word in listOfLines[lineID]:
                if word not in punc:
                        text.append('<span class="text" id="' + str(wordsSoFar) + '">' + word + '</span>')
                        wordsSoFar += 1
                        
                elif word == " ":
                        text.append("\n")
                        
                else:
                        text.append('<span class="punctuation" id="' + str(wordsSoFar) + "." + str(puncSoFar) + '">' + word + '</span>')
                        puncSoFar += 1
                        
        if (lineID+1)%5 == 0:
                length = str(lineID+1)
                amountOfSpaces = 1 + (8-len(length)*2)
                g.write(length + "&nbsp;"*amountOfSpaces + "".join(text) + "\n" + '</div>\n')
        else:
                g.write("&nbsp;"*9 + "".join(text) + "\n" + '</div>\n')
        

g.write('''
            </div>
            <div id="tableholder" class="col2">
                <table>
                    <tr>
                        <th>
                            <div id="current" data-value="off">click on or hover over a word</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div id="dictionary">dictionary entry</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div id="parsing">parsing</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div id="translation">translation</div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div id="comment">comment</div>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    </body>
    <footer style="height:20%;">

    </footer>
</html>

<script src="script.js"></script>''')
g.close()

