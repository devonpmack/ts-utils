import re
import sys

f = open(sys.argv[1])

content = f.read()

docs = re.findall(r'[ \/]\*.*', content)

markdown = ""

for line in docs:
  line = re.sub(r'[ \/]\*[*\/]?', "", line)
  print(line)
