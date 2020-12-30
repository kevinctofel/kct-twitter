
function showMentions() {
    // let mentionList = [];
    let mentionList = "";
    let mentions = {
        "data": [
            {
                "created_at": "2020-12-28T23:23:07.000Z",
                "id": "1343699025623736320",
                "text": "@KevinCTofel https://t.co/KZT0EUwEgI"
            },
            {
                "created_at": "2020-12-28T20:06:59.000Z",
                "id": "1343649666995527681",
                "text": "@KevinCTofel Have you tried out @Remembear (a password manager created from TunnelBear LLC)?"
            },
            {
                "created_at": "2020-12-28T19:30:22.000Z",
                "id": "1343640454160646145",
                "text": "@KevinCTofel #5Gsfor5G contest is happening NOW 🤑 Tap the button below to enter and you could win $5,000!"
            },
            {
                "created_at": "2020-12-28T16:28:14.000Z",
                "id": "1343594618802339847",
                "text": "@KevinCTofel @EvanKirstel @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta it would drive a ultra-wide computer monitor (Gaming/non Gaming) very nicely at high resolution. https://t.co/Iwv5uxhpj5"
            },
            {
                "created_at": "2020-12-28T14:36:04.000Z",
                "id": "1343566391174172672",
                "text": "@DougonIPComm @JimHarris @DailyDOOH @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel Cool"
            },
            {
                "created_at": "2020-12-28T14:34:58.000Z",
                "id": "1343566114794713089",
                "text": "@EvanKirstel @JimHarris @DailyDOOH @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel The Blink Outdoor camera is looking pretty good once i get it setup :)  Up to 2 years battery life on a pair of AA batteries, color/IR night camera."
            },
            {
                "created_at": "2020-12-28T14:34:51.000Z",
                "id": "1343566083157012488",
                "text": "@BBTNB @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel Yeah pretty great."
            },
            {
                "created_at": "2020-12-28T14:33:46.000Z",
                "id": "1343565810451812352",
                "text": "@EvanKirstel @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel AirPods Pro by Apple. Magical."
            },
            {
                "created_at": "2020-12-28T14:33:06.000Z",
                "id": "1343565645594710018",
                "text": "What’s your favorite gadget of 2020? #gadgets #CES2021 #ces @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel https://t.co/V6d810IhGP"
            },
            {
                "created_at": "2020-12-27T20:09:44.000Z",
                "id": "1343287971907252225",
                "text": "Hot off the press! The Customer Behavior Daily is out! https://t.co/gbHkwYIYK8 Stories by @EatsBeat @KevinCTofel @DaveKillebrew #programming #javascript"
            }
        ],
        "meta": {
            "oldest_id": "1343287971907252225",
            "newest_id": "1343699025623736320",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3w2ok87ex5dwoo1xcwlfxm67ei45"
        }
    }


    mentions.data.forEach(element => {
        console.log(element.text);
        mentionList = mentionList + (`${element.text}</br></br>${element.created_at}</br><hr></br>`);

        console.log(mentionList);

        return $('.mentions').html(`${mentionList}`);
    });
}

// showMentions();

function getMentions() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer {BEARER_TOKEN}");
    myHeaders.append("Cookie", "personalization_id=\"v1_bKEizU26Vm38/yFg2Dwd/w==\"; guest_id=v1%3A160919363736997219");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        // credentials: 'include'
    };

    fetch(proxyurl + "https://api.twitter.com/2/users/43553/mentions?tweet.fields=created_at", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

getMentions();