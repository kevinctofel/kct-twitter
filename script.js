

function showMentions () {
    let mentionList = [];
    let mentions = {
        "data": [
            {
                "id": "1343649666995527681",
                "text": "@KevinCTofel Have you tried out @Remembear (a password manager created from TunnelBear LLC)?"
            },
            {
                "id": "1343640454160646145",
                "text": "@KevinCTofel #5Gsfor5G contest is happening NOW 🤑 Tap the button below to enter and you could win $5,000!"
            },
            {
                "id": "1343594618802339847",
                "text": "@KevinCTofel @EvanKirstel @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta it would drive a ultra-wide computer monitor (Gaming/non Gaming) very nicely at high resolution. https://t.co/Iwv5uxhpj5"
            },
            {
                "id": "1343566391174172672",
                "text": "@DougonIPComm @JimHarris @DailyDOOH @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel Cool"
            },
            {
                "id": "1343566114794713089",
                "text": "@EvanKirstel @JimHarris @DailyDOOH @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel The Blink Outdoor camera is looking pretty good once i get it setup :)  Up to 2 years battery life on a pair of AA batteries, color/IR night camera."
            },
            {
                "id": "1343566083157012488",
                "text": "@BBTNB @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel Yeah pretty great."
            },
            {
                "id": "1343565810451812352",
                "text": "@EvanKirstel @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel AirPods Pro by Apple. Magical."
            },
            {
                "id": "1343565645594710018",
                "text": "What’s your favorite gadget of 2020? #gadgets #CES2021 #ces @JimHarris @DailyDOOH @DougonIPComm @IrmaRaste @rwang0 @DaveMichels @CTATech @cta @KevinCTofel https://t.co/V6d810IhGP"
            },
            {
                "id": "1343287971907252225",
                "text": "Hot off the press! The Customer Behavior Daily is out! https://t.co/gbHkwYIYK8 Stories by @EatsBeat @KevinCTofel @DaveKillebrew #programming #javascript"
            },
            {
                "id": "1343269241517203456",
                "text": "@KevinCTofel Distraction-free twitter client 💯"
            }
        ],
        "meta": {
            "oldest_id": "1343269241517203456",
            "newest_id": "1343649666995527681",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3w2ok87bwbpptb0ndg4pv4u08euu"
        }
    }

    mentions.data.forEach(element => {
        console.log(element.text);
        mentionList.push(`${element.text}</br><hr></br>`)
    });
   
    return $('.mentions').html(`${mentionList}`);
}

// showMentions();

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAABb9KwEAAAAAdAQk0wYeHtKNT1j5rH6HTBX0uDw%3DvKW3rElBgwra03Hg2JxYEWtlbekJKOnyJdj2wDjOpjRgzBFSsn");
myHeaders.append("Cookie", "personalization_id=\"v1_bKEizU26Vm38/yFg2Dwd/w==\"; guest_id=v1%3A160919363736997219");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  mode: 'no-cors'
};

fetch("https://api.twitter.com/2/users/43553/mentions", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
