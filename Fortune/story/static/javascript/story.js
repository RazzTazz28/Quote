const quote_button = document.getElementById("get_quote")
const text_quote = document.getElementById("quote")

const quotes_div = document.getElementById("quotes_div")
const quotes_button = document.getElementById("get_quotes")


quote_button.addEventListener("click", function(){
    //const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    payload = {}
    $.ajax({
        //headers: {'X-CSRFToken': csrftoken},
        type: 'GET',
        dataType: "json",
        url: "/quote_url/",
        timeout: 0,
        data: payload,
        success: function(data){
            text_quote.textContent = data
        },
        error: function(request, status, error){
            console.log(request.responseText);
            console.log(status);
            console.log(error);
        }
    })
})

quotes_button.addEventListener("click", function(){
    //const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    payload = {}
    $.ajax({
        //headers: {'X-CSRFToken': csrftoken},
        type: 'GET',
        dataType: "json",
        url: "/quotes_url/",
        timeout: 0,
        data: payload,
        success: function(data){
            for(i=0; i<data.length; i++){
                var childElement = document.createElement('h4');
                childElement.setAttribute('class', 'quotes');
                childElement.textContent = data[i];
                quotes_div.appendChild(childElement);
            }
        },
        error: function(request, status, error){
            console.log(request.responseText);
            console.log(status);
            console.log(error);
        }
    })
})
