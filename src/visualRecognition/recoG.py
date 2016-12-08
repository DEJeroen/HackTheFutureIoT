import json
from os.path import join, dirname
from os import environ
from watson_developer_cloud import VisualRecognitionV3
import urllib.request
import ast
def detectAlien():
    test_url=""
    highestNumber=0

    imgUrls=urllib.request.urlopen("https://hackthefuture-api.eu-gb.mybluemix.net/api/Images/all").read()
    imgUrls=str(imgUrls)
    imgUrls=imgUrls.split(',')
    imgUrls[0]=(imgUrls[0][13:])
    imgUrls[4]=imgUrls[len(imgUrls)-1][0:-3]
    print (imgUrls[0])
    print (imgUrls[1])
    print (imgUrls[2])
    print (imgUrls[3])
    print (imgUrls[4])
    for url in imgUrls:
        currentNumber=url.rsplit('/')[5].split('.')[0]
        if int(highestNumber) < int(currentNumber):
            highestNumber=currentNumber
            test_url=url[1:-1]


    test_url = 'http://www.hdwallpapers.in/walls/alien-HD.jpg'
    print(test_url)
    visual_recognition = VisualRecognitionV3('2016-05-20', api_key='243ed19843348fcdb81d320897e742f027887ab3')
    data=json.dumps(visual_recognition.classify(images_url=test_url,  threshold=0.6,
                                                         classifier_ids=['alien_630240897', 'default']), indent=2)

    json1_data = json.loads(data)
    datapoints = json1_data['images'][0]
    classifiers=datapoints['classifiers']
    detected=classifiers.pop()['name']
    if detected == "alien":
        exit(1)
    else:
        exit(0)

