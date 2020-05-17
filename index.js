console.log('This is postman');
//counter
let paramcount = 0;
//utility functions....
//1.function to get DOM element from the string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}



// hiding parameter box initially
let parameterBox = document.getElementById('parameterBox')
parameterBox.style.display = 'none';

//if clicks on json box,hide the parameter box
let customRadio = document.getElementById('customRadio')
customRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none'
    document.getElementById('parameterBox').style.display = 'block'
})

//if clicks on params box,hide the json box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parameterBox').style.display = 'none';
})


//if user clicks on + button add more params and also for -button
let addParam = document.getElementById('addParam');
console.log('gugu');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let str = `
    <div class="form-row my-2 ">
    <label for="url" class="col-sm-2 col-form-label">parameter${paramcount+2}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterkey${paramcount+2}" placeholder="Enter parameter  ${paramcount+2} key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${paramcount+2}"
            placeholder="Enter parameter  ${paramcount+2} Value">
    </div>

    <button class="btn btn-primary deleteParam" > - </bu
    `
    //convert the lement string to DOM
    let paramElement = getElementFromString(str);
    // console.log(paramElement);
    params.appendChild(paramElement)
    //adding event listner to remove elements when click on -
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }

    paramcount++;
})


//if the user  clicks on the submit button.......
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // show the message to wait till the request is being processed.....
    // document.getElementById('responseJsonText').value = "Please wait......Fetching Your Response";
    document.getElementById('responsePrism').innerHTML = "Please wait......Fetching Your Response";

    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < paramcount + 1; i++) {
            if (document.getElementById('parameterkey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterkey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
                // console.log(key);
                // console.log("gugu");


            }
        }
        data = JSON.stringify(data);
    } else {
        data = document.getElementById('requestJsonText').value;
    }



    //logging all the value for debugging 
    console.log(url);
    console.log(requestType);
    console.log(contentType);
    console.log(data);


    //if the request type is get......
    if (requestType == 'GET') {
        fetch(url, {
                method: 'GET'
            })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    } else {
        fetch(url, {
                method: 'POST',
                body: data,
                // headers: {
                //     "Content-type": "application/json; charset=UTF-8"
                // }
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }



})