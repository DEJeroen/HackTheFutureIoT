import json
from os.path import join, dirname
from os import environ
from watson_developer_cloud import VisualRecognitionV3

test_url = 'https://bitbucket-assetroot.s3.amazonaws.com/repository/9E6oEk/632489907-image2.jpg?Signature=XF1Lb%2BNZUyUr1GwMSuoNArBphCw%3D&Expires=1481189659&AWSAccessKeyId=AKIAIVFPT2YJYYZY3H4A&versionId=clIofJKnrYwxbyCuDVyXxHH20nk_nKCe'
visual_recognition = VisualRecognitionV3('2016-05-20', api_key='243ed19843348fcdb81d320897e742f027887ab3')
print(json.dumps(visual_recognition.classify(images_url=test_url,  threshold=0.6,
                                                     classifier_ids=['alien_630240897', 'default']), indent=2))
