import json
from os.path import join, dirname
from os import environ
from watson_developer_cloud import VisualRecognitionV3

test_url = 'http://irobinhood.org/images/personImg.png'
visual_recognition = VisualRecognitionV3('2016-05-20', api_key='243ed19843348fcdb81d320897e742f027887ab3')
print(json.dumps(visual_recognition.classify(images_url=test_url,  threshold=0.1,
                                                     classifier_ids=['alien_630240897', 'default']), indent=2))
