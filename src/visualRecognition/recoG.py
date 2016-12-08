import json
from os.path import join, dirname
from os import environ
from watson_developer_cloud import VisualRecognitionV3
import requests

test_url = 'http://www.hdwallpapers.in/walls/alien-HD.jpg'
visual_recognition = VisualRecognitionV3('2016-05-20', api_key='243ed19843348fcdb81d320897e742f027887ab3')
data=json.dumps(visual_recognition.classify(images_url=test_url,  threshold=0.6,
                                                     classifier_ids=['alien_630240897', 'default']), indent=2)

json1_data = json.loads(data)
datapoints = json1_data['images'][0]
classifiers=datapoints['classifiers']
detected=classifiers.pop()['name']
if detected == "alien":
    print(True)
else:
    print(False)
