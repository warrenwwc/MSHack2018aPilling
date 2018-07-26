function imgUrlReq(img) {
    var req = {
     method: 'POST',
     url: 'https://mshackimageapi.azurewebsites.net/api/imageapi?code=yrlwmBHn3oGpo9Dy5h0yndytaQjZEao4Ud/OnfrEQLCdTLmJtEeIjQ==',
     headers: {
       'Content-Type': "application/json"
     },
     data: { 'img': String(img) }
    }

    return req;
}


function cvApiReq(url) {
    var req = {
     method: 'POST',
     //url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en',
     url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en',
     headers: {
       'Content-Type': "application/json",
        'Ocp-Apim-Subscription-Key': "63fd25c94e984ee8aa65c34b59ce094a"
     },
     data: { 'url': url }
    }

    return req;
}

function cvApiReq2(url) {
    var req = {
     method: 'POST',
     url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/10405bea-64c6-48b7-9fcb-f54c4de3f263/url',
     headers: {
       'Content-Type': "application/json",
        'Prediction-Key': "a6969647a1ca45c3b3337232f133f570"
     },
     data: { 'Url': url }
    }

    return req;
}

function cvApiReqBinary(url) {
    var req = {
     method: 'POST',
     url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/f937fcc2-a55b-4744-8ba4-4525666be99d/image',
     headers: {
       'Content-Type': "application/octet-stream",
        'Prediction-Key': "e762cd5f0d1143afa87ea8217bb8b1bc"
     },
     data: body
    }

    return req;
}