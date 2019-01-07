// figuring out how to integrate these calls

  window.addEventListener("lynxMobileLoaded", function() {


let account = {
try {
    account = await window.lynxMobile.requestSetAccountName();
} catch (err) {
    console.log(err);
}


let create = {
    actions: [{
        account: "benbenbenben",
        name: "create",
        data: {
            author: "{ account }",
            id: "?",
            description: "?",
        },
        authorization: [
            {
                actor: "{ account }",
                permission: "active"
            }
        ]
        }]

let complete = {
    actions: [{
        account: "benbenbenben",
        name: "complete",
        data: {
          author: "{ account }",
          id: "?",
        },
        authorization: [
            {
                actor: "funstuffgogo",
                permission: "active"
                }
            ]
        }]
    }

    let destroy = {
        actions: [{
            account: "benbenbenben",
            name: "destroy",
            data: {
              author: "{ account }",
              id: "?",
            },
            authorization: [
                {
                    actor: "{ account }",
                    permission: "active"
                    }
                ]
            }]
        }

    result = await window.lynxMobile.transact(create);
    result = await window.lynxMobile.transact(complete);
    result = await window.lynxMobile.transact(destroy);
