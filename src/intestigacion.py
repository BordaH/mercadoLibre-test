import requests

def consumeGETRequestSync():
    url = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326'
    headers = {"Accept": "application/json"}
    # call get service with headers and params
    response = requests.get(url,headers = headers)
    print "code:"+ str(response.status_code)
    print "******************"
    print "headers:"+ str(response.headers)
    print "******************"
    print "content:"+ str(response.text)

consumeGETRequestSync()