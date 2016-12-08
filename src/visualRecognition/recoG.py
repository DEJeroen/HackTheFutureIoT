import json
from os.path import join, dirname
from os import environ
from watson_developer_cloud import VisualRecognitionV3
import urllib.request
import ast
def detectAlien():
    test_url=""
    highestNumber=0

    imgUrls=urllib.request.urlopen("http://media.nu.nl/m/m1mxoscahumw_wd640.jpg/olivia-wilde-nieuw-gezicht-van-hm-concious-exclusive.jpg").read()
    imgUrls=str(imgUrls)
    imgUrls=imgUrls.split(',')
    imgUrls[0]=(imgUrls[0][13:])
    imgUrls[4]=imgUrls[len(imgUrls)-1][0:-3]
    for url in imgUrls:
        currentNumber=url.rsplit('/')[5].split('.')[0]
        if int(highestNumber) < int(currentNumber):
            highestNumber=currentNumber
            test_url=url[1:-1]


    test_url = 'http://cdn.images.express.co.uk/img/dynamic/80/590x/secondary/alien-277968.jpg'
    print(test_url)
    visual_recognition = VisualRecognitionV3('2016-05-20', api_key='243ed19843348fcdb81d320897e742f027887ab3')
    data=json.dumps(visual_recognition.classify(images_url=test_url,  threshold=0.6,
                                                         classifier_ids=['alien_630240897', 'default']), indent=2)

    json1_data = json.loads(data)
    datapoints = json1_data['images'][0]
    classifiers=datapoints['classifiers']
    detected=classifiers.pop()['name']
    if detected == "alien":
        print("detected")
        exit(1)
    else:
        print("not detected")
        exit(0)
detectAlien()
