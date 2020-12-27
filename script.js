

function showMentions () {
    let mentionList = [];
    let mentions = {
        "data": [
            {
                "id": "1342937789575225344",
                "text": "@KevinCTofel Probably, but Apple's spent a decade developing chip design expertise. If Google wants this, they're likely not just going to do it in a year or two. Which means, of course, that they should start now."
            },
            {
                "id": "1342791769637863424",
                "text": "@KevinCTofel @MikyDe @lasersailor https://t.co/ZHbC5uG6Iq"
            },
            {
                "id": "1342510755833405445",
                "text": "Merry Xmas @KevinCTofel \n\nGot this from Santa can't wait to listen to it. https://t.co/sHe3opsj9b"
            },
            {
                "id": "1342258605718818816",
                "text": "@ringostarrmusic @KevinCTofel I spread a peace ✌️ of 💕 your way, with thanks for all the groovy music 🎵🎶"
            },
            {
                "id": "1342250317602119683",
                "text": "@Chris_Yeung98 @KevinCTofel Christopher, hope you get a chance to give Bitwarden a spin! You can read more on our security here https://t.co/h8wVDqRf01 Unique attributes among others are an open-source approach and ability to self-host. There is a free forever option for individuals and a free 2 person org."
            },
            {
                "id": "1342249909806899201",
                "text": "@KevinCTofel @Bitwarden Have you tried out @EnpassApp?"
            },
            {
                "id": "1342247370080342017",
                "text": "@KevinCTofel @Bitwarden @LastPass @1Password Just by looking at 1P's security, it's a bit more advanced than other password managers: 1P also has a secret key that it's used along with the MP to encrypt/decrypt 1P data. A con to that is that the person would have to either print out the Emergency Kit or something else..."
            },
            {
                "id": "1342246156064206848",
                "text": "@KevinCTofel @Bitwarden How was your experience with @LastPass and @1Password, respectively?"
            },
            {
                "id": "1342245177428221957",
                "text": "@KevinCTofel Besides using @Bitwarden, what other password managers have you tried?"
            },
            {
                "id": "1342218456507310086",
                "text": "@KevinCTofel On a Mac? Should he using Tweetbot! No ads in it."
            }
        ],
        "meta": {
            "oldest_id": "1342218456507310086",
            "newest_id": "1342937789575225344",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3w2oi3gyz1ft2i1ksrx9b9sdxf7a"
        }
    }

    mentions.data.forEach(element => {
        console.log(element.text);
        mentionList.push(`${element.text}</br></br>`)
    });
   
    return $('.mentions').html(`${mentionList}`);
}

showMentions();
